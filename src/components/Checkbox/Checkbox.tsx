import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking 
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface CheckboxProps {
  label: string;
  linkText?: string;
  linkUrl?: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  error?: string;
}

const Checkbox = ({
  label,
  isChecked,
  linkText,
  linkUrl,
  onChange,
  error,
}: CheckboxProps) => {

  const toggleCheckbox = () => {
    onChange(!isChecked);
  };

  const handlePress = (linkUrl: string|undefined) => {
    if (linkUrl) {
      Linking.openURL(linkUrl);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => toggleCheckbox()}>
            <View style={[styles.checkbox, isChecked && styles.checked]}>
                <MaterialIcons name="check" size={15} color="white" />
            </View>
        </TouchableOpacity>
        <View>
            <Text style={styles.label}>
                {label}
                {linkText && (
                  <TouchableOpacity onPress={() => handlePress(linkUrl)}>
                    <Text style={styles.link}>{linkText}</Text>
                  </TouchableOpacity>
                )}
            </Text>
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#555",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#555",
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  link: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#333",
  },
  error: {
    fontSize: 12,
    color: "red",
  },
});

export default Checkbox;
