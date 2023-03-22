import { useState } from 'react';

import styled from 'styled-components';

import DropDown from '../../assets/DropDown.svg';
import DropUp from '../../assets/DropUp.svg';

const DataInputBox = ({ title, show }: { title: string; show?: boolean }) => {
  const [isShowContent, setIsShowContent] = useState(false);

  return (
    <ItemBox>
      <ItemName>{title}</ItemName>
      <Selector>
        {title}을 입력해주세요.
        {show && (
          <DropDownButton onClick={() => setIsShowContent(!isShowContent)}>
            {isShowContent ? <img src={DropDown} /> : <img src={DropUp} />}
          </DropDownButton>
        )}
      </Selector>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 20px;
  margin-bottom: 16px;
`;

const ItemName = styled.p`
  ${({ theme }) => theme.fonts.R_BASIC_10}
  color: ${({ theme }) => theme.colors.WHITE};
`;

const Selector = styled.div`
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

const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
`;

export default DataInputBox;
