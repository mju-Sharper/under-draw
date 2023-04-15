import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Delete from '../../../assets/Delete.svg';
import Setting from '../../../assets/Setting.svg';
import PhotoBox from '../../common/PhotoBox';

interface ItemBoxProps {
  items?: productCategoryProps;
  isClicked?: boolean;
}

const ItemBox = ({ items, isClicked }: ItemBoxProps) => {
  const navigate = useNavigate();
  // 여기 Registration으로 이동시에 props도 넘겨줄 수 있도록 ?
  const handleMoveEditPage = () => {
    navigate('/Registration');
  };

  return (
    <>
      <ItemBoxWrap>
        <PhotoBox src={items?.imageUrl} />
        <div style={{ marginLeft: '22px' }}>
          <ProductInfoListWrap>
            <li>
              제목 : <p>{items?.productTitle}</p>
            </li>
            <li>
              품목 : <p>{items?.category}</p>
            </li>
            <li>
              품명 : <p>{items?.name}</p>
            </li>
            <li>
              시작가 : <p>{items?.startingBid}</p>
            </li>
            <li>
              경매 시간 : <p>{items?.auctionTime}</p>
            </li>
          </ProductInfoListWrap>
        </div>
        {isClicked && (
          <>
            <DeleteBtn>
              <img src={Delete} />
            </DeleteBtn>
            <SettingBtn onClick={handleMoveEditPage}>
              <img src={Setting} />
            </SettingBtn>
          </>
        )}
      </ItemBoxWrap>
    </>
  );
};

const ItemBoxWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 21px;
  width: 760px;
  height: 224px;
  border-radius: 10px;
  margin-bottom: 45px;
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

const SettingBtn = styled.button`
  position: absolute;
  right: 22px;
  bottom: 16px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 78px;
  bottom: 16px;
`;

export default ItemBox;
