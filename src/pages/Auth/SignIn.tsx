import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';
import ButtonBase from '../../components/common/Button/ButtonBase';
import CheckBox from '../../components/common/CheckBox';
import InputBase from '../../components/common/InputArea/InputBase';

// TODO SignInErrMsg 는 잘못된 형식을 submit했을시에만 보이도록 하기

const SignIn = () => {
  const navigate = useNavigate();
  const handleGoSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <SignInPageWrap>
      <AuthFormBox authTitle={`LOGIN`}>
        <div style={{ marginTop: '40px' }}>
          <form>
            <LabelInputBox>
              <label>ID</label>
              <InputBase
                width={500}
                height={55}
                placeholder={`아이디를 입력해주세요`}
                type={`text`}
              />
              <SingInErrMsg>존재하지 않는 아이디입니다!</SingInErrMsg>
            </LabelInputBox>
            <LabelInputBox>
              <label>PASSWORD</label>
              <InputBase
                width={500}
                height={55}
                placeholder={`비밀번호 8자~20자(영문, 숫자, 특수문자 포함)`}
                type={`password`}
              />
              <SingInErrMsg>비밀번호가 올바르지 않습니다!</SingInErrMsg>
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
