import React, { useState, useEffect } from "react";
import {
    validateName,
    validateEmail,
    validatePassword,
} from "../../../utils/validator";
import { getCompetitions } from "../../../utils/helper";
import { navigate, goBack } from "../../../services/Navigation/NavigationService";

interface formDataProps {
    competition: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    isChecked: string;
};

const defaultFormData = {
    competition: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    isChecked: "",
};

export const viewmodel = () => {
    const [formData, setFormData] = useState<formDataProps>(defaultFormData);
    const [formDataError, setFormDataError] = useState<formDataProps>(defaultFormData);
    const [competitions, setCompetitions] = useState<Array<{label: string, value: string}>>([]);
    
    const createAccount = () => {
        if (!validateFormData()) {
            navigate("Competition");
        }
        return;
    }

    const navigateBack = () => {
        goBack();
    }

    const validateFormData = () => {
        
        let emailError = "";
        let firstNameError = "";
        let lastNameError = "";
        let passwordError = "";
        let competitionError = "";
        let isCheckedError = "";

        let hasError = false;

        if (formData.competition === "" || formData.competition === null || formData.competition === undefined) {
            hasError = true;
            competitionError = "You must pick a competition to register";
        }

        if (!validateEmail(formData.email)) {
            hasError = true;
            emailError = "Email format is invalid";
        }

        if (!validateName(formData.firstName)) {
            hasError = true;
            firstNameError = "This is a required field.";
        }

        if (!validateName(formData.lastName)) {
            hasError = true;
            lastNameError = "This is a required field.";
        }

        if (!validatePassword(formData.password)) {
            hasError = true;
            passwordError = `At least 8 letters. ${'\n'}Include at least 3 upper case letters, lowercase letters, number, or special character. ${'\n'}Special letters are only limited to (~!@#$%^&*()_-+=?) ${'\n'}`
        }

        if (formData.password != formData.confirmPassword) {
            hasError = true;
            passwordError += `New password and confirm password do not match.`
        }

        if (formData.isChecked.toLocaleLowerCase() === "no" || formData.isChecked === "") {
            hasError = true;
            isCheckedError = "This is a required field.";
        }

        setFormDataError({
            ...formDataError,
            firstName: firstNameError,
            lastName: lastNameError,
            competition: competitionError,
            password: passwordError,
            email: emailError,
            isChecked: isCheckedError,
        });

        return hasError;
    }

    useEffect(() => {
        setCompetitions(getCompetitions());
    }, []);

    return {
        createAccount: createAccount,
        navigateBack: navigateBack,
        competitions: competitions,
        formData: formData,
        setFormData: setFormData,
        formDataError: formDataError,
    }
}