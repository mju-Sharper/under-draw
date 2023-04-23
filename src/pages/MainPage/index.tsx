import { useEffect, useState } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoryAtom } from '../../atoms/categoryAtom';
import {
  manageBtnAtom,
  manageListAtom,
  manageListLength,
} from '../../atoms/manageAtom';
import { pageNum } from '../../atoms/pageNumAtom';
import { searchItemAtom } from '../../atoms/searchItemAtom';
import CategoryListBox from '../../components/Category';
import PageNation from '../../components/Main/PageNation';
import ProductContainer from '../../components/Main/ProductContainer';
import { instanceAPI } from '../../utils/constant';

const MainPage = () => {
  const isClickManageBtn = useRecoilValue(manageBtnAtom);
  const userProducts = useRecoilValue(manageListAtom);
  const userProductsLength = useRecoilValue(manageListLength);
  const currentCategory = useRecoilValue(categoryAtom);
  const currentPageNum = useRecoilValue(pageNum);
  const currentSearchItem = useRecoilValue(searchItemAtom);

  const resetCategory = useResetRecoilState(categoryAtom);

  const [totalPageLength, setTotalPageLength] = useState(0);
  const [products, setProducts] = useState([]);
  const productList = isClickManageBtn ? userProducts : products;

  const getProduct = (
    currentCategory: string,
    currentPageNum: number,
    currentSearchItem: string,
  ) => {
    instanceAPI
      .get(
        `products`,
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
        <ProductContainer products={productList} isClicked={isClickManageBtn} />
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
