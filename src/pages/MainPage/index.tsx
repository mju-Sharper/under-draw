import styled from 'styled-components';

import CategoryListBox from '../../components/Category';
import ProductContainer from '../../components/ProductContainer';
// 임시 목록 파일
import { categoryTest } from '../../utils/mock';
// import { categoryClickTest } from '../../utils/mock';

// TODO ProductContainer/SearchContainer/MyRoomContainer 상황에 맞게 렌더링되도록 구현해보기
// 넘어가는 products의 값이 다르도록?
const MainPage = () => (
  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
    <aside style={{ position: 'fixed', margin: '64px 36px 0 44px' }}>
      <CategoryListBox />
    </aside>
    <MainContentBox>
      <ProductContainer products={categoryTest} />
    </MainContentBox>
  </div>
);

// 메인페이지 주요 컨텐츠 박스 => default/검색결과/방 관리
const MainContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export default MainPage;
