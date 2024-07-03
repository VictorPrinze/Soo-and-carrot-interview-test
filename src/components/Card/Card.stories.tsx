import React from "react";
import { View } from "react-native";
import { StoryObj, Meta } from "@storybook/react";
import Card from "./Card";

const CardMeta: Meta<typeof Card> = {
    title: "Card",
    component: Card,
    argTypes: {
        onPress: { action: "pressed the card"},
    },
    args: {
        title: "Card",
        startDate: "2024-01-01",
        endDate: "2024-09-01",
        description: "This is a test card" 
    },
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
};

export default CardMeta;

export const CardWithShortDescription: StoryObj<typeof Card> = {
    args: {
        title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
        startDate: "2024-01-01",
        endDate: "2024-09-01",
        description: "Pyeongchang, Gangwon-do, Korea" 
    },
}

export const CardWithLongDescription: StoryObj<typeof Card> = {
    args: {
        title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
        startDate: "2024-01-01",
        endDate: "2024-09-01",
        description: "Pyeongchang, Gangwon-do, Korea Very Very long city name name name name" 
    },
}