import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Layout from './components/layout';
import MainPage from './pages/MainPage';
import Registration from './pages/Registration';
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
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
