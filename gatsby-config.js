module.exports = {
  pathPrefix: "code-notes",
  siteMetadata: {
    title: "L&W Code Notes",
    description: `Code-related notes and snippets`,
    author: "Kan Luo",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        logo:
          "https://raw.githubusercontent.com/lkcozy/code-notes/master/assets/logo.png",
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
        name: `L&W Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. Our memory bank.`,
        start_url: `/`,
        background_color: `hsl(285, 5%, 17%)`,
        theme_color: `hsl(285, 5%, 17%)`,
        display: `standalone`,
        icon: `https://raw.githubusercontent.com/lkcozy/code-notes/master/assets/logo.png `,
      },
    },
  ],
};
