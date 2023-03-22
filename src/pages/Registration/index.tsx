import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import Plus from '../../assets/PlusButton.svg';
import { BasicButton } from '../../components/common/BasicButton';

import DateInput from './DateInput';
import DropDownBox from './DropDownBox';
import MenuInput from './MenuInput';

const Registration = () => (
  <Container>
    <ContentContainer>
      <TitleBox>
        <img src={Arrow} />
        <Title>제목</Title>
      </TitleBox>
      <BreakLine />
      <ItemBox>
        <SelectBox>
          <InputBox>
            <DropDownBox title="품목" />
            <MenuInput title="품명" keyName="two" />
            <MenuInput title="시작가" keyName="third" />
            <DateInput />
          </InputBox>
          <ImgUploadButton onClick={() => window.alert('버튼이 눌렸어염')}>
            <ImgUploadText>이미지 업로드</ImgUploadText>
          </ImgUploadButton>
        </SelectBox>
        <ImgBox />
      </ItemBox>
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
//일단 피그마 기준대로 작업

const Container = styled.div`
  display: flex;
  /* width: 58vw;
  height: 88vh; */
  width: 840px;
  height: 900px;
  margin: 23px auto 0; //100px은 헤더 높이 미리 뺐습니다.
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  height: 60%; //이거 계산불가
  /* margin: 6.7% auto 0; */
  margin: 61px auto 0;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4.5%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.B_POINT_30}
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: 20px; //이거 계산불가
`;

const BreakLine = styled.div`
  height: 3px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const ItemBox = styled.div`
  display: flex;
  /* height: 50%; */
  height: 265px;
  /* margin-top: 5.9%; */
  margin-top: 53px;
  border-radius: 15px;
  background-color: #1e1e1e; //얜 또 따로놈
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 134px;
  margin: 29px 104px 48px 30px;
  // background-color: orange;
`;

const ImgBox = styled.div`
  width: 230px;
  height: 163px;
  border-radius: 15px;
  margin: 51px 51px 51px 0;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const PlusButton = styled.button`
  margin: 32px auto;
`;

const ImgUploadButton = styled(BasicButton)`
  margin-left: 30px;
  margin-bottom: 24px;
`;

const ReigstButton = styled(BasicButton)`
  /* width: 30%;
  height: 10%; */
  width: 200px;
  height: 50px;
  margin: auto;
`;

const ImgUploadText = styled.p`
  ${({ theme }) => theme.fonts.SB_POINT_10}
  color: ${({ theme }) => theme.colors.WHITE};
`;

const RegistText = styled.p`
  ${({ theme }) => theme.fonts.SB_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
`;

export default Registration;
