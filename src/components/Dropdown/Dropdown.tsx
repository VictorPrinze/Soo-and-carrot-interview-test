import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface DropdownProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  error,
  onValueChange
}) => {
  const isAndroid = Platform.OS === "android";

  return (
    <View>
        <View style={styles.container}>
            {isAndroid && (
                <RNPickerSelect
                style={{
                    inputAndroid: styles.inputAndroid,
                }}
                value={selectedValue}
                onValueChange={onValueChange}
                items={options.map(option => ({ label: option.label, value: option.value }))}
                />
            )}
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    height: 50,
  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  error: {
    fontSize: 12,
    color: "red",
  },
});

export default Dropdown;
