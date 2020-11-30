import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import { ThemeProvider } from './ThemeContext';
import {GlobalProvider} from '../context/globalContext'

function App({ children }) {
  return (
    <GlobalProvider >
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </GlobalProvider>
    
  );
}

export default App;
