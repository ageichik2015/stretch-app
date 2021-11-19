import { StyleSheet } from "react-native";
import { SColors } from "../../../utils/styles/Colors.styles";
import { SFonts } from "../../../utils/styles/Fonts.styles";

export const SDeseaseItem = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#F4F4F4",
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        height: 50,
    },
    text: {
        marginLeft: 23,
        color: "black",
        ...SFonts.SM500_14_20,
    },
    active: {
        borderColor: SColors.accent,
    },
});
