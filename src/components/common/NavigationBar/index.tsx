import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import LionMarket from '../../../assets/LionMarket.svg';
import { categoryAtom } from '../../../atoms/categoryAtom';
import SearchInput from '../Search';

const NavigationBar = () => {
  const returnCategory = useResetRecoilState(categoryAtom);
  // 두 번째 인자는 setCookie이지만 사용하지 않아 빈 값으로 처리
  const [token, , removeCookie] = useCookies(['userToken']);
  const handleRemoveToken = () => {
    removeCookie('userToken');
  };

  return (
    <NaviBarWrap>
      <LogoWrap onClick={() => returnCategory()}>
        <span>
          <img src={LionMarket} />
        </span>
        <p>사자마켓</p>
      </LogoWrap>
      <span style={{ position: 'absolute', left: '33.4%' }}>
        <SearchInput />
      </span>
      <MenuWrap>
        {token.userToken ? (
          <ul>
            <li>방 관리</li>
            <li>방 생성</li>
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
