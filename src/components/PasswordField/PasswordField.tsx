import React, { useState } from "react";
import {
    TextInput,
    TextInputProps,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface InputFieldProps extends TextInputProps {
  error?: string;
}

const PasswordField: React.FC<InputFieldProps> = ({ error, secureTextEntry, ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.input, props.style]}
                secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
                style={styles.toggleButton}
                onPress={togglePasswordVisibility}
                activeOpacity={0.8}
            >
                <MaterialIcons
                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                    size={24}
                    color="#8888"
                />
            </TouchableOpacity>
        </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    fontSize: 16,
    marginBottom: 5,
  },
  toggleButton: {
    position: "absolute",
    right: 10,
  },
  error: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
  },
});

export default PasswordField;
