import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { categoryAtom } from '../../atoms/categoryAtom';
import { manageBtnAtom, manageListAtom } from '../../atoms/manageAtom';
import CategoryListBox from '../../components/Category';
import PageNation from '../../components/Main/PageNation';
import ProductContainer from '../../components/Main/ProductContainer';
import { instanceAPI } from '../../utils/constant';

// TODO ProductContainer/SearchContainer/MyRoomContainer 상황에 맞게 렌더링되도록 구현해보기
// 넘어가는 products의 값이 다르도록?
const MainPage = () => {
  const isClickManageBtn = useRecoilValue(manageBtnAtom);
  const userProducts = useRecoilValue(manageListAtom);
  const currentCategory = useRecoilValue(categoryAtom);
  const [products, setProducts] = useState([]);
  const productList = isClickManageBtn ? userProducts : products;

  const getProduct = (currentCategory: string) => {
    instanceAPI
      .get(
        `products`,
        currentCategory
          ? {
              params: { category: currentCategory },
            }
          : undefined,
      )
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct(currentCategory);
  }, [currentCategory]);

  return (
    <MainPageWrap>
      <CategoryAside>
        <CategoryListBox />
      </CategoryAside>
      <MainContentBox>
        <ProductContainer products={productList} isClicked={isClickManageBtn} />
        <PageNation products={productList} />
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
