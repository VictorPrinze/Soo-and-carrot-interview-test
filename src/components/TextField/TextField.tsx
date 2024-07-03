import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextFieldProps {
  text: string;
  size: "lg" | "bg" | "md" | "sm" | "xs" | number;
  isBold?: boolean;
  color: string;
}

const sizeObj: any = {
    "lg": 40,
    "bg": 30,
    "md": 20,
    "sm": 10,
    "xs": 5,
};

const TextField = ({
  text,
  size,
  isBold = false,
  color
}: TextFieldProps) => {
  return (
    <Text style={styles(size, isBold, color).text}>
        {text}
    </Text>
  );
};

const styles = (size: string|number, isBold: boolean, color: string) => StyleSheet.create({
    text: {
      fontSize: sizeObj[size] ?? size,
      fontWeight: isBold ? "500" : "100",
      color: color ? color : "#000", 
    }
});

export default TextField;
