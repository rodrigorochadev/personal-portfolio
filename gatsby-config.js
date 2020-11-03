module.exports = {
  siteMetadata: {
    title: `Rodrigo Rocha`,
    description: `Welcome to my website. Get to know me a bit better. Take a look at my portfolio, get inspired and let's work together!`,
    author: `Rodrigo Rocha`,
    image: `https://firebasestorage.googleapis.com/v0/b/pathfinder-designs.appspot.com/o/social%2Fshare-rr.jpg?alt=media&token=d4ed10ef-b1d9-4f54-a2e2-93616cf1cfc0`,
    keywords: `Software Developer, Software Engineer, Responsive, Mobile, Websites, Apps, Web Development, Graphic Design, UI/UX, Digital Marketing, SEO`,
    siteUrl: `https://rodrigorocha.pt`
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodrigo Rocha`,
        short_name: `rodrigorocha`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#178555`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `portfolio`,
    //     path: `${__dirname}/src/assets/images/portfolio/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Questrial",
                variants: ['400', '700']
              },
              {
                family: "Poppins",
                variants: ['400', '700']
              },
            ]
          }
        }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [`Canela-Light`, `Canela-Bold`],
          urls: [`/fonts/fonts.css`]
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Cormorant Garamond`,
    //         variants: [`300`, '400', '700']
    //       },
    //       {
    //         family: `Junge`,
    //         variants: [`400`]
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    // `gatsby-plugin-preact`,
    // `gatsby-plugin-offline`,
  ],
};
