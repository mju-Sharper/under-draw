import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
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
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/Registration"
              element={
                // <Registration productId="b2055ec5-4cc8-445e-accc-b26e317c3215" />
                <Registration />
              }
            />
            {/* productId있으면 업데이트 없으면 등록 */}
          </Routes>
        </Layout>
        <Toast />
      </ThemeProvider>
    </div>
  );
}

export default App;
