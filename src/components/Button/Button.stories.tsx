import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

const ButtonMeta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    argTypes: {
       onPress: { action: "pressed the button" },
    },
    args: {
        text: "Button",
        bgColor: "",
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default ButtonMeta;

export const ArcticBlueTouchableButtonWithIcons: StoryObj<typeof Button> = {
    args: {
        text: "Touchable Button with Icons",
        bgColor: "#253BFF",
        rightIcon: "arrow-forward",
        leftIcon: "login",
    }
};

export const BlueGrayTouchableButtonWithIcons: StoryObj<typeof Button> = {
    args: {
        text: "Touchable Button with Icons",
        bgColor: "#1D2939",
        rightIcon: "arrow-forward",
        leftIcon: "email",
    }
};

export const ArcticBlueTouchableButtonWithoutIcons: StoryObj<typeof Button> = {
    args: {
        text: "Touchable Button without Icons",
        bgColor: "#253BFF",
    }
};