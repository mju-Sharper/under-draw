import { useState } from 'react';

import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';
import ButtonBase from '../../components/common/Button/ButtonBase';
import CheckBox from '../../components/common/CheckBox';
import InputBase from '../../components/common/InputArea/InputBase';
import { API } from '../../utils/constant';

const SignIn = () => {
  const navigate = useNavigate();
  const handleGoSignUp = () => {
    navigate('/sign-up');
  };

  // valid를 false라고 기본 설정 | true(아이디, 패스워드 입력 안 했을 시/axios 에러일 시)
  const [formValid, setFormValid] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['userToken']);

  const handleChangeId = (id: string) => {
    setUserId(id);
  };

  const handleChangePw = (pw: string) => {
    setPassword(pw);
  };

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();

    if (userId && password) {
      return axios
        .post(`${API}auth/signin`, { userId, password })
        .then((res) => {
          if (res.status === 201) {
            const accessToken = res.data.data.accessToken;
            setCookie('userToken', accessToken);
            navigate('/');
          }
        })
        .catch((error) => error && setFormValid(true));
    } else if (!userId || !password) {
      setFormValid(true);
    }
  };

  return (
    <SignInPageWrap>
      <AuthFormBox authTitle={`LOGIN`}>
        <div style={{ marginTop: '40px' }}>
          <form onSubmit={handleSubmit}>
            <LabelInputBox>
              <label>ID</label>
              <InputBase
                width={500}
                height={55}
                maxLength={20}
                value={userId}
                placeholder={`아이디를 입력해주세요`}
                onChange={(e) => handleChangeId(e.target.value)}
                type={`text`}
              />
              {formValid && (
                <SingInErrMsg>존재하지 않는 아이디입니다!</SingInErrMsg>
              )}
            </LabelInputBox>
            <LabelInputBox>
              <label>PASSWORD</label>
              <InputBase
                width={500}
                height={55}
                maxLength={20}
                value={password}
                placeholder={`비밀번호 6자~20자(영문, 숫자, 특수문자 포함)`}
                onChange={(e) => handleChangePw(e.target.value)}
                type={`password`}
              />
              {formValid && (
                <SingInErrMsg>비밀번호가 올바르지 않습니다!</SingInErrMsg>
              )}
            </LabelInputBox>
            <CheckBox>로그인 유지</CheckBox>
            <div style={{ marginTop: '62px', position: 'relative' }}>
              <ButtonBase
                type={`submit`}
                width={200}
                height={50}
                buttonText="LOGIN"
              />
              <ToSignUpText onClick={handleGoSignUp}>
                회원이 아니신가요?
              </ToSignUpText>
            </div>
          </form>
        </div>
      </AuthFormBox>
    </SignInPageWrap>
  );
};
const SignInPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const LabelInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 45px;

  label {
    color: ${({ theme }) => theme.colors.WHITE};
    ${({ theme }) => theme.fonts.R_BASIC_22};
  }
`;

const SingInErrMsg = styled.p`
  position: absolute;
  top: 82px;
  margin: 8px 0 0 0;
  padding-left: 17px;
  color: ${({ theme }) => theme.colors.PINK};
  ${({ theme }) => theme.fonts.SB_POINT_14};

  /* visibility: hidden; */
`;

const ToSignUpText = styled.p`
  position: absolute;
  top: -30px;
  left: 189px;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_14};
  cursor: pointer;
`;

export default SignIn;
