import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { registInfo } from '../../atoms/registAtom';

const DateInput = () => {
  const [content, setContent] = useRecoilState(registInfo);
  const date = content.auctionTime?.substring(0, 10);
  const today = new Date();

  return (
    <ItemBox>
      <ItemName>경매날짜</ItemName>
      <Selector>
        <DateBox
          type="date"
          value={date}
          onChange={(e) => {
            const selectedDate = e.target.value;
            const selectedValueToDayObject = new Date(selectedDate);
            if (selectedValueToDayObject < today) {
              //여기도 토스트메시지로 오늘보다 이전의 날짜는 선택할 수 없다고 알려주기
              //근데 달력으로 선택하면 디폴트가 9시라서, 현재 시간을 알 수 없는관계로 당일을 고르면 로직을 어떻게 처리할지 논의가 필요함
              return;
            }
            setContent({
              ...content,
              auctionTime: selectedDate.substring(0, 10),
            });
          }}
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
