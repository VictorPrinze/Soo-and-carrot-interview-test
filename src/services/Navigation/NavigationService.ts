import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Competition: undefined;
};

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: keyof RootStackParamList, params?: RootStackParamList[keyof RootStackParamList]) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}