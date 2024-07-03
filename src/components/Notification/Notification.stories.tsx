import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Notification from "./Notification";

const NotificationMeta: Meta<typeof Notification> = {
    title: "Notification",
    component: Notification,
    args: {
       onClose: () => console.log("close button is clicked"),
       onGotIt: () => console.log("got it button is clicked"),
       isVisible: true,
       message: "Great to have you here",
       title: "Welcome to Soo"
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default NotificationMeta;

export const NotificationWithAllProps: StoryObj<typeof Notification> = {
    args: {
        onClose: () => console.log("close button is clicked"),
        onGotIt: () => console.log("got it button is clicked"),
        isVisible: true,
        message: "Great to have you here",
        title: "Welcome to Soo"
    }
};