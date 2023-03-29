import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Layout from './components/layout';
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
            <Route path="/Registration" element={<Registration />} />
            <Route path="/room" element={<RoomPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
