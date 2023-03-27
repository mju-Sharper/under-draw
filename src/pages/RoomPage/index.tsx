import styled from 'styled-components';

const RoomPage = () => (
  <Container>
    <TradeContainer>
      <ItemInfoBox>여긴 아이템 정보가 들어가욤</ItemInfoBox>
      <CommunityBox>
        <StatusBox />
        <StatusBox />
      </CommunityBox>
      <BettingBox>여긴 버튼이 들어가욤</BettingBox>
    </TradeContainer>
    <UserContainer>여긴 접속중인 유저가 들어가욤</UserContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  height: 90vh; //이건 한번 보고
  background-color: pink;
`;

const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 945px;
  height: 778px;
  margin: auto;
  background-color: orange;
`;

const ItemInfoBox = styled.div`
  width: 945px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const CommunityBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 945px;
  height: 224px;
`;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 224px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const BettingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.NAVY};
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

export default RoomPage;
