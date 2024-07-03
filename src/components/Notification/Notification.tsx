import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface NotificationProps {
  isVisible: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onGotIt: () => void;
}

const Notification = ({
  isVisible,
  title,
  message,
  onClose,
  onGotIt,
}: NotificationProps) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.7} >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
            <View>
                <TouchableOpacity style={styles.starButton} onPress={onClose}>
                    <MaterialIcons name="star" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <MaterialIcons name="close" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onGotIt}>
          <Text style={styles.buttonText}>Got it</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginTop: 30,
  },
  message: {
    fontSize: 16,
    marginBottom: 40,
    color: "#000",
  },
  closeButton: {
    padding: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 12,
    maxWidth: 300,
    alignSelf: "center",
  },
  starButton: {
    backgroundColor: "#253BFF",
    padding: 12,
    borderRadius: 100,
    paddingHorizontal: 12,
    maxWidth: 300,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#253BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Notification;
