import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import Plus from '../../assets/PlusButton.svg';

const Registration = () => (
  <Container>
    <ContentContainer>
      <TitleBox>
        <img src={Arrow} />
        <Title>제목</Title>
      </TitleBox>
      <BreakLine />
      <ItemBox>저는 아이템 박스에염</ItemBox>
      <PlusButton onClick={() => window.alert('버튼이 눌렸어염')}>
        <img src={Plus} />
      </PlusButton>
      <ReigstButton>
        <RegistText>등록하기</RegistText>
      </ReigstButton>
    </ContentContainer>
  </Container>
);

//폰트다름

const Container = styled.div`
  display: flex;
  width: 58vw;
  height: 88vh;
  margin: 123px auto 0; //100px은 헤더 높이 미리 뺐습니다.
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  height: 60%; //이거 계산불가
  margin: 6.7% auto 0;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4.5%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.B_POINT_30}
  color: ${({ theme }) => theme.colors.WTHIE};
  margin-left: 20px; //이거 계산불가
`;

const BreakLine = styled.div`
  height: 3px;
  margin-top: 3.5%;
  background-color: ${({ theme }) => theme.colors.WTHIE};
`;

const ItemBox = styled.div`
  height: 50%;
  margin-top: 5.9%;
  border-radius: 15px;
  background-color: #1e1e1e; //얜 또 따로놈
`;

const PlusButton = styled.button`
  margin: 3.5% auto;
`;

const ReigstButton = styled.button`
  width: 30%;
  height: 10%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const RegistText = styled.p`
  ${({ theme }) => theme.fonts.SB_POINT_20}
  color: ${({ theme }) => theme.colors.WTHIE};
`;

export default Registration;
