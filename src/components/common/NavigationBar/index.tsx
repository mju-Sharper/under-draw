import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import LionMarket from '../../../assets/LionMarket.svg';
import { categoryAtom } from '../../../atoms/categoryAtom';
import { manageBtnAtom, manageListAtom } from '../../../atoms/manageAtom';
import { instanceAPI } from '../../../utils/constant';
import SearchInput from '../Search';
import { showToastMessage } from '../Toast';

const NavigationBar = () => {
  const handleClickManageBtn = useSetRecoilState(manageBtnAtom);
  const handleSetUserProducts = useSetRecoilState(manageListAtom);

  const handleClickMainBtn = useResetRecoilState(manageBtnAtom);
  const returnCategory = useResetRecoilState(categoryAtom);

  const handleReturn = () => {
    handleClickMainBtn();
    returnCategory();
  };

  const handleClickManage = () => {
    handleClickManageBtn(true);

    instanceAPI.get(`/products/user-products`).then((res) => {
      if (res.status === 200) {
        handleSetUserProducts(res.data.data);
      }
    });
  };

  // 두 번째 인자는 setCookie이지만 사용하지 않아 빈 값으로 처리
  const [token, , removeCookie] = useCookies(['userToken']);
  const handleRemoveToken = () => {
    showToastMessage('로그아웃 되었습니다!');
    removeCookie('userToken');
  };

  return (
    <NaviBarWrap>
      <LogoWrap onClick={handleReturn}>
        <span>
          <img src={LionMarket} />
        </span>
        <p>
          <Link to="/">사자마켓</Link>
        </p>
      </LogoWrap>
      <span style={{ position: 'absolute', left: '33.4%' }}>
        <SearchInput />
      </span>
      <MenuWrap>
        {token.userToken ? (
          <ul>
            <li onClick={handleClickManage}>방 관리</li>
            <li>
              <Link to="/Registration">방 생성</Link>
            </li>
            <li onClick={handleRemoveToken}>로그아웃</li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/sign-up">회원가입</Link>
            </li>
            <li>
              <Link to="/sign-in">로그인</Link>
            </li>
          </ul>
        )}
      </MenuWrap>
    </NaviBarWrap>
  );
};

const NaviBarWrap = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 100px;
  margin: 0 auto;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.L_BASIC_30}
  cursor: pointer;

  span {
    margin-top: 10px;
  }

  p {
    margin-left: 12px;
  }
`;

const MenuWrap = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.B_POINT_22}

  ul {
    display: flex;
  }

  li {
    margin: 0 20px;
    cursor: pointer;
  }
`;

export default NavigationBar;
