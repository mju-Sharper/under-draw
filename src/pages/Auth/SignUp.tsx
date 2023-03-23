import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';

const SignUp = () => (
  <SignUpPageWrap>
    <AuthFormBox authTitle={`SIGN-UP`} height={700}>
      회원가입 페이지
    </AuthFormBox>
  </SignUpPageWrap>
);

const SignUpPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default SignUp;
