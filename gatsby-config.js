module.exports = {
  pathPrefix: "code-notes",
  siteMetadata: {
    title: "L&W Code Notes",
    description: `Code-related notes and snippets`,
    author: "Kan Luo",
    keywords: [
      "gis",
      "ogc",
      "sensorthings",
      "blockchain",
      "ethereum",
      "js",
      "react",
      "nodejs",
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        basePath: "/",
        contentPath: "notes",
        gitRepoContentPath:
          "https://github.com/lkcozy/code-notes/tree/master/notes/",
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        openSearch: {
          siteUrl: "http://lkcozy.github.io/code-notes",
        },
        logo: "https://raw.githubusercontent.com/lkcozy/code-notes/master/assets/logo.png",
        showDate: true,
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
        icon: `assets/logo.png`,
        showDate: true,
      },
    },
  ],
};
