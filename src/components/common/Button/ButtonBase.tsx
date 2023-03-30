import styled from 'styled-components';

interface ButtonBaseProps {
  width?: number;
  height?: number;
  buttonText?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonBase = ({ width, height, buttonText, type }: ButtonBaseProps) => (
  <ButtonBaseBox type={type} width={width} height={height}>
    {buttonText}
  </ButtonBaseBox>
);

const ButtonBaseBox = styled.button<ButtonBaseProps>`
  width: ${({ width }) => (width ? `${width}` : `200`)}px;
  height: ${({ height }) => (height ? `${height}` : `30`)}px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_20};
`;

export default ButtonBase;
