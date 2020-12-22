import React from 'react';
import PropTypes from 'prop-types';

import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import CustomCursor from './DesignUtils/CustomCursor';
import ScrollIndicator from './DesignUtils/ScrollIndicator';
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext';

const Layout = ({ children }) => {


  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
    {/* <AnimatePresence exitBeforeEnter> */}
      {/* <PageAnimation /> */}
        {/* <motion.div
            key="layout"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{delay: 0.3}}
        > */}
          
          <CustomCursor />
          <ScrollIndicator />
          <Header onCursor={onCursor} />
          <main>{children}</main>
          <Footer onCursor={onCursor} />   
        {/* </motion.div> */}
    {/* </AnimatePresence> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;