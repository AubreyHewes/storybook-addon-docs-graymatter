import { Configuration, RuleSetRule } from "webpack";
import { Options } from "@storybook/core-common";

export interface PresetOptions extends Options {
  prefix?: string;
  fileNameFallback?: boolean;
}

export default {
  webpackFinal: async (webpackConfig: Configuration, options: PresetOptions) => {
    webpackConfig.module = webpackConfig.module || { rules: [] };

    const mdxRules = webpackConfig.module?.rules.find(
      (r) => r.test?.toString() === "/(\\.)?(stories|story)\\.mdx$/"
    ) ?? {
      use: [],
    };

    webpackConfig.module.rules = [
      {
        test: /\.md$/,
        // @ts-ignore
        use: [...(mdxRules.use ?? [])].concat([
          {
            loader: require.resolve("./loaders/graymatter.js"),
            options: {
              prefix: options?.prefix,
              fileNameFallback: options?.fileNameFallback,
            },
          },
        ]),
        enforce: "pre",
      } as RuleSetRule,
    ].concat(webpackConfig.module.rules.filter((r) => r.test?.toString() !== "/\\.md$/"));

    return webpackConfig;
  },
};
