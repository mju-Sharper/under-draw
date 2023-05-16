import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BasicButton } from '../../components/common/BasicButton';
import NavigationBar from '../../components/common/NavigationBar';
import { showToastMessage } from '../../components/common/Toast';
import ItemBox from '../../components/Main/ProductContainer/ItemBox';
import ChatContainer from '../../components/Room/ChatContainer';
import UserContainer from '../../components/Room/UserContainer';
import { instanceAPI } from '../../utils/constant';
import { CONTROL_ARRAY, PERCENT_ARRAY } from '../../utils/mock';
import { socket } from '../../utils/socket';

let roomSocket: any = null;

const RoomPage = () => {
  const [sendMsg, setSendMsg] = useState(''); // 입력한 채팅
  const [chat, setChat] = useState<ChatMsg[]>([]); // 받아올 채팅
  const [users, setUsers] = useState<User[]>([]); // 유저 목록

  const selectedItemInfo = useLocation()?.state;
  const id = selectedItemInfo.id;
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const buttonArray = isAdmin ? CONTROL_ARRAY : PERCENT_ARRAY;

  useEffect(() => {
    if (!selectedItemInfo) {
      showToastMessage('선택된 아이템이 없습니다.');
      navigate('/');
    } else {
      instanceAPI
        .get(`auth/admin/${id}`)
        .then((res) => {
          setIsAdmin(res.data.data.isAdmin);

          // 입장시 소켓 연결, 유저에 따라 입장 확인
          roomSocket = socket(`${id}`);
          roomSocket.on('alert', (message: string) => {
            const welcomeChat: ChatMsg = {
              username: '알림',
              message: message,
            };
            setChat((prevChat) => [...prevChat, welcomeChat]);
          });
          roomSocket.on('userList', (list: socketUserList) =>
            setUsers(list.connectedUsers),
          );
          roomSocket.on('chat', (data: socketChatMsg) => {
            const newChat: ChatMsg = {
              username: data.userInfo.userId,
              message: data.message.message,
              admin: data.userInfo.isAdmin,
            };
            setChat((prevChat) => [...prevChat, newChat]);
          });

          window.addEventListener('popstate', handlePopstate);

          return () => {
            roomSocket.off('alert');
            roomSocket.off('userList');
            roomSocket.off('message');

            window.removeEventListener('popstate', handlePopstate);
            roomSocket.disconnect();
          };
        })
        .catch(() => showToastMessage('유효하지 않은 상품id입니다.'));
    }
  }, []);

  const handlePopstate = () => {
    roomSocket.disconnect();
  };

  const handleChangeMsg = (message: string) => {
    setSendMsg(message);
  };

  const handleSendMsg = () => {
    roomSocket.emit('chat', {
      message: sendMsg,
    });
    setSendMsg('');
  };

  return (
    <Container>
      <NavigationBar roomSocket={roomSocket} />
      <TradeContainer>
        <ItemBox items={selectedItemInfo} />
        <CommunicationBox>
          <StatusBox>
            <BettingContent>이름 : 10,000,000만원 입찰</BettingContent>
            <BettingContent>이름 : 15,000,000만원 입찰</BettingContent>
            {/* 이건 채팅인데 어떻게 받아오려나...배열인가 */}
          </StatusBox>
          <StatusBox>
            <ChatContainer
              chat={chat}
              sendMsg={sendMsg}
              onChange={(e) => handleChangeMsg(e.target.value)}
              onClick={handleSendMsg}
            />
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
      <UserContainer userLength={users.length} users={users} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 854px;
  margin-top: 100px;
`;

const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 945px;
  height: 778px;
  margin: auto 20px;
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

const Content = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.B_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px 0px; //임의판단
`;

const BettingContent = styled(Content)`
  margin-left: 35px;
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
