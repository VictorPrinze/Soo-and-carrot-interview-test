import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

interface CardProps {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    onPress: () => void;
};

const Card = ({
    title,
    description,
    startDate,
    endDate,
    onPress
}: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress}>    
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{startDate}~{endDate}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#253BFF",
      color: "#fff",
      borderRadius: 8,
      padding: 25,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#fff",
    },
    date: {
        fontSize: 16,
        color: "#fff",
    },
    description: {
      fontSize: 12,
      lineHeight: 20,
      color: "#A9A9A9"
    },
});
  
export default Card;