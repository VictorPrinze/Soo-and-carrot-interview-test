import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Icon from "./Icon";

const IconMeta: Meta<typeof Icon> = {
    title: "Icon",
    component: Icon,
    args: {
        
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default IconMeta;

export const ArrowForwardIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-forward"
    }
};

export const ArrowBackwardIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-back"
    }
};

export const PressableIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-back",
        isPressable: true,
        onPress: () => console.log("icon is pressed"),
        size: 20,
    }
};

export const OutlinedIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-back",
        isPressable: true,
        onPress: () => console.log("icon is pressed"),
        size: 20,
        variant: "outlined",
        variantColor: "#000",
    }
};

export const FilledIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-back",
        isPressable: true,
        color: "#fff",
        onPress: () => console.log("icon is pressed"),
        size: 20,
        variant: "filled",
        variantColor: "#000",
    }
};

export const DefaultIcon: StoryObj<typeof Icon> = {
    args: {
        icon: "arrow-back",
        isPressable: true,
        onPress: () => console.log("icon is pressed"),
        size: 20,
        variant: "default",
        variantColor: "#000",
    }
};