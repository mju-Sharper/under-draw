import styled from 'styled-components';

const DATE_ARRAY = ['년', '월', '일'];

const DateInput = () => (
  <ItemBox>
    <ItemName>경매날짜</ItemName>
    <Selector>
      <>
        {DATE_ARRAY.map((item, index) => (
          <>
            <InputBox type="number" key={index} />
            <ItemName key={index}>{item}</ItemName>
            {/* 년은 4자리, 월,일은 2자리로 입력자리수 제한해야됨 */}
          </>
        ))}
      </>
    </Selector>
  </ItemBox>
);

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

const InputBox = styled.input`
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
