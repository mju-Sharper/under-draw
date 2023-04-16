import { useRecoilState, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoryAtom } from '../../atoms/categoryAtom';
import { categoryItemList } from '../../utils/mock';

// TODO atom selector 활용해봐도 괜찮을듯,, => 필요없어서 없앱니다!
// const getCategroyfromFilter = (filter: string) => {
//   switch (filter) {
//     case '전자제품':
//       return 'electronic';
//     case '아웃도어·스포츠·골프':
//       return 'outdoor';
//     case '가구':
//       return 'furniture';
//     case '귀금속':
//       return 'jewellery';
//     case '자동차':
//       return 'car';
//     case '패션·잡화·뷰티':
//       return 'fashion';
//     case '사무':
//       return 'office';
//     case '주류':
//       return 'drink';
//     case '집':
//       return 'house';
//     case '기타':
//       return 'other';
//     default:
//       return 'default';
//   }
// };

const CategoryListBox = () => {
  const [filter, setFilter] = useRecoilState(categoryAtom);
  const resetFilter = useResetRecoilState(categoryAtom);

  return (
    <CategoryWrap>
      <CategoryTitle>전체 카테고리</CategoryTitle>
      <CategoryListHr />

      {categoryItemList.map((item) => (
        <ListNameWrap
          key={item.name}
          onClick={() => {
            if (item.name === '기타') {
              resetFilter();
              return;
            }
            setFilter(item.name);
          }}
        >
          <span>
            <img src={`${item.icon}`} />
          </span>
          {filter === `${item.name}` ? (
            <p style={{ color: '#6462B9' }}>{item.name}</p>
          ) : (
            <p>{item.name}</p>
          )}
        </ListNameWrap>
      ))}
    </CategoryWrap>
  );
};

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

const CategoryListHr = styled.hr`
  width: 240px;
  border: 1px solid #424242;
  padding: 0;
`;

const ListNameWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 0;
  padding-left: 15px;
  text-align: center;
  ${({ theme }) => theme.fonts.SB_POINT_18}
  cursor: pointer;

  span {
    width: 31px;
    padding: 4px 0;
  }

  p {
    color: ${({ theme }) => theme.colors.WHITE};
    margin: 0;
    padding: 0 15px;
  }
`;

export default CategoryListBox;
