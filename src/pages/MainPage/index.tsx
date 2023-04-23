import { useEffect, useState } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoryAtom } from '../../atoms/categoryAtom';
import { manageBtnAtom, manageListLength } from '../../atoms/manageAtom';
import { pageNum } from '../../atoms/pageNumAtom';
import { searchItemAtom } from '../../atoms/searchItemAtom';
import CategoryListBox from '../../components/Category';
import PageNation from '../../components/Main/PageNation';
import ProductContainer from '../../components/Main/ProductContainer';
import { instanceAPI } from '../../utils/constant';

const MainPage = () => {
  const isClickManageBtn = useRecoilValue(manageBtnAtom);
  //const userProducts = useRecoilValue(manageListAtom);
  //관리창 넘어올 때 관리자에 해당되는 아이템들만 그려와야되니까 해당 로직 변경했습니다!
  const userProductsLength = useRecoilValue(manageListLength);
  const currentCategory = useRecoilValue(categoryAtom);
  const currentPageNum = useRecoilValue(pageNum);
  const currentSearchItem = useRecoilValue(searchItemAtom);

  const resetCategory = useResetRecoilState(categoryAtom);

  const [totalPageLength, setTotalPageLength] = useState(0);
  const [products, setProducts] = useState([]);
  // const productList = isClickManageBtn ? userProducts : products;
  const requestRouter = isClickManageBtn
    ? 'products/user-products'
    : `products`;
  //관리자일때랑 일반 유저일때랑 받아와야하는 아이템리스트가 다르므로 라우터 분리.

  const getProduct = (
    currentCategory: string,
    currentPageNum: number,
    currentSearchItem: string,
  ) => {
    instanceAPI
      .get(
        `${requestRouter}`,
        currentSearchItem
          ? {
              params: { page: 1, search: currentSearchItem },
            }
          : currentCategory
          ? {
              params: { category: currentCategory, page: currentPageNum },
            }
          : {
              params: { page: currentPageNum },
            },
      )
      .then((res) => {
        setTotalPageLength(res.data.meta.itemCount);
        setProducts(res.data.data);
        if (currentSearchItem) {
          resetCategory();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct(currentCategory, currentPageNum, currentSearchItem);
  }, [currentCategory, currentPageNum, currentSearchItem]);

  return (
    <MainPageWrap>
      <CategoryAside>
        <CategoryListBox />
      </CategoryAside>
      <MainContentBox>
        <ProductContainer products={products} isClicked={isClickManageBtn} />
        <PageNation
          productsLength={
            isClickManageBtn ? userProductsLength : totalPageLength
          }
        />
      </MainContentBox>
    </MainPageWrap>
  );
};
const MainPageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

// 메인페이지 주요 컨텐츠 박스 => default/검색결과/방 관리
const MainContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`;

const CategoryAside = styled.aside`
  position: fixed;
  margin: 0 36px 0 44px;
`;

export default MainPage;
