import { StyleSheet } from "react-native";
import { SColors } from "../../../utils/styles/Colors.styles";
import { SFonts } from "../../../utils/styles/Fonts.styles";

export const SWorkoutcard = StyleSheet.create({
    card: {
        flexDirection: "row",
    },
    image: {
        width: 141,
        height: 89,
        borderRadius: 10,
    },
    textBlock: {
        marginLeft: 12,
    },
    line: {
        height: 2,
        width: 35,
        backgroundColor: SColors.accent,
        borderRadius: 5,
    },
    title: {
        marginTop: 12,
        ...SFonts.SM500_14_20,
    },
    spacer: {
        flex: 1,
    },
    description: {
        marginBottom: 16,
        color: "#A8A8A8",
        ...SFonts.SM500_14_20,
    },
});
