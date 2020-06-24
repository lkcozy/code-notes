module.exports = {
  pathPrefix: "code-notes",
  siteMetadata: {
    title: "Lkcozy Code Notes",
    description: `Personal code-related code notes and snippets`,
    author: "Kan Luo",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        gitRepoContentPath:
          "https://github.com/lkcozy/code-notes/tree/master/notes/",
        openSearch: {
          siteUrl: "http://lkcozy.github.io/code-notes",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lkcozy's Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My memory bank.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
  ],
};
