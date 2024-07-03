const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[a-zA-Z]+$/; // Only alphabetic characters
const passwordPattern = /^(?=(.*[A-Z]){3})(?=(.*[a-z]){1})(?=(.*\d){1})(?=(.*[~!@#$%^&*()_\-\+=?]){1})[\w~!@#$%^&*()_\-\+=?]{8,}$/;

export const validateEmail = (email: string) => {
    return emailPattern.test(email);
}

export const validateName = (name: string) => {
    return namePattern.test(name);
}

export const validatePassword = (password: string) => {
    return passwordPattern.test(password);
}