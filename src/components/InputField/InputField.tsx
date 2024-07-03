import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  error?: string;
}

const InputField = ({ error, ...props }: InputFieldProps) => {
  return (
    <View>
      <TextInput {...props} style={[styles.input, props.style]} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    fontSize: 16,
  },
  error: {
    fontSize: 12,
    color: "red",
  },
});

export default InputField;
