/* eslint-disable autofix/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint 잠시 주석처리 해두었습니다. 해결후에 다 지울예정
import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import Keyboard from '../../assets/Keyboard.svg';
import { BasicButton } from '../../components/common/BasicButton';
import { showToastMessage } from '../../components/common/Toast';
import { instanceAPI } from '../../utils/constant';
import { socket } from '../../utils/socket';

import UserBox from './UserBox';

const PERCENT_ARRAY = ['1%', '3%', '5%', '10%'];
const CONTROL_ARRAY = ['START', 'NEXT', 'STOP', 'RESET'];

type chatProps = socketChatMsg;

type User = {
  userId: string;
  isAdmin: boolean;
};

let roomSocket: any = null;

const RoomPage = () => {
  const [sendMsg, setSendMsg] = useState(''); // 입력한 채팅
  const [chat, setChat] = useState<chatProps[]>([]); // 받아올 채팅
  const [users, setUsers] = useState<User[]>([]); // 유저 목록

  const selectedItemInfo = useLocation()?.state;
  const { createdAt, name, startingBid, category, imageUrl, id } =
    selectedItemInfo;
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const buttonArray = isAdmin ? CONTROL_ARRAY : PERCENT_ARRAY;

  useEffect(() => {
    if (!selectedItemInfo) {
      showToastMessage('선택된 아이템이 없습니다.');
      navigate('/');
    } else {
      console.log(selectedItemInfo);
      instanceAPI
        .get(`auth/admin/${id}`)
        .then((res) => {
          setIsAdmin(res.data.data.isAdmin);

          // 입장시 소켓 연결, 유저에 따라 입장 확인
          // eslint-disable-next-line no-var
          roomSocket = socket(`${id}`);
          roomSocket.on('alert', (message: any) => console.log(message));
          roomSocket.on('userList', (list: any) =>
            setUsers(list.connectedUsers),
          );
          roomSocket.on('message', (data: any) => console.log(data));

          return () => {
            roomSocket.off('alert');
            roomSocket.off('userList');
          };
        })
        .catch(() => showToastMessage('유효하지 않은 상품id입니다.'));
    }
  }, []);

  const handleChangeMsg = (message: string) => {
    setSendMsg(message);
  };

  const handleSendMsg = () => {
    console.log('메로엠롱');
    roomSocket.emit('message', {
      message: sendMsg,
    });
  };

  return (
    <Container>
      <TradeContainer>
        <ItemInfoBox>
          <ImgBox>
            <Image src={imageUrl} />
          </ImgBox>
          <InfoBox>
            <TitleAndTimeBox>
              <Content>제목: 중고차 3대 경매</Content>
              <TimeContent>시간: {createdAt}</TimeContent>
            </TitleAndTimeBox>
            <Content>품목 : {category}</Content>
            <Content>품명 : {name}</Content>
            <Content>시작가 : {startingBid}</Content>
          </InfoBox>
        </ItemInfoBox>
        <CommunicationBox>
          <StatusBox>
            <BettingContent>이름 : 10,000,000만원 입찰</BettingContent>
            <BettingContent>이름 : 15,000,000만원 입찰</BettingContent>
            {/* 이건 채팅인데 어떻게 받아오려나...배열인가 */}
          </StatusBox>
          <StatusBox>
            <KeyBoardBox>
              <KeyBoard
                type="text"
                value={sendMsg}
                onChange={(e) => handleChangeMsg(e.target.value)}
              />
              <button onClick={handleSendMsg}>
                <KeyBoardImg src={Keyboard} />
              </button>
            </KeyBoardBox>
            <ChatContent>이름 : 10,000,000만원 입찰</ChatContent>
          </StatusBox>
        </CommunicationBox>
        <BettingBox>
          <BettingCurrent>
            <BettingText>TIME COUNT : 10:00</BettingText>
          </BettingCurrent>
          {/* 이거 나중에 리팩터링 분해하기 */}
          <PercentButtonBox>
            {buttonArray.map((item, index) => (
              <PercentButton key={index}>
                <BettingText>{item}</BettingText>
              </PercentButton>
            ))}
          </PercentButtonBox>
          {!isAdmin && (
            <>
              <BettingCurrent>
                <BettingText>Point : 11,000,000 원</BettingText>
              </BettingCurrent>
              <BettingButton>
                <BettingText>입찰하기</BettingText>
              </BettingButton>
            </>
          )}
        </BettingBox>
      </TradeContainer>
      <UserContainer>
        <>
          <CurrentUserCount>현재 접속자수 : {users.length}명</CurrentUserCount>
          <CurrentUserBox>
            <button onClick={() => console.log('ㅎㅇ')}>
              <ArrowImg src={Arrow} />
            </button>
            {users.map((item, index) => (
              <UserBox key={index} name={item.userId} />
            ))}
          </CurrentUserBox>
        </>
      </UserContainer>
    </Container>
  );
};
const ArrowImg = styled.img`
  position: relative;
  /* CurrentUserBox 기준으로 계산 */
  bottom: -375px;
  left: -135px;
  width: 30px;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  height: 854px;
  /* height: 90vh; //이건 한번 보고 */
  margin-top: 33px;
`;

const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 945px;
  height: 778px;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 945px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const CommunicationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 945px;
  height: 224px;
`;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 460px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const BettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 230px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 854px;
  margin: auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const CurrentUserCount = styled.p`
  text-align: right;
  ${({ theme }) => theme.fonts.B_POINT_18}
  color: ${({ theme }) => theme.colors.WHITE};
  margin-right: 27px;
`;

const CurrentUserBox = styled.div`
  width: 300px; //이것도 계산안됨
  height: 750px;
  margin: 0px auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgBox = styled.div`
  width: 275px;
  height: 183px;
  margin: auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const InfoBox = styled.div`
  width: 550px;
  height: 183px;
  margin: auto;
`;

const TitleAndTimeBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.B_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px 0px; //임의판단
`;

const TimeContent = styled(Content)`
  margin-left: 100px;
`;

const BettingContent = styled(Content)`
  margin-left: 35px;
`;

const ChatContent = styled(Content)`
  ${({ theme }) => theme.fonts.B_POINT_17}
  margin: 5px 0px; //임의판단
  margin-left: 35px;
  background-color: skyblue;
`;

const KeyBoardBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px auto 15px;
  padding: 10px;
  box-sizing: border-box;
`;

const KeyBoard = styled.input`
  flex: 1;
  border: none;
`;

const KeyBoardImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const BettingCurrent = styled.div`
  width: 400px;
  height: 40px;
  margin: 0 auto 23px;
  background-color: ${({ theme }) => theme.colors.NAVY};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PercentButtonBox = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 23px;
`;

const PercentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const BettingButton = styled(BasicButton)`
  width: 240px;
  height: 40px;
`;

const BettingText = styled.p`
  ${({ theme }) => theme.fonts.B_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
`;
export default RoomPage;
