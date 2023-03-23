import styled from 'styled-components';

import AuthFormBox from '../../components/Auth/AuthModalBox';

const SignIn = () => (
  <SignInPageWrap>
    <AuthFormBox authTitle={`LOGIN`}>로그인 페이지</AuthFormBox>
  </SignInPageWrap>
);

const SignInPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default SignIn;
