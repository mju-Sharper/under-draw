import styled from 'styled-components';

import PhotoBox from '../common/PhotoBox';

interface ItemBoxProps {
  items?: productCategoryProps;
}

// TODO API 연결 후 photo에 src 넣기
// TODO API 연결 후 상품정보 넘기기
const ItemBox = ({ items }: ItemBoxProps) => (
  <ItemBoxWrap>
    <PhotoBox />
    <div style={{ marginLeft: '22px' }}>
      <ProductInfoListWrap>
        <li>
          제목 : <p>{items?.productTitle}</p>
        </li>
        <li>
          품목 : <p>{items?.productCategory}</p>
        </li>
        <li>
          품명 : <p>{items?.productName}</p>
        </li>
        <li>
          시작가 : <p>{items?.productPrice}</p>
        </li>
        <li>
          경매 시간 : <p>{items?.startTime}</p>
        </li>
      </ProductInfoListWrap>
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

export default ItemBox;
