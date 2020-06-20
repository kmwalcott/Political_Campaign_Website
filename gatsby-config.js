const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Kyle Walcott for Florida House',
    author: 'Kyle Walcott',
    description: 'Elect Kyle Walcott to the Florida House of Representatives!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-theme-forty',
        short_name: 'theme',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
