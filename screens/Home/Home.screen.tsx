import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { StackParamList } from "../../App";
import { ButtonComponent } from "../../components/ui/Button/Button.component";
import { SHome } from "./Home.styles";

interface IHomeScreen {
    navigation: StackNavigationProp<StackParamList, "Home">;
}

export const HomeScreen: React.FC<IHomeScreen> = ({ navigation }) => {
    const handleOnPress = () => {
        navigation.navigate("ChooseDesease");
    };
    return (
        <ScrollView contentContainerStyle={SHome.container}>
            <Text style={SHome.title}>Stretching App</Text>
            <Text style={SHome.description}>
                This app can сreate a personalized workout based on your medical
                contraindications
            </Text>
            <Image
                style={SHome.image}
                source={require("../../assets/telka.png")}
            />
            <ButtonComponent onPress={handleOnPress} style={SHome.button}>
                Приступить
            </ButtonComponent>
        </ScrollView>
    );
};
