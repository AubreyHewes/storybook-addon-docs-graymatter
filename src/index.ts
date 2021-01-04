import { PresetOptions } from "./preset";
import { StorybookOptions } from "@storybook/core/types";
import { PresetConfig } from "@storybook/core/dist/server/types";

export default function SBAddonGrayMatterDocs(
  storybookOptions: StorybookOptions,
  presetOptions: PresetOptions
): PresetConfig[] {
  return [
    {
      name: require.resolve("./preset"),
      options: presetOptions,
    },
  ];
}
