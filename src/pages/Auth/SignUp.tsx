import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';
import ButtonBase from '../../components/common/Button/ButtonBase';
import InputBase from '../../components/common/InputArea/InputBase';
import { showToastMessage } from '../../components/common/Toast';
import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  ID_REGEXP,
  PHONE_REGEXP,
  API,
} from '../../utils/constant';

const SignUp = () => {
  const naviagte = useNavigate();
  const handleGoSignIn = () => {
    naviagte('/sign-in');
  };

  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: '',
    phone: '',
    email: '',
  });
  const [pwCheck, setPwCheck] = useState('');

  // valid를 true라고 기본 설정 | false(형식에 안 맞을 시)
  const [InfoValid, setInfoValid] = useState({
    idValid: true,
    passwordValid: true,
    phoneValid: true,
    emailValid: true,
  });
  const [pwCheckValid, setPwCheckValid] = useState(true);

  const formValid =
    (InfoValid.emailValid ||
      InfoValid.passwordValid ||
      InfoValid.phoneValid ||
      InfoValid.idValid ||
      pwCheckValid) &&
    userInfo.email !== '' &&
    userInfo.password !== '' &&
    userInfo.phone !== '' &&
    userInfo.userId !== '';

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();

    if (userInfo.password !== pwCheck) {
      setPwCheckValid(false);
    } else if (pwCheck === '') {
      setPwCheckValid(true);
    } else {
      setPwCheckValid(true);
    }

    // false일 시 에러메세지 보이도록 (빈칸으로 제출 시 작성해달라는 토스트 띄우기 위해 true로)
    setInfoValid((prevInfoValid) => ({
      ...prevInfoValid,
      idValid: !userInfo.userId ? true : ID_REGEXP.test(userInfo.userId),
      passwordValid: !userInfo.password
        ? true
        : PASSWORD_REGEXP.test(userInfo.password),
      phoneValid: !userInfo.phone ? true : PHONE_REGEXP.test(userInfo.phone),
      emailValid: !userInfo.email ? true : EMAIL_REGEXP.test(userInfo.email),
    }));

    if (formValid) {
      return axios
        .post(`${API}auth/signup`, {
          ...userInfo,
        })
        .then((res) => {
          if (res.status === 201) {
            showToastMessage('성공적으로 가입되었습니다!');
            naviagte('/sign-in');
          }
        })
        .catch((error) => {
          error && showToastMessage('다시 확인해주세요!');
        });
    } else {
      showToastMessage('정보를 모두 작성해주세요!');
    }
  };

  return (
    <SignUpPageWrap>
      <AuthFormBox authTitle={`SIGN-UP`} height={720}>
        <div style={{ marginTop: '35px' }}>
          <form onSubmit={handleSubmit}>
            <LabelInputBox>
              <label>ID</label>
              <InputBase
                width={391}
                height={50}
                maxLength={20}
                placeholder={`아이디 5자~20자`}
                value={userInfo.userId}
                type={`text`}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userId: e.target.value })
                }
              />
              {/* {idOverlap && (
                <SingInErrMsg>이미 존재하는 아이디입니다!</SingInErrMsg>
              )} */}
            </LabelInputBox>
            <LabelInputBox>
              <label>휴대폰 번호</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`휴대폰 번호를 입력해주세요`}
                value={userInfo.phone}
                type={`text`}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
              />
            </LabelInputBox>
            <LabelInputBox>
              <label>EMAIL</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`이메일을 입력해주세요`}
                value={userInfo.email}
                type={`text`}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              {!InfoValid.emailValid && (
                <SingInErrMsg>이메일 형식이 올바르지 않습니다!</SingInErrMsg>
              )}
            </LabelInputBox>
            <LabelInputBox>
              <label>PASSWORD</label>
              <InputBase
                width={391}
                height={50}
                maxLength={20}
                placeholder={`비밀번호 8자~20자(영문, 숫자, 특수문자 포함)`}
                value={userInfo.password}
                type={`password`}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
              {!InfoValid.passwordValid && (
                <SingInErrMsg>비밀번호 형식이 올바르지 않습니다!</SingInErrMsg>
              )}
            </LabelInputBox>
            <LabelInputBox>
              <label>PW-CHECK</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`비밀번호를 한 번 더 입력해주세요`}
                value={pwCheck}
                type={`password`}
                onChange={(e) => setPwCheck(e.target.value)}
              />
              {!pwCheckValid && (
                <SingInErrMsg>비밀번호를 다시 한 번 확인해주세요!</SingInErrMsg>
              )}
            </LabelInputBox>
            <div style={{ marginTop: '75px', position: 'relative' }}>
              <ButtonBase
                type={'submit'}
                width={200}
                height={50}
                buttonText="SIGN-UP"
              />
              <ToLoginText onClick={handleGoSignIn}>
                이미 가입하셨나요? 로그인하러가기
              </ToLoginText>
            </div>
          </form>
        </div>
      </AuthFormBox>
    </SignUpPageWrap>
  );
};

const SignUpPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const LabelInputBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;

  label {
    color: ${({ theme }) => theme.colors.WHITE};
    ${({ theme }) => theme.fonts.R_BASIC_18};
  }
`;

const SingInErrMsg = styled.p`
  position: absolute;
  top: 48px;
  margin: 8px 0 0 0;
  padding-left: 124px;
  color: ${({ theme }) => theme.colors.PINK};
  ${({ theme }) => theme.fonts.SB_POINT_14};
`;

const ToLoginText = styled.p`
  position: absolute;
  top: -30px;
  left: 140px;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_14};
  cursor: pointer;
`;

export default SignUp;
