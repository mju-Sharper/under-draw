import { useEffect } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { PageOffset } from '../../../atoms/pageOffsetAtom';

import ItemBox from './ItemBox';

interface Props {
  products: productCategoryProps[];
  isClicked?: boolean;
}

// TODO 페이지네이션 로직 전부 수정하기
// 페이지네이션 3개까지만 보일 수 있도록 offset을 활용해 slice
const ProductContainer = ({ products, isClicked }: Props) => {
  const offset = (useRecoilValue(PageOffset) - 1) * 3;
  const resetOffset = useResetRecoilState(PageOffset);

  // 다시 offset 0부터 보일 수 있도록 추가
  useEffect(() => {
    resetOffset();
  }, [isClicked]);

  return (
    <ProductBoxWrap>
      {products?.slice(offset, offset + 3).map((item) => (
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
