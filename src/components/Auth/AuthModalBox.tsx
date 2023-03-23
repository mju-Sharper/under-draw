import styled from 'styled-components';

interface AuthFormBoxProps {
  children?: React.ReactNode;
  authTitle?: string;
  height?: number;
}

const AuthFormBox = ({ children, height, authTitle }: AuthFormBoxProps) => (
  <FormBoxWrap height={height}>
    <TitleHrBox>
      <AuthTitle>{authTitle}</AuthTitle>
      <hr
        style={{ width: '500px', border: '1px solid #424242', padding: '0' }}
      />
    </TitleHrBox>
    {children}
  </FormBoxWrap>
);

const FormBoxWrap = styled.div<AuthFormBoxProps>`
  margin-top: 75px;
  width: 600px;
  height: ${({ height }) => (height ? `${height}` : '580')}px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const TitleHrBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AuthTitle = styled.p`
  ${({ theme }) => theme.fonts.SB_POINT_30};
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 36px 0 0 50px;
`;
export default AuthFormBox;
