import styled from 'styled-components';

import Keyboard from '../../assets/Keyboard.svg';
import { BasicButton } from '../../components/common/BasicButton';

// 당연한거지만 나중에 데이터 받아오면 map함수 돌릴겁니다, 목업으로 해놓기엔 데이터 포맷을 모르겠어서

const RoomPage = () => (
  <Container>
    <TradeContainer>
      <ItemInfoBox>
        <ImgBox />
        <InfoBox>
          <TitleAndTimeBox>
            <Content>제목: 중고차 3대 경매</Content>
            <TimeContent>시간: 3월 11일 19시 30분</TimeContent>
          </TitleAndTimeBox>
          <Content>품목 : 자동차</Content>
          <Content>품명 : 아반떼..?</Content>
          <Content>시작가 : 1000만원</Content>
        </InfoBox>
      </ItemInfoBox>
      <CommunityBox>
        <StatusBox>
          <BettingContent>이름 : 10,000,000만원 입찰</BettingContent>
          <BettingContent>이름 : 15,000,000만원 입찰</BettingContent>
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
        </StatusBox>
      </CommunityBox>
      <BettingBox>
        <BettingCurrent>
          <BettingText>TIME COUNT : 10:00</BettingText>
        </BettingCurrent>
        {/* 이거 나중에 리팩터링 분해하기 */}
        <PercentButtonBox>여기 퍼센트 상자가 들어가면 됩니다</PercentButtonBox>
        <BettingCurrent>
          <BettingText>Point : 11,000,000 원</BettingText>
        </BettingCurrent>
        <BettingButton>
          <BettingText>입찰하기</BettingText>
        </BettingButton>
      </BettingBox>
    </TradeContainer>
    <UserContainer>
      <CurrentUserCount>현재 접속자수 : 300명</CurrentUserCount>
    </UserContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  height: 854px;
  /* height: 90vh; //이건 한번 보고 */
  margin-top: 33px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
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

const CurrentUserCount = styled.p`
  text-align: right;
  ${({ theme }) => theme.fonts.B_POINT_18}
  color: ${({ theme }) => theme.colors.WHITE};
  margin-right: 27px;
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
  margin-left: 120px;
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
  background-color: pink;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PercentButtonBox = styled.div`
  width: 400px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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
