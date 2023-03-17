import styled from 'styled-components';

const MainPage = () => (
  <>
    <div>저는 메인페이지에용</div>
    <hr />
    <button>버튼 기본 스타일 테스트</button>
    <TextTest1>글씨 스타일 테스트</TextTest1>
  </>
);

const TextTest1 = styled.div`
  background-color: ${({ theme }) => theme.colors.PINK};
`;

export default MainPage;
