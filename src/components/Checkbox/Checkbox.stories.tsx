import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Checkbox from "./Checkbox";

const CheckboxMeta: Meta<typeof Checkbox> = {
    component: Checkbox,
    args: {
        label: "Input Field",
        onChange: (text: boolean) => console.log(text),
        isChecked: false,
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default CheckboxMeta;

export const CheckboxWithShortText: StoryObj<typeof Checkbox> = {
    args: {
        label: "Do you agreed?",
        onChange: (text: boolean) => console.log(text),
        isChecked: false,
    }
}

export const CheckboxWithLongText: StoryObj<typeof Checkbox> = {
    args: {
        label: "I agreed to the terms and condition specified in this application and therefore, I am responsible for further actions.",
        onChange: (text: boolean) => console.log(text),
        isChecked: false,
    }
}

export const CheckedCheckboxWithLink: StoryObj<typeof Checkbox> = {
    args: {
        label: "By signing up, I agree to Cloit's",
        linkText: "Terms & Conditions and Privacy Policy.",
        linkUrl: "https://facebook.com",
        onChange: (text: boolean) => console.log(text),
        isChecked: true,
    }
}