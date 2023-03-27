import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Layout from './components/layout';
import MainPage from './pages/MainPage';
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
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
