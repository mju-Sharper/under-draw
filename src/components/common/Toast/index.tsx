import { ToastContainer, Slide, toast } from 'react-toastify';
import styled from 'styled-components';

export const showToastNoToken = () => {
  toast('로그인 후 이용해주세요!');
};

export const showToastSignIn = () => {
  toast('로그인 되었습니다!');
};

export const showToastErr = () => {
  toast('다시 확인해주세요!');
};

export const showToastSignUp = () => {
  toast('성공적으로 가입되었습니다!');
};

export const showToastSignUpNoContent = () => {
  toast('정보를 모두 작성해주세요!');
};

export const Toast = () => (
  <ToastWrap
    limit={1}
    position="bottom-center"
    enableMultiContainer={true}
    closeButton={false}
    hideProgressBar
    transition={Slide}
    autoClose={2000}
  />
);

const ToastWrap = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.fonts.B_POINT_22}

  .Toastify__toast {
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    opacity: 0.9;
    color: black;
    ${({ theme }) => theme.fonts.B_POINT_20}
  }
`;
