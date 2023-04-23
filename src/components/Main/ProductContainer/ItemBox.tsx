import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Delete from '../../../assets/Delete.svg';
import Setting from '../../../assets/Setting.svg';
import { getCookie } from '../../../utils/constant';
import PhotoBox from '../../common/PhotoBox';
import { showToastMessage } from '../../common/Toast';

interface ItemBoxProps {
  items?: productCategoryProps;
  isClicked?: boolean;
  productsId?: string;
}

const ItemBox = ({ items, isClicked }: ItemBoxProps) => {
  const accessToken = getCookie();
  const navigate = useNavigate();
  const handleMoveEditPage = () => {
    navigate('/Registration', { state: items?.id });
  };

  // TODO room페이지 컴포넌트로 넘어갈 때 정보 넘겨줘야함
  // TODO 내가 만든 방인지 다른 사람 방인지 검증 후, 보여주는 room 화면 다르도록 해야함
  const handleMoveRoom = () => {
    accessToken
      ? navigate('/room')
      : showToastMessage('로그인 후 이용해주세요!');
  };

  return (
    <>
      <ItemBoxWrap>
        <PhotoBox src={items?.imageUrl} />
        <div style={{ marginLeft: '22px' }} onClick={handleMoveRoom}>
          <ProductInfoListWrap>
            {/* <li>
              제목 : <p>{items?.productTitle}</p>
            </li> */}
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
            <DeleteBtn onClick={handleMoveEditPage}>
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
