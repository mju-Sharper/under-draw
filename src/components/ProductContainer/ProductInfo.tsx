import styled from 'styled-components';

interface ProductInfoProps {
  // 임시 타입
  productTitle?: string;
  productCategory?: string;
  productName?: string;
  productPrice?: string;
  startTime?: string;
}

const ProductInfo = ({
  productTitle,
  productCategory,
  productName,
  productPrice,
  startTime,
}: ProductInfoProps) => (
  <ProductInfoListWrap>
    <li>
      제목 : <p>{productTitle}</p>
    </li>
    <li>
      품목 : <p>{productCategory}</p>
    </li>
    <li>
      품명 : <p>{productName}</p>
    </li>
    <li>
      시작가 : <p>{productPrice}</p>
    </li>
    <li>
      경매 시간 : <p>{startTime}</p>
    </li>
  </ProductInfoListWrap>
);

const ProductInfoListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 17px 0;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.B_POINT_18}

  li {
    display: flex;
    margin: 7px 0;

    p {
      margin: 0;
      padding-left: 8px;
    }
  }
`;

export default ProductInfo;
