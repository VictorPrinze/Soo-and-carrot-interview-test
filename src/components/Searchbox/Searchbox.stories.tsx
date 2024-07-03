import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Searchbox from "./Searchbox";

const InputFieldMeta: Meta<typeof Searchbox> = {
    component: Searchbox,
    args: {
        placeholder: "Search",
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default InputFieldMeta;

export const SearchboxWithPlaceholder: StoryObj<typeof Searchbox> = {
    args: {
        placeholder: "Search",
        onChangeText: (text: string) => console.log(text)
    }
}