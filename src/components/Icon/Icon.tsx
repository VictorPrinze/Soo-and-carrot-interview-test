import React from "react";
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


interface IconProps {
    icon: string;
    isPressable: boolean;
    onPress: () => void;
    color: string;
    size: number;
    variant: "default" | "outlined" | "filled";
    variantColor: string;
};

const Icon = ({
    icon,
    isPressable,
    onPress,
    color,
    size,
    variant,
    variantColor
}: IconProps
) => {
    return (
        <View style={styles(variantColor)[variant]}>
            {isPressable && (
                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons name={icon} size={size} color={color} />
                </TouchableOpacity>
            )}
            {!isPressable && (
                <MaterialIcons name={icon} size={size} color={color} />
            )}
        </View>
    );
}

const styles = (variantColor: string) => StyleSheet.create({
    default: {
        padding: 12,
        paddingHorizontal: 12,
        maxWidth: 300,
        alignSelf: "center",
    },
    outlined: {
        padding: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: variantColor,
        paddingHorizontal: 12,
        maxWidth: 300,
        alignSelf: "center",
    },
    filled: {
        padding: 12,
        borderRadius: 100,
        backgroundColor: variantColor,
        paddingHorizontal: 12,
        maxWidth: 300,
        alignSelf: "center",
    }
});

export default Icon;