import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import TextField from "./TextField";

const TextFieldMeta: Meta<typeof TextField> = {
    title: "TextField",
    component: TextField,
    args: {
        text: "TextField",
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default TextFieldMeta;

export const LargeTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Large Text",
        size: "lg",
    }
};

export const BoldLargeTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Large Text",
        size: "lg",
        isBold: true,
    }
};

export const BigTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Big Text",
        size: "bg",
    }
};

export const BoldBigTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Big Text",
        size: "bg",
        isBold: true,
    }
};

export const MediumTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Medium Text",
        size: "md",
    }
};

export const BoldMediumTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Medium Text",
        size: "md",
        isBold: true,
    }
};

export const SmallTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Small Text",
        size: "sm",
    }
};

export const BoldSmallTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Small Text",
        size: "sm",
        isBold: true,
    }
};

export const ExtraSmallTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Extra Small Text",
        size: "xs",
    }
};

export const BoldExtraSmallTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Extra Small Text",
        size: "xs",
        isBold: true,
    }
};

export const CustomSizeTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Custom Text",
        size: 16,
    }
};

export const BoldCustomSizeTextField: StoryObj<typeof TextField> = {
    args: {
        text: "Bold Custom Text",
        size: 16,
        isBold: true,
    }
};