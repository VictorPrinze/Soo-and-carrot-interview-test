import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography as TypographyComponent } from "src/components";

import { COLOR_OPTIONS, TYPOGRAPHY_VARIANTS } from ".storybook/constants";

const TypographyMeta: Meta<typeof TypographyComponent> = {
  title: "Typography",
  component: TypographyComponent,

  args: {
    color: "grey.800",
    variant: "body2",
    children: "Hello there!",
  },

  argTypes: {
    variant: {
      options: TYPOGRAPHY_VARIANTS,
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: COLOR_OPTIONS,
    },
  },

  decorators: [
    (Story) => (
      <View
        style={{
          paddingHorizontal: 12,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const Typography: StoryObj<typeof TypographyComponent> = {
  args: {
    ...TypographyMeta.args,
    variant: "body2",
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ab error alias, et earum at! Labore ex, porro harum debitis quae maxime delectus voluptas incidunt aut dignissimos perferendis. Quibusdam, ullam.",
  },
};

export const Title1: StoryObj<typeof TypographyComponent> = {
  args: {
    ...TypographyMeta.args,
    variant: "title1",
  },
};
export const Title2: StoryObj<typeof TypographyComponent> = {
  args: {
    ...TypographyMeta.args,
    variant: "title2",
  },
};

export default TypographyMeta;