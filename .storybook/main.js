module.exports = {
  "stories": [
    "../docs/**/*.md",
    "../docs/**/*.mdx"
  ],
  "addons": [
    {
      name: "../dist/index.js",
      options: { prefix: "Documentation", fileNameFallback: true },
    },
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y'
  ],
}
