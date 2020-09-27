import React from 'react';

import { Container, Container404, Separator } from "../styles/componentsStyles"
import { Logo } from '../assets/svg/svg'
import { Link } from "gatsby"
import SEO from '../components/Seo'

const NotFoundPage = () => (
  <>
    <SEO title="Page not Found" />
    <Container>
      <Container404>
        <Logo />
        <Separator />
        <p>Oops.. It appears this page does not exist.</p>
        <Link to="/">Back to the homepage.</Link>
      </Container404>
    </Container>
    
  </>
);

export default NotFoundPage;
