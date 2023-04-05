import styled from 'styled-components';

import CategoryListBox from '../../components/Category';
import PageNation from '../../components/Main/PageNation';
import ProductContainer from '../../components/Main/ProductContainer';
// 임시 목록 파일
import { categoryTest } from '../../utils/mock';

// TODO ProductContainer/SearchContainer/MyRoomContainer 상황에 맞게 렌더링되도록 구현해보기
// 넘어가는 products의 값이 다르도록?
const MainPage = () => (
  <MainPageWrap>
    <CategoryAside>
      <CategoryListBox />
    </CategoryAside>
    <MainContentBox>
      <ProductContainer products={categoryTest} />
      <PageNation products={categoryTest} />
    </MainContentBox>
  </MainPageWrap>
);

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
