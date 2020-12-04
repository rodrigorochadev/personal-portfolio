import React from 'react';

import { Container404, Description, Separator } from "../styles/componentsStyles"
import { Link } from "gatsby"
import SEO from '../components/Seo'
import Layout from '../components/Layout';
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext';



const NotFoundPage = () => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return(
    <>
      <SEO title="Page not Found" />
      <Layout>
          <Container404>
            <Separator />
            <Description>Oops.. It appears this page does not exist.</Description>
            <Link to="/"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              onClick={onCursor}
              rel="noreferrer" target="_blank"
            >Back to the homepage.
            </Link>
            
          </Container404>
      </Layout>
    </>
  )
};

export default NotFoundPage;
