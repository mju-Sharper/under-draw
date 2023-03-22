import styled from 'styled-components';

import CategoryListBox from '../../components/Category';
import ProductContainer from '../../components/ProductContainer';

// TODO ProductContainer/SearchContainer/MyRoomContainer 상황에 맞게 렌더링되도록 구현해보기
// 우선 ProductContainer만 만들어둠
const MainPage = () => (
  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
    <aside style={{ position: 'fixed', margin: '64px 36px 0 44px' }}>
      <CategoryListBox />
    </aside>
    <MainContentBox>
      <ProductContainer />
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
