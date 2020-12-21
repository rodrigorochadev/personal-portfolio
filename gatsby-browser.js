import React from 'react';

import App from './src/components/App/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
