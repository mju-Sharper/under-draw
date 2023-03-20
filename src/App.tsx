import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavigationBar from './components/common/NavigationBar';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
