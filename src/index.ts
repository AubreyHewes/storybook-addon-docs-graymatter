import { PresetOptions } from "./preset";
import { PresetConfig, Options } from "@storybook/core-common";

export default function SBAddonGrayMatterDocs(storybookOptions: Options, presetOptions: PresetOptions): PresetConfig[] {
  return [
    {
      name: require.resolve("./preset"),
      options: presetOptions,
    },
  ];
}
