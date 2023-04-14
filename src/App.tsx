import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { Toast } from './components/common/Toast';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import EditPage from './pages/EditPage';
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
            <Route path="/Registration" element={<Registration />} />
            <Route path="/edit-page" element={<EditPage />} />
          </Routes>
        </Layout>
        <Toast />
      </ThemeProvider>
    </div>
  );
}

export default App;
