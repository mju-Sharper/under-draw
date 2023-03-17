import './App.css';
import { ThemeProvider } from 'styled-components';

import { Theme } from './styles/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
    </div>
  );
}

export default App;
