import { useState } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import DropDown from '../../assets/DropDown.svg';
import DropUp from '../../assets/DropUp.svg';
import { registInfo } from '../../atoms/registAtom';

import { TEMP_DATA } from './MENU';

interface DropDownBoxProps {
  title: string;
}

const DropDownBox = ({ title }: DropDownBoxProps) => {
  const [isShowContent, setIsShowContent] = useState(false);
  const [content, setContent] = useRecoilState(registInfo);

  return (
    <ItemBox>
      <ItemName>{title}</ItemName>
      <SelectBox>
        <Selector>
          {content.itemCategory}
          <DropDownButton
            type="button"
            onClick={() => setIsShowContent(!isShowContent)}
          >
            {isShowContent ? <img src={DropUp} /> : <img src={DropDown} />}
          </DropDownButton>
        </Selector>
        {isShowContent && (
          <SelectMenuBox>
            {TEMP_DATA.map((item, index) => (
              <SelectMenu
                key={index}
                onClick={() => {
                  setContent({ ...content, itemCategory: item });
                  setIsShowContent(false);
                }}
              >
                {item}
              </SelectMenu>
            ))}
          </SelectMenuBox>
        )}
      </SelectBox>
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
