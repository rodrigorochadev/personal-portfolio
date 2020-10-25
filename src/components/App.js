import React from 'react';

import { ThemeProvider } from './ThemeContext';
import GlobalStyles from '../styles/GlobalStyles';

import {GlobalProvider} from './context/globalContext'


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
