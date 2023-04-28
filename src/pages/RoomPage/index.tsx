import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import Keyboard from '../../assets/Keyboard.svg';
import { BasicButton } from '../../components/common/BasicButton';
import { showToastMessage } from '../../components/common/Toast';

import UserBox from './UserBox';
// 당연한거지만 나중에 데이터 받아오면 map함수 돌릴겁니다, 목업으로 해놓기엔 데이터 포맷을 모르겠어서

const PERCENT_ARRAY = [1, 3, 5, 10];
const USER_ARRAY = [
  'User 1',
  'User 2',
  'User 3',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

const RoomPage = () => {
  const selectedItemInfo = useLocation()?.state;
  const { createdAt, name, startingBid, category, imageUrl } = selectedItemInfo;
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedItemInfo) {
      showToastMessage('선택된 아이템이 없습니다.');
      navigate('/');
    } else {
      console.log(selectedItemInfo);
      console.log(imageUrl);
      console.log('여기에서 이제 api찔러서 어드민인지 오너인지 체킁');
    }
  }, []);

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
              <KeyBoard type="text" />
              <button onClick={() => window.alert('ㅎㅇ')}>
                <KeyBoardImg src={Keyboard} />
              </button>
            </KeyBoardBox>
            <ChatContent>이름 : 10,000,000만원 입찰</ChatContent>
            <ChatContent>이름 : 10,000,000만원 입찰</ChatContent>
            <ChatContent>이름 : 10,000,000만원 입찰</ChatContent>
            {/* 이건 채팅인데 어떻게 받아오려나...배열인가 */}
          </StatusBox>
        </CommunicationBox>
        <BettingBox>
          <BettingCurrent>
            <BettingText>TIME COUNT : 10:00</BettingText>
          </BettingCurrent>
          {/* 이거 나중에 리팩터링 분해하기 */}
          <PercentButtonBox>
            {PERCENT_ARRAY.map((item, index) => (
              <PercentButton key={index}>
                <BettingText>{item} %</BettingText>
              </PercentButton>
            ))}
          </PercentButtonBox>
          <BettingCurrent>
            <BettingText>Point : 11,000,000 원</BettingText>
          </BettingCurrent>
          <BettingButton>
            <BettingText>입찰하기</BettingText>
          </BettingButton>
        </BettingBox>
      </TradeContainer>
      <UserContainer>
        <>
          <CurrentUserCount>현재 접속자수 : 300명</CurrentUserCount>
          <CurrentUserBox>
            <button onClick={() => window.alert('ㅎㅇ')}>
              <ArrowImg src={Arrow} />
            </button>
            {USER_ARRAY.map((item, index) => (
              <UserBox key={index} name={item} />
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
  justify-content: space-between;
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
  margin: 0 auto;
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
  margin: 0 auto;
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
