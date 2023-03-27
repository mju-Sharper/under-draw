import { useRef, useState } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import Plus from '../../assets/PlusButton.svg';
import { registInfo } from '../../atoms/registAtom';
import { BasicButton } from '../../components/common/BasicButton';

import DateInput from './DateInput';
import DropDownBox from './DropDownBox';
import MenuInput from './MenuInput';

const Registration = () => {
  const [registItemInfo, setReigstItemInfo] = useRecoilState(registInfo);
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        const result = e?.target?.result as string;
        setImgFile(result);
        setReigstItemInfo({ ...registItemInfo, imgSrc: result });
      };
    }
  };
  return (
    <Container>
      <ContentContainer
        onSubmit={() => window.alert(JSON.stringify(registItemInfo))}
      >
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
            <ImgUpload>
              이미지업로드
              <ImgInput
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={saveImgFile}
                ref={imgRef}
              />
            </ImgUpload>
          </SelectBox>
          <ImgBox>
            <ImgPreView src={imgFile} />
            {/* 여기 이미지 없으면 뭐 들어갈지 고민 필요 */}
          </ImgBox>
        </ItemBox>
        <PlusButton
          type="button"
          onClick={() => window.alert('버튼이 눌렸어염')}
        >
          <img src={Plus} />
        </PlusButton>
        <ReigstButton type="submit">
          <RegistText>등록하기</RegistText>
        </ReigstButton>
      </ContentContainer>
    </Container>
  );
};

const ImgInput = styled.input`
  display: none;
`;

const Container = styled.div`
  display: flex;
  width: 840px;
  height: 900px;
  margin: 23px auto 0;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const ContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 83%;
  height: 60%;
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
  margin-left: 20px;
`;

const BreakLine = styled.div`
  height: 3px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const ItemBox = styled.div`
  display: flex;
  height: 265px;
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
`;

const ImgBox = styled.div`
  width: 230px;
  height: 163px;
  border-radius: 15px;
  margin: 51px 51px 51px 0;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const PlusButton = styled.button`
  margin: 32px auto 27px;
`;

const ImgPreView = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  margin-left: 30px;
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.fonts.SB_POINT_10}
  color: ${({ theme }) => theme.colors.WHITE};
`;

const ReigstButton = styled(BasicButton)`
  width: 200px;
  height: 50px;
  margin: auto;
`;

const RegistText = styled.p`
  ${({ theme }) => theme.fonts.SB_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
`;

export default Registration;
