import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {

  return (
    <>
      {/* <div style={{background: 'transparent', position: 'absolute', top: 0, left: 0, minHeight: '100vh'}}>&nbsp;</div> */}
        &nbsp;
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
