import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen  from "./src/screens/splash";
import AccountCreationScreen from "./src/screens/signup/account_creation";
import CompetitionScreen from "./src/screens/signup/competition";
import { navigationRef } from "./src/services/Navigation/NavigationService";
import config from './config/storybook';
import StorybookUIRoot from './.storybook';

const Stack = createStackNavigator();

const showStorybook = config.SHOW_STORYBOOK;

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={SplashScreen} />
                <Stack.Screen name="Signup" component={AccountCreationScreen} />
                <Stack.Screen name="Competition" component={CompetitionScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}

const App = () => {
    if (showStorybook) {
        return <StorybookUIRoot />
    } else {
        return <AppNavigation />
    }
};

export default App;