module.exports = {
  siteMetadata: {
    title: `Rodrigo Rocha`,
    description: `Welcome! Have a look at my portfolio. Get inspired and let's build something togehter.`,
    author: `Rodrigo Rocha`,
    image: `https://firebasestorage.googleapis.com/v0/b/pathfinder-designs.appspot.com/o/social%2Fshare-rr.jpg?alt=media&token=d4ed10ef-b1d9-4f54-a2e2-93616cf1cfc0`,
    keywords: `Software Developer, Software Engineer, Responsive, Mobile, Websites, Apps, Web Development, Graphic Design, UI/UX, Digital Marketing, SEO`,
    siteUrl: `https://rodrigorocha.pt`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodrigo Rocha`,
        short_name: `rodrigorocha`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#178555`,
        display: `minimal-ui`,
        icon: `src/assets/images/favico.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cormorant Garamond`,
            variants: [`300`, '400', '700']
          },
          {
            family: `Poppins`,
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preact`,
    // `gatsby-plugin-offline`,
  ],
}
