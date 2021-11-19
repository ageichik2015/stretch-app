import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { ButtonComponent } from "../../components/ui/Button/Button.component";
import { SChooseDesease } from "./ChooseDesease.styles";
import { DeseaseItemComponent } from "./DeseaseItem/DeseaseItem.component";
import { Workouts } from "../../utils/constants/Workouts.constant";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../App";

interface IChooseDeseaseScreenProps {
    navigation: StackNavigationProp<StackParamList, "ChooseDesease">;
}

export const ChooseDeseaseScreen: React.FC<IChooseDeseaseScreenProps> = ({
    navigation,
}) => {
    const [activeDesease, setActiveDesease] = useState<number | null>(null);
    const [haveDesease, setHaveDesease] = useState(false);

    return (
        <ScrollView style={SChooseDesease.container}>
            <Image
                style={SChooseDesease.logo}
                source={require("../../assets/logo.png")}
            />
            {!haveDesease ? (
                <View>
                    <View style={SChooseDesease.card}>
                        <Text style={SChooseDesease.cardText}>
                            Наши тренировки позволят быстро достичь успехов в
                            растяжке без вреда для здоровья!
                        </Text>
                        <Image
                            source={require("../../assets/illustration.png")}
                        />
                    </View>
                    <Text style={SChooseDesease.title}>
                        Есть ли у вас какие-либо медицинские противопоказания
                    </Text>
                    <ButtonComponent
                        style={SChooseDesease.noButton}
                        onPress={() => {
                            navigation.navigate("Workouts", {
                                id: null,
                            });
                        }}
                    >
                        Нет
                    </ButtonComponent>
                    <ButtonComponent
                        style={SChooseDesease.yesButton}
                        outlined
                        onPress={() => setHaveDesease(true)}
                    >
                        Да
                    </ButtonComponent>
                </View>
            ) : (
                <View>
                    <Text style={SChooseDesease.choosingTitle}>
                        Пожалуйста, выберите свои медицинские противопоказания :
                    </Text>
                    <View style={SChooseDesease.deseaseList}>
                        {Array.from(Workouts).map((item) => {
                            return (
                                <DeseaseItemComponent
                                    key={item[0]}
                                    style={SChooseDesease.deseaseItem}
                                    active={item[0] === activeDesease}
                                    onPress={() => setActiveDesease(item[0])}
                                >
                                    {item[1].desease}
                                </DeseaseItemComponent>
                            );
                        })}
                    </View>
                    <ButtonComponent
                        style={SChooseDesease.deseaseButton}
                        onPress={() => {
                            navigation.navigate("Workouts", {
                                id: activeDesease,
                            });
                        }}
                    >
                        Применить
                    </ButtonComponent>
                </View>
            )}
        </ScrollView>
    );
};
