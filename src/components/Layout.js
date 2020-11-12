import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollIndicator from './ScrollIndicator';
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext';
// import PageAnimation from './PageAnimation';

const Layout = ({ children }) => {


  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
      {/* <PageAnimation /> */}
      <CustomCursor />
      <ScrollIndicator />
      <Header onCursor={onCursor} />
      <main>{children}</main>
      <Footer onCursor={onCursor} />   
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;