import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import PasswordField from "./PasswordField";

const PasswordFieldMeta: Meta<typeof PasswordField> = {
    component: PasswordField,
    argTypes: {
       onPress: { action: "pressed the button" },
    },
    args: {
        placeholder: "Password Field",
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default PasswordFieldMeta;

export const PasswordFieldWithoutError: StoryObj<typeof PasswordField> = {
    args: {
        placeholder: "Enter Password",
        onChange: (text) => console.log(text)
    }
}

export const PasswordFieldWithError: StoryObj<typeof PasswordField> = {
    args: {
        placeholder: "Enter Password",
        onChange: (text) => console.log(text),
        error: "This field is required"
    }
}