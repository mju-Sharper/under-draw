import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';
import ButtonBase from '../../components/common/Button/ButtonBase';
import InputBase from '../../components/common/InputArea/InputBase';

// TODO SignInErrMsg 는 잘못된 형식을 submit했을시에만 보이도록 하기

const SignUp = () => {
  const naviagte = useNavigate();
  const handleGoSignIn = () => {
    naviagte('/sign-in');
  };

  return (
    <SignUpPageWrap>
      <AuthFormBox authTitle={`SIGN-UP`} height={720}>
        <div style={{ marginTop: '35px' }}>
          <form>
            <LabelInputBox>
              <label>ID</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`아이디 5자~20자`}
                type={`text`}
              />
              <SingInErrMsg>이미 존재하는 아이디입니다!</SingInErrMsg>
            </LabelInputBox>
            <LabelInputBox>
              <label>휴대폰 번호</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`휴대폰 번호를 입력해주세요`}
                type={`text`}
              />
            </LabelInputBox>
            <LabelInputBox>
              <label>EMAIL</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`이메일을 입력해주세요`}
                type={`text`}
              />
              <SingInErrMsg>이메일 형식이 올바르지 않습니다!</SingInErrMsg>
            </LabelInputBox>
            <LabelInputBox>
              <label>PASSWORD</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`비밀번호 8자~20자(영문, 숫자, 특수문자 포함)`}
                type={`password`}
              />
              <SingInErrMsg>비밀번호 형식이 올바르지 않습니다!</SingInErrMsg>
            </LabelInputBox>
            <LabelInputBox>
              <label>PW-CHECK</label>
              <InputBase
                width={391}
                height={50}
                placeholder={`비밀번호를 한 번 더 입력해주세요`}
                type={`password`}
              />
              <SingInErrMsg>비밀번호를 다시 한 번 확인해주세요!</SingInErrMsg>
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

  /* visibility: hidden; */
`;

const ToLoginText = styled.p`
  position: absolute;
  top: -45px;
  left: 140px;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_14};
  cursor: pointer;
`;

export default SignUp;
