import styled from 'styled-components';

interface CheckboxProps {
  children: string;
}

const CheckBox = ({ children }: CheckboxProps) => (
  <CheckBoxLabel>
    <CheckInput type="checkbox" />
    {children}
  </CheckBoxLabel>
);

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_16};
  cursor: pointer;
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export default CheckBox;
