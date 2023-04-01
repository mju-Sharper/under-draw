import styled from 'styled-components';

import ItemBox from './ItemBox';

interface Props {
  products?: productCategoryProps[];
}

// TODO 경매 물품 여러개일때 경우, 여기서 작업해서 넘겨주기
// TODO 무한스크롤 ..?
const ProductContainer = ({ products }: Props) => (
  <ProductBoxWrap>
    {products?.map((item) => (
      <ItemBox key={item.productName} items={item} />
    ))}
  </ProductBoxWrap>
);

const ProductBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductContainer;
