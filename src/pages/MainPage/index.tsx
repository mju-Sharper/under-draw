import styled from 'styled-components';

import LionMarket from '../../assets/LionMarket.svg';

const MainPage = () => (
  <>
    <div>저는 메인페이지에용</div>
    <hr />
    <button>버튼 기본 스타일 테스트</button>
    <hr />
    <TextTest1>글씨 스타일 테스트(ExtraLight)</TextTest1>
    <TextTest2>글씨 스타일 테스트(Regular)</TextTest2>
    <TextTest3>글씨 스타일 테스트(SemiBold)</TextTest3>
    <TextTest4>글씨 스타일 테스트(Bold)</TextTest4>
    <hr />
    <h4>아이콘 테스트</h4>
    <img src={LionMarket} />
  </>
);

const TextTest1 = styled.div`
  // font-size, font-weight 모두 포함하여 만들었기에 Theme.ts보고 필요한 걸로 골라와서 아래와 같이 사용하면 됩니다.
  ${({ theme }) => theme.fonts.L_BASIC_15}
`;

const TextTest2 = styled.div`
  ${({ theme }) => theme.fonts.R_BASIC_17}
`;

const TextTest3 = styled.div`
  ${({ theme }) => theme.fonts.SB_POINT_20}
`;

const TextTest4 = styled.div`
  ${({ theme }) => theme.fonts.B_POINT_22}
`;

export default MainPage;
