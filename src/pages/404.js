import React from 'react';

import { Container, Container404, Separator } from "../styles/componentsStyles"
import { Link } from "gatsby"
import SEO from '../components/Seo'
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <>
    <SEO title="Page not Found" />
    <Layout>
      <Container>
        <Container404>
          <Separator />
          <p>Oops.. It appears this page does not exist.</p>
          <Link to="/">Back to the homepage.</Link>
        </Container404>
      </Container>
    </Layout>
  </>
);

export default NotFoundPage;
