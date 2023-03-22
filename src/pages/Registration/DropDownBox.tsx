import { useState } from 'react';

import styled from 'styled-components';

import DropDown from '../../assets/DropDown.svg';
import DropUp from '../../assets/DropUp.svg';

import { TEMP_DATA } from './MENU';

const DropDownBox = ({ title }: { title: string }) => {
  const [isShowContent, setIsShowContent] = useState(false);

  return (
    <>
      <ItemBox>
        <ItemName>{title}</ItemName>
        <SelectBox>
          <Selector>
            {title}을 입력해주세요.
            <DropDownButton onClick={() => setIsShowContent(!isShowContent)}>
              {isShowContent ? <img src={DropDown} /> : <img src={DropUp} />}
            </DropDownButton>
          </Selector>
          {isShowContent && (
            <SelectMenuBox>
              {TEMP_DATA.map((item, index) => (
                <SelectMenu key={index} onClick={() => window.alert(item)}>
                  {item}
                </SelectMenu>
              ))}
            </SelectMenuBox>
          )}
        </SelectBox>
      </ItemBox>
    </>
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

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 134px;
  // background-color: red;
`;

const SelectMenuBox = styled.div`
  width: 220px;
  height: 100%;
  margin-top: 5px;
  border-radius: 10px;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.WHITE};
  overflow-y: scroll;
  z-index: 5;
`;

const SelectMenu = styled.span`
  ${({ theme }) => theme.fonts.R_BASIC_10}
  // background-color:blue;
  display: flex;
  padding: 6px;
  box-sizing: border-box;
  justify-content: flex-start;
`;

const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
`;

export default DropDownBox;
