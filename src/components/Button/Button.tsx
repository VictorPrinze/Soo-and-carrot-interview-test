import React from "react";
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface ButtonProps {
    leftIcon?: string;
    rightIcon?: string;
    text: string;
    bgColor?: string;
    onPress: () => void;
}

const Button = ({
    leftIcon,
    rightIcon,
    bgColor = "#000",
    text,
    onPress
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles(bgColor, leftIcon).button}
            onPress={() => onPress()}
        >
            <View style={styles(bgColor, leftIcon).content}>
                {leftIcon && (
                    <View style={styles(bgColor, leftIcon).leftContent}>
                        <MaterialIcons name={leftIcon} size={20} color="white" />
                        <Text style={styles(bgColor, leftIcon).text}>{text}</Text>
                    </View>
                )}
                {!leftIcon && (
                    <Text style={styles(bgColor, leftIcon).text}>{text}</Text>
                )}
                {rightIcon && (
                    <View style={styles(bgColor, leftIcon).rightIcon}>
                        <MaterialIcons name={rightIcon} size={20} color="white" />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = (bgColor: string, leftIcon: string |undefined) => StyleSheet.create({
    button: {
        backgroundColor: bgColor,
        padding: leftIcon ? 5 : 15,
        borderRadius: 30,
        paddingRight: 5,
        paddingLeft: 20,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: leftIcon ? "space-between" : "center",
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    rightIcon: {
        padding: 12,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 1,
    }
});

export default Button;