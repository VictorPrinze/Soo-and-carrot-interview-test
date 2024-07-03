import { navigate } from "../../services/Navigation/NavigationService";

export const viewmodel = () => {
    
    const navigateToSignup = () => {
        navigate("Signup");
    }

    const navigateToEmail = () => {}

    return {
        navigateToSignup: navigateToSignup,
        navigateToEmail: navigateToEmail,
    }
}