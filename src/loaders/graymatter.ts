import { getOptions } from "loader-utils";
import graymatter from "gray-matter";
import path from "path";
import * as webpack from "webpack";

export default async function webpackLoader(this: webpack.loader.LoaderContext, content: string) {
  this.cacheable && this.cacheable();
  const callback = this.async() as webpack.loader.loaderCallback;
  const options = Object.assign({}, getOptions(this), {
    filepath: this.resourcePath,
  });

  const relPath = path.relative(this.context, this.resourcePath);

  const matter = graymatter(content.replace(/export default "(.*)"/, "$1"));
  // this.getLogger("@hewes/storybook-addons-docs-graymatter").log("matter", matter);

  // @ts-ignore
  if (matter.isEmpty || !matter.data.title) {
    if (!options.fileNameFallback) {
      return callback(null, matter.content);
    }
    matter.data.id = relPath;
    matter.data.title = relPath;
  }

  const mdxStoryContent = `<Meta title="${options.prefix ? `${options.prefix}/` : ""}${
    matter.data.title || matter.data.id
  }" id="${matter.data.id || matter.data.title}" />\n\n# ${matter.data.title?.replace(/.*\//, "")}\n${matter.content}`;

  return callback(null, mdxStoryContent);
}
