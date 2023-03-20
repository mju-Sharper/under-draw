import styled from 'styled-components';

import LionMarket from '../../../assets/LionMarket.svg';
import InputArea from '../InputArea';

const demoToken = false;

const NavigationBar = () => (
  <NaviBarWrap>
    <LogoWrap>
      <span>
        <img src={LionMarket} />
      </span>
      <p>사자마켓</p>
    </LogoWrap>
    <span style={{ position: 'fixed', left: '34.6%' }}>
      <InputArea />
    </span>
    <MenuWrap>
      {demoToken ? (
        <ul>
          <li>방 관리</li>
          <li>방 생성</li>
          <li>로그아웃</li>
        </ul>
      ) : (
        <ul>
          <li>회원가입</li>
          <li>로그인</li>
        </ul>
      )}
    </MenuWrap>
  </NaviBarWrap>
);

const NaviBarWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

// 사자아이콘, 사자마켓 명 들어갈 div
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

// 로그인 전, 후 메뉴들 들어갈 div
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
