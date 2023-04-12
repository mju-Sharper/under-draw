import { useRef, useState } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import BaseImg from '../../assets/BaseImg.png';
import Plus from '../../assets/PlusButton.svg';
import { registInfo } from '../../atoms/registAtom';
import { BasicButton } from '../../components/common/BasicButton';

import DateInput from './DateInput';
import DropDownBox from './DropDownBox';
import MenuInput from './MenuInput';

import type { registInterface } from '../../atoms/registAtom';

const Registration = () => {
  const [registItemInfo, setReigstItemInfo] = useRecoilState(registInfo);
  const [imgFile, setImgFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState(`${BaseImg}`);
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        const result = e?.target?.result as string;
        setImgFile(file);
        setImgSrc(result);
        setReigstItemInfo({ ...registItemInfo, imageUrl: result });
      };
    }
  };

  //이거 나중에 함수 분리하기

  const imageUpload = (fileData: File | undefined) => {
    if (fileData) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}products/image `,
          {
            image: fileData,
          },
          {
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((res) => {
          setReigstItemInfo({
            ...registItemInfo,
            imageUrl: res.data.data.imageUrl,
          });
          registInfoUpload(registItemInfo);
        })
        .catch((err) => console.log(err));
    } else {
      console.log('실행이 안되었습니다');
    }
  };

  const registInfoUpload = (registItemInfo: registInterface) => {
    if (registItemInfo) {
      axios
        .post(`${process.env.REACT_APP_API_URL}products `, registItemInfo, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log('실행이 안되었습니다');
    }
  };

  return (
    <Container>
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          imageUpload(imgFile);
        }}
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
              <MenuInput title="품명" keyName="name" />
              <MenuInput title="시작가" keyName="startingBid" />
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
            <ImgPreView src={imgSrc} />
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
  border-radius: 15px;
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
