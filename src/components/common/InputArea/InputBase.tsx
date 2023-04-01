import styled from 'styled-components';

interface InputBaseProps {
  width?: number;
  height?: number;
  placeholder?: string;
  value?: string;
  type?: string;
}

const InputBase = ({
  width,
  height,
  placeholder,
  value,
  type,
}: InputBaseProps) => (
  <InputBaseBox
    value={value}
    width={width}
    height={height}
    placeholder={placeholder}
    type={type}
  />
);

const InputBaseBox = styled.input<InputBaseProps>`
  width: ${({ width }) => (width ? `${width}` : `300`)}px;
  height: ${({ height }) => (height ? `${height}` : `30`)}px;
  padding: 17px 0 17px 20px;
  border-radius: 10px;
  border: none;
  outline-color: ${({ theme }) => theme.colors.PURPLE};
  ${({ theme }) => theme.fonts.SB_POINT_16};

  ::placeholder {
    color: #999;
  }
`;

export default InputBase;
