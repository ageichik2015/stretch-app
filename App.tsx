import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/Home/Home.screen";
import { useFonts } from "expo-font";
import { ChooseDeseaseScreen } from "./screens/ChooseDesease/ChooseDesease.screen";
import { WorkoutsScreen } from "./screens/Workouts/Workouts.screen";

export type StackParamList = {
    Home: undefined;
    ChooseDesease: undefined;
    Workouts: { id: number | null };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
    const [loaded] = useFonts({
        "Montserrat-regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-medium": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ChooseDesease"
                    component={ChooseDeseaseScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Workouts"
                    component={WorkoutsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
