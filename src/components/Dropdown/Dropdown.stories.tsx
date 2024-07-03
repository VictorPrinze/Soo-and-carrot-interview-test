import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";

const availableOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
];

const DropdownMeta: Meta<typeof Dropdown> = {
    component: Dropdown,
    args: {
        options: availableOptions,
        selectedValue: availableOptions[0]?.value,
        onValueChange: (itemValue: string, itemIndex: number) => console.log("Selected value: ", itemValue),
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default DropdownMeta;

export const DropdownWithoutError: StoryObj<typeof Dropdown> = {
    args: {
        options: availableOptions,
        selectedValue: availableOptions[0]?.value,
        onValueChange: (itemValue: string, itemIndex: number) => console.log('Selected value:', itemValue),
    }
}

export const DropdownWithError: StoryObj<typeof Dropdown> = {
    args: {
        options: availableOptions,
        selectedValue: availableOptions[0]?.value,
        onValueChange: (itemValue: string, itemIndex: number) => console.log('Selected value:', itemValue),
        error: "This field is required",
    }
}