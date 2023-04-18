import { useEffect } from 'react';

import { useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { pageNum } from '../../../atoms/pageNumAtom';

import ItemBox from './ItemBox';

interface Props {
  products: productCategoryProps[];
  isClicked?: boolean;
}

const ProductContainer = ({ products, isClicked }: Props) => {
  const resetOffset = useResetRecoilState(pageNum);

  // 다시 offset 0부터 보일 수 있도록 추가
  useEffect(() => {
    resetOffset();
  }, [isClicked]);

  return (
    <ProductBoxWrap>
      {products.map((item) => (
        <ItemBox
          key={item.productTitle}
          items={item}
          isClicked={isClicked}
          productsId={item.id}
        />
      ))}
    </ProductBoxWrap>
  );
};

const ProductBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductContainer;
