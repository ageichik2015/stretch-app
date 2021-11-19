import React from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { SButtonComponent } from "./Button.styles";

interface IButtonComponentProps {
    outlined?: boolean;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const ButtonComponent: React.FC<IButtonComponentProps> = ({
    children,
    onPress,
    outlined,
    style,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                SButtonComponent.container,
                style,
                outlined && SButtonComponent.outlinedContainer,
            ]}
        >
            <Text
                style={[
                    SButtonComponent.text,
                    outlined && SButtonComponent.outlinedText,
                ]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};
