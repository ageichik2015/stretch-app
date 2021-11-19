import React from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { SDeseaseItem } from "./DeseaseItem.styles";

interface IDeseaseItemComponentProps {
    active: boolean;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export const DeseaseItemComponent: React.FC<IDeseaseItemComponentProps> = ({
    active,
    children,
    style,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={[
                SDeseaseItem.container,
                active && SDeseaseItem.active,
                style,
            ]}
            onPress={onPress}
        >
            <Text style={SDeseaseItem.text}>{children}</Text>
        </TouchableOpacity>
    );
};
