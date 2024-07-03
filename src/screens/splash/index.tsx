import React from "react";
import {
    ImageBackground,
    View,
    StyleSheet,
} from "react-native";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { viewmodel } from "./viewmodel";

const SplashScreen = () => {
    const {
        navigateToSignup,
        navigateToEmail
    } = viewmodel();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/splash_bg.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.content}>
                    <TextField 
                        text={`Soo${'\n'}and Carrots`}
                        size="lg"
                        isBold
                        color="#fff"
                    />
                </View>
                <View style={styles.overlay} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            leftIcon="login"
                            rightIcon="arrow-forward"
                            text="Sign up for free"
                            bgColor="#253BFF"
                            onPress={() => navigateToSignup()}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            leftIcon="email"
                            rightIcon="arrow-forward"
                            text="Continue with Email"
                            bgColor="#1D2939"
                            onPress={navigateToEmail}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    content: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.9)",
        height: "20%",
        top: "80%",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 20,
    },
    button: {
       marginBottom: 10
    }
});

export default SplashScreen;
