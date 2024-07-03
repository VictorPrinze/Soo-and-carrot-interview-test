import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import InputField from "./InputField";

const InputFieldMeta: Meta<typeof InputField> = {
    component: InputField,
    argTypes: {
       onPress: { action: "pressed the button" },
    },
    args: {
        placeholder: "Input Field",
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

export const InputFieldWithoutError: StoryObj<typeof InputField> = {
    args: {
        placeholder: "First Name in English",
        onChange: (text) => console.log(text)
    }
}

export const InputFieldWithError: StoryObj<typeof InputField> = {
    args: {
        placeholder: "First Name in English",
        onChange: (text) => console.log(text),
        error: "This field is required"
    }
}