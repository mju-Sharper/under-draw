import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/layout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
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
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
