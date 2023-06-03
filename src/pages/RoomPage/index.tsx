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
//이거 나중에 소켓 타입 변경하고

const RoomPage = () => {
  const selectedItemInfo = useLocation()?.state;
  const navigate = useNavigate();

  const { id } = selectedItemInfo;
  //지금 정신이 없어서 일단은 왜 id만 쓰는지 나중에 한번 보기
  const [sendMsg, setSendMsg] = useState(''); // 입력한 채팅
  const [chat, setChat] = useState<ChatMsg[]>([]); // 받아올 채팅
  const [users, setUsers] = useState<User[]>([]); // 유저 목록
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [realTime, setRealTime] = useState(0);
  const [betPrice, setBetPrice] = useState(0); //사용자가 시작하는 금액도 처음엔 bid로 변경되어야됨
  const [bettingContentArray, setBettingContentArray] = useState<
    updatedAuction[]
  >([]);
  const [result, setResult] = useState('');

  const buttonArray = isAdmin ? CONTROL_ARRAY : PERCENT_ARRAY;

  const onBetButtonClick = (isAdmin: boolean, buttonArrayItem: string) => {
    if (isAdmin) {
      roomSocket.emit('time', buttonArrayItem); // admin만 time이벤트 조작가능하도록
    } else {
      const percentage =
        1 +
        parseInt(buttonArrayItem.substring(0, buttonArrayItem.length - 1)) /
          100;
      setBetPrice(Math.ceil(betPrice * percentage));
    }
  };

  const getItemBidData = (id: string) => {
    instanceAPI
      .get(`auctions/bid/${id}`)
      .then((res) => {
        setBetPrice(res.data.data.bid);
      })
      .catch(() => showToastMessage('입찰 금액을 가져오는데 실패했습니다.'));
  };

  useEffect(() => {
    if (!selectedItemInfo) {
      showToastMessage('선택된 아이템이 없습니다.');
      navigate('/');
    } else {
      getItemBidData(id);
      //근데 이걸 여기서 하면 굳이 location받아올 필요가 없음.
      instanceAPI
        .get(`auth/admin/${id}`)
        .then((res) => {
          setIsAdmin(res.data.data.isAdmin);

          if (!roomSocket) roomSocket = socket(`${id}`);

          roomSocket.on('alert', (message: string) => {
            const welcomeChat: ChatMsg = {
              username: '알림',
              message: message,
            };
            if (message === '경매가 종료되었습니다.') {
              setIsEnd(true);
            }
            if (message === '경매가 시작되었습니다.') {
              setIsEnd(false);
            }
            if (message === '경매 시간이 초기화됐습니다.') {
              setRealTime(60);
            }

            //이거 로직 에반데
            setChat((prevChat) => [...prevChat, welcomeChat]);
          });
          roomSocket.on('userList', (list: socketUserList) =>
            setUsers((prevUsers) => [...prevUsers, ...list.connectedUsers]),
          );
          roomSocket.on('chat', (data: socketChatMsg) => {
            const newChat: ChatMsg = {
              username: data.userInfo.userId,
              message: data.message.message,
              admin: data.userInfo.isAdmin,
            };
            setChat((prevChat) => [...prevChat, newChat]);
          });
          roomSocket.on('message', (data: string) => {
            //이게 에러문 반환은 bidErrMsg 타입이여야되는데 왠지 몰라도 string으로 작용함
            const errMsg = JSON.parse(data).data.error;
            showToastMessage(errMsg);
          });
          roomSocket.on('bid', (data: bidDataType) => {
            setBetPrice(data.updatedAuction.bid);
            setBettingContentArray((prev) => [...prev, data.updatedAuction]);
            //가끔 state랑 prev랑 차이로 에러가 발생할 수 있다.... 그래서 해당 로직에서는 prev사용
          });
          roomSocket.on('time', (res: bidTime) => {
            setRealTime(res.leftTime);
          });

          roomSocket.on('result', (res: string) => {
            setResult(res);
          });
          window.addEventListener('popstate', handlePopstate);

          return () => {
            roomSocket.off('alert');
            roomSocket.off('userList');
            roomSocket.off('message');
            roomSocket.off('chat');
            roomSocket.off('time');
            roomSocket.off('result');

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
          {isEnd ? (
            <ResultBox>
              <ResultText>{result}</ResultText>
            </ResultBox>
          ) : (
            <>
              <StatusBox>
                {bettingContentArray.map((item, index) => (
                  <BettingContent key={index}>
                    {item.bidder} : {item.bid}만원 입찰
                  </BettingContent>
                ))}
              </StatusBox>
              <StatusBox>
                <ChatContainer
                  chat={chat}
                  sendMsg={sendMsg}
                  onChange={(e) => handleChangeMsg(e.target.value)}
                  onClick={handleSendMsg}
                />
              </StatusBox>
            </>
          )}
        </CommunicationBox>
        <BettingBox>
          <BettingCurrent>
            <BettingText>
              TIME COUNT : &nbsp;
              {realTime === 60 || !realTime ? `1:00` : `0:${realTime}`}
            </BettingText>
          </BettingCurrent>
          {/* 이거 나중에 리팩터링 분해하기 */}
          <PercentButtonBox>
            {buttonArray.map((item, index) => (
              <PercentButton
                key={index}
                onClick={() => onBetButtonClick(isAdmin, item)}
              >
                <BettingText>{item}</BettingText>
              </PercentButton>
            ))}
          </PercentButtonBox>
          {!isAdmin && (
            <>
              <BettingCurrent>
                <BettingText>Point : {betPrice} 원</BettingText>
              </BettingCurrent>
              <BettingButton
                onClick={() => {
                  roomSocket.emit('bid', {
                    bid: betPrice,
                  });
                }}
              >
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
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  width: 460px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 920px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const ResultText = styled.p`
  ${({ theme }) => theme.fonts.B_POINT_50}
  color: ${({ theme }) => theme.colors.WHITE};
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
