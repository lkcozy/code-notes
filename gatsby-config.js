module.exports = {
  pathPrefix: "/code-notes",
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
  ],
};
