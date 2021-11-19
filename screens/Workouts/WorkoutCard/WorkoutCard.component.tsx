import React from "react";
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from "react-native";
import { SWorkoutcard } from "./WorkoutCard.styles";

interface IWorkoutCardProps {
    source: ImageSourcePropType;
    title: string;
    description: string;
    style?: StyleProp<ViewStyle>;
}

export const WorkoutCardComponent: React.FC<IWorkoutCardProps> = ({
    description,
    title,
    source,
    style,
}) => {
    return (
        <View style={[SWorkoutcard.card, style]}>
            <Image style={SWorkoutcard.image} source={source} />
            <View style={SWorkoutcard.textBlock}>
                <View style={SWorkoutcard.line} />
                <Text style={SWorkoutcard.title}>{title}</Text>
                <View style={SWorkoutcard.spacer} />
                <Text style={SWorkoutcard.description}>{description}</Text>
            </View>
        </View>
    );
};
