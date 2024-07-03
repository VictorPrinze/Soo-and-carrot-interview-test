import React from "react";
import {
    View,
    Platform,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
} from "react-native";
import TextField from "../../../components/TextField/TextField";
import Icon from "../../../components/Icon/Icon";
import Dropdown from "../../../components/Dropdown/Dropdown";
import InputField from "../../../components/InputField/InputField";
import PasswordField from "../../../components/PasswordField/PasswordField";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import { viewmodel } from "./viewmodel";

const AccountCreationScreen = () => {
    const {
        navigateBack,
        createAccount,
        competitions,
        formData,
        formDataError,
        setFormData,
    } = viewmodel();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <Icon 
                            icon="arrow-back"
                            color="#000"
                            variant="outlined"
                            variantColor="grey"
                            isPressable
                            size={20}
                            onPress={() => navigateBack()}
                        />
                    </View>
                    <TextField 
                        text="Create Account"
                        size="bg"
                        color="#000"
                        isBold
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputView}>
                        <Dropdown
                            options={competitions}
                            selectedValue={""}
                            onValueChange={(item: string) => setFormData({...formData, "competition": item})}
                            error={formDataError.competition}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <InputField
                            placeholder="Email Address"
                            onChangeText={(e) => setFormData({...formData, "email": e})}
                            error={formDataError.email}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <PasswordField
                            placeholder="Enter Password"
                            onChangeText={(e) => setFormData({...formData, "password": e})}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <PasswordField
                            placeholder="Confirm Password"
                            onChangeText={(e) => setFormData({...formData, "confirmPassword": e})}
                            error={formDataError.password}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <InputField
                            placeholder="FirstName in English"
                            onChangeText={(e) => setFormData({...formData, "firstName": e})}
                            error={formDataError.firstName}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <InputField
                            placeholder="LastName in English"
                            onChangeText={(e) => setFormData({...formData, "lastName": e})}
                            error={formDataError.lastName}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Checkbox
                            label="By signing up, I agree to Cloit's"
                            linkText="Terms & Conditions and Privacy Policy."
                            linkUrl="https://facebook.com"
                            onChange={(e) => setFormData({...formData, "isChecked": e ? "yes" : "no"})}
                            isChecked={formData.isChecked === "yes" ? true : false}
                            error={formDataError.isChecked}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            text="Sign Up"
                            bgColor="#253BFF"
                            onPress={createAccount}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingRight: 20,
      paddingTop: 10,
      paddingLeft: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 80,
        paddingTop: 20,
        marginBottom: 20,
    },
    icon: {
        marginRight: 20,
    },
    formContainer: {
        flex: 1,
    },
    inputView: {
        marginTop: 5,
        marginBottom: 5
    },
    buttonView: {
        marginTop: 20,
        marginBottom: 10
    }
});

export default AccountCreationScreen;