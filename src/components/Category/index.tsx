import styled from 'styled-components';

import { categoryItemList } from '../../utils/mock';

const CategoryListBox = () => (
  <CategoryWrap>
    <CategoryTitle>전체 카테고리</CategoryTitle>
    <hr style={{ width: '240px', border: '1px solid #424242', padding: '0' }} />

    {categoryItemList.map((item) => (
      <ListNameWrap key={item.name}>
        <span>
          <img src={`${item.icon}`} />
        </span>
        <p>{item.name}</p>
      </ListNameWrap>
    ))}
  </CategoryWrap>
);

const CategoryWrap = styled.div`
  width: 260px;
  height: 500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const CategoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.R_BASIC_20}
  margin: 0;
  padding: 12px 8px 0;
`;

const ListNameWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 0;
  padding-left: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.SB_POINT_18}
  cursor: pointer;

  span {
    width: 31px;
    padding: 4px 0;
  }

  p {
    margin: 0;
    padding: 0 15px;
  }
`;

export default CategoryListBox;
