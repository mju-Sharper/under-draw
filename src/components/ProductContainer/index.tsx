import styled from 'styled-components';

import { testArray } from '../../utils/mock';

import ItemBox from './ItemBox';

// TODO 경매 물품 여러개일때 경우, 여기서 작업해서 넘겨주기
// TODO 무한스크롤 ..?
const ProductContainer = () => (
  <ProductBoxWrap>
    {testArray.map((idx) => (
      <ItemBox key={idx} />
    ))}
  </ProductBoxWrap>
);

const ProductBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductContainer;
