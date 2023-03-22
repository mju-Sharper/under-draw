import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { registInfo } from '../../atoms/registAtom';
const MenuInput = ({ title, keyName }: { title: string; keyName: string }) => {
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
  //align-items: center;
  justify-content: flex-end;
  //  background-color: pink;
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
`;

export default MenuInput;
