import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { registInfo } from '../../atoms/registAtom';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

interface dateInterface {
  [key: string]: number;
}

const todayObject: dateInterface = { 년: year, 월: month, 일: day };

const DateInput = () => {
  const [content, setContent] = useRecoilState(registInfo);

  useEffect(() => {
    setContent({ ...content, date: { year, month, day } });
  }, []);
  return (
    <ItemBox>
      <ItemName>경매날짜</ItemName>
      <Selector>
        <>
          {Object.keys(todayObject).map((item, index) => (
            <>
              <DateBox>{todayObject[item]}</DateBox>
              <ItemName key={index}>{item}</ItemName>
            </>
          ))}
        </>
      </Selector>
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
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.R_BASIC_10};
  color: #999999;
`;

export default DateInput;
