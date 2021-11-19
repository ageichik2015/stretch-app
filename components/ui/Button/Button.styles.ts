import { StyleSheet } from "react-native";
import { SColors } from "../../../utils/styles/Colors.styles";
import { SFonts } from "../../../utils/styles/Fonts.styles";

export const SButtonComponent = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: SColors.accent,
        borderRadius: 10,
        justifyContent: "center",
    },
    outlinedContainer: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: SColors.accent,
    },
    text: {
        display: "flex",
        alignSelf: "center",

        color: "white",
        ...SFonts.SM500_18_22,
    },
    outlinedText: {
        color: SColors.accent,
    },
});
