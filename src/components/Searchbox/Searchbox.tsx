import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface SearchboxProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Searchbox = ({ placeholder, onChangeText }: SearchboxProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
      />
      <MaterialIcons name="search" size={30} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 8,
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#888",
  },
});

export default Searchbox;
