[![GitHub](https://img.shields.io/github/license/aubreyhewes/storybook-addon-docs-graymatter?style=flat-square)](https://github.com/AubreyHewes/storybook-addon-docs-graymatter/blob/canary/LICENSE)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/aubreyhewes/storybook-addon-docs-graymatter?style=flat-square)](https://github.com/AubreyHewes/storybook-addon-docs-graymatter/tags)
[![npm (scoped)](https://img.shields.io/npm/v/@hewes/storybook-addon-docs-graymatter?style=flat-square)](https://www.npmjs.com/package/@hewes/storybook-addon-docs-graymatter)
![node-current (scoped)](https://img.shields.io/node/v/@hewes/storybook-addon-docs-graymatter?style=flat-square)

# A Storybook addon for graymatter documentation

> drop-in for integrating, for example, docusaurus or github docs

## Usage

Install

    npm install @hewes/storybook-addon-docs-graymatter

Then edit `.storybook/main.js`

````javascript
module.exports = {
  "stories": [
    "../docs/**/*.md",
    // ...
  ],
  "addons": [
    {
      name: "@hewes/storybook-addon-docs-graymatter"
    },
    // ...
  ],
}

````

### Options

|Option|Description|Default|
|---|---|---|
|`prefix`|Prefix the title with this "Folder" i.e. a value of `Documentation` would create titles like `Documentation/Title`, which would therefore be in a sub folder.||
|`fileNameFallback`|If this is `true` then files without graymatter will still be displayed using the relative filename as the title|`false`|

## TODO

 * [x] filename fallback for files without graymatter
 * [ ] sidebar support (to support drop-in from docusaurus)

## Reference

 * https://storybook.js.org/docs/react/addons/writing-presets
