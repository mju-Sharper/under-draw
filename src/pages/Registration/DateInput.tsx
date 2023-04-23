import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { registInfo } from '../../atoms/registAtom';

const DateInput = () => {
  const [content, setContent] = useRecoilState(registInfo);
  const date = content.auctionTime?.substring(0, 10);

  return (
    <ItemBox>
      <ItemName>경매날짜</ItemName>
      <Selector>
        <DateBox
          type="date"
          value={date}
          onChange={
            (e) => setContent({ ...content, auctionTime: e.target.value })
            // 이것도 선택한 날짜가 오늘보다 이전이면 선택 안되게 바꿔야됨
          }
        />
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

const DateBox = styled.input`
  width: 220px;
  height: 20px;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.R_BASIC_10};
  color: #999999;
`;

export default DateInput;
