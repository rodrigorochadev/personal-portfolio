import React from "react"

import SEO from "../components/seo"
import { Container404 } from "../styles/componentStyles"
import { Logo } from '../assets/svg/svg'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container404>
      <Logo />
      <p>Page Not Found</p>
      <Link to="/">Back to the homepage.</Link>
    </Container404>
  </>
)

export default NotFoundPage
