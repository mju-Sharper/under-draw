import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { registInfo } from '../../atoms/registAtom';

interface MenuInputProps {
  title: string;
  keyName: string;
}

const MenuInput = ({ title, keyName }: MenuInputProps) => {
  const [content, setContent] = useRecoilState(registInfo);
  const inputType = keyName === 'third' ? 'number' : 'text';
  return (
    <ItemBox>
      <ItemName>{title}</ItemName>
      <InputBox
        type={inputType}
        placeholder={`${title}을 입력해주세요`}
        onChange={(e) => setContent({ ...content, [keyName]: e.target.value })}
      />
    </ItemBox>
  );
};
const ItemBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  margin-bottom: 16px;
  margin-right: 17px;
`;

const ItemName = styled.p`
  align-self: center;
  ${({ theme }) => theme.fonts.R_BASIC_10}
  color: ${({ theme }) => theme.colors.WHITE};
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 20px;
  border-radius: 10px;
  margin-left: 8px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.R_BASIC_10};
  color: #999999;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default MenuInput;
