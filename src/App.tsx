import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import AccessRightRoute from './components/Auth/AccessRightRoute';
import { Toast } from './components/common/Toast';
import Layout from './components/layout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import MainPage from './pages/MainPage';
import Registration from './pages/Registration';
import RoomPage from './pages/RoomPage';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

function App() {
  const [token, ,] = useCookies(['userToken']);

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/room"
              element={
                <AccessRightRoute
                  token={token.userToken}
                  component={<RoomPage />}
                />
              }
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/Registration"
              element={
                <AccessRightRoute
                  token={token.userToken}
                  component={<Registration />}
                />
              }
            />
          </Routes>
        </Layout>
        <Toast />
      </ThemeProvider>
    </div>
  );
}

export default App;
