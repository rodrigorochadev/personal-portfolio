module.exports = {
  siteMetadata: {
    title: `Rodrigo Rocha`,
    description: `Welcome to my website. Get to know me a bit better. Take a look at my portfolio, get inspired and let's work together!`,
    author: `Rodrigo Rocha`,
    image: `https://firebasestorage.googleapis.com/v0/b/rodrigo-rocha-website.appspot.com/o/Social%2Frr.jpg?alt=media&token=cc55477c-6d36-4ba5-a5cd-37861f79f6ca`,
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
        theme_color: `#06111c`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //     options: {
    //       fonts: {
    //         google: [
    //           {
    //             family: "Questrial",
    //             variants: ['400', '700']
    //           },
    //           {
    //             family: "Poppins",
    //             variants: ['400', '700']
    //           },
    //         ]
    //       }
    //     }
    // },
    // {
    //   resolve: "gatsby-omni-font-loader",
    //   options: {
    //     enableListener: true,
    //     custom: [
    //       {
    //         name: [`Canela Thin`, `Canela Bold`, `Plus Jakarta Display Regular`, `Plus Jakarta Display Bold`],
    //         file: `/fonts/fonts.css`,
    //       },
    //     ],
    //   }
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [`Plus Jakarta Display Regular`, `Plus Jakarta Display Bold`],
          urls: [`/fonts/fonts.css`]
        }
      }
    },
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
    // `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preact`,
    // `gatsby-plugin-offline`,
  ],
};
