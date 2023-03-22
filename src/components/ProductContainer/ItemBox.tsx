import styled from 'styled-components';

import PhotoBox from '../common/PhotoBox';

import ProductInfo from './ProductInfo';

// TODO API 연결 후 photo에 src 넣기
// TODO API 연결 후 상품정보 넘기기
const ItemBox = () => (
  <ItemBoxWrap>
    <PhotoBox />
    <div style={{ marginLeft: '22px' }}>
      <ProductInfo />
    </div>
  </ItemBoxWrap>
);

const ItemBoxWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 21px;
  width: 760px;
  height: 224px;
  border-radius: 10px;
  margin-bottom: 55px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

export default ItemBox;
