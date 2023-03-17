import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainPage from './pages/MainPage';
import Theme from './styles/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
