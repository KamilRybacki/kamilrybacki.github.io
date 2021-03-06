module.exports = {
  siteMetadata: {
    baseUrl: 'https://kamilrybacki.github.io',
    title: 'Kamil Rybacki\'s site',
    description: 'My personal portfolio and blogging site',
    social: {
      'fbAppID': 530846295083921,
      'twitterUserTag': '@@rybacki_kamil',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components', 'gatsby-plugin-image',
    'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-plugin-postcss',
    'gatsby-plugin-graphql-codegen', 'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': '.',
          '@src': 'src',
          '@style': 'src/style',
          '@images': 'assets/images',
          '@templates': 'assets/templates',
          '@posts': 'assets/posts',
          '@projects': 'assets/projects',
          '@components': 'src/components',
          '@pages': 'src/pages',
        },
        extensions: ['js', 'ts', 'tsx', 'jsx'],
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './assets/images/',
      },
      __key: 'images',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/',
      },
      __key: 'pages',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'posts',
        'path': './content/posts/',
      },
      __key: 'posts',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'projects',
        'path': './content/projects/',
      },
      __key: 'projects',
    }, {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/layouts/blog/layout.tsx'),
          project: require.resolve('./src/layouts/blog/layout.tsx'),
        },
        extensions: ['.mdx', '.md'],
      },
    }],
};
