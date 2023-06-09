import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavigationBar from '../common/NavigationBar';

interface layoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: layoutProps) => (
  <LayoutContainer>
    <NavigationBar />
    <LayoutContents>{children || <Outlet />}</LayoutContents>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const LayoutContents = styled.div`
  width: 1440px;
  height: 100vh;
  padding-top: 100px;
`;

export default Layout;
