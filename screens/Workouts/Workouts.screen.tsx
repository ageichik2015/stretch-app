import { RouteProp } from "@react-navigation/core";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { StackParamList } from "../../App";
import { Workouts } from "../../utils/constants/Workouts.constant";
import { WorkoutCardComponent } from "./WorkoutCard/WorkoutCard.component";
import { SWorkouts } from "./Workouts.styles";

interface IWorkoutsScreenProps {
    route: RouteProp<StackParamList, "Workouts">;
}

export const WorkoutsScreen: React.FC<IWorkoutsScreenProps> = ({ route }) => {
    const items = route.params.id
        ? Workouts.get(route.params.id)?.trainings
        : Array.from(Workouts.values())
              .map((item) => item.trainings)
              .flat();
    return (
        <ScrollView style={SWorkouts.container}>
            <Image
                style={SWorkouts.logo}
                source={require("../../assets/logo.png")}
            />
            {!!route.params.id && (
                <Text style={SWorkouts.title}>
                    Исходя из Ваших особенностей мы составили ряд тренировок :
                </Text>
            )}
            <View style={SWorkouts.list}>
                {items?.map((item) => (
                    <WorkoutCardComponent
                        style={SWorkouts.listItem}
                        key={item.title}
                        description={item.description}
                        source={item.image}
                        title={item.title}
                    />
                ))}
            </View>
        </ScrollView>
    );
};
