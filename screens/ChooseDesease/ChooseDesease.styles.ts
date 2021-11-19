import { StyleSheet } from "react-native";
import { SColors } from "../../utils/styles/Colors.styles";
import { SFonts } from "../../utils/styles/Fonts.styles";

export const SChooseDesease = StyleSheet.create({
    container: {
        paddingVertical: 30,
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: 24,
        alignSelf: "center",
    },
    card: {
        marginTop: 40,
        backgroundColor: SColors.accent,
        borderRadius: 10,
        padding: 12,
        flexDirection: "row",
        height: 124,
    },
    cardText: {
        width: 214,
        color: "white",
        flexGrow: 1,
        ...SFonts.SM500_14_20,
    },
    title: {
        marginTop: 32,
        color: "black",
        width: 326,
        ...SFonts.SM500_18_22,
    },
    noButton: {
        marginTop: 24,
    },
    yesButton: {
        marginTop: 16,
    },
    choosingTitle: {
        marginTop: 40,
        color: "black",
        width: 336,
        ...SFonts.SM500_18_22,
    },
    deseaseList: {
        marginTop: 28,
    },
    deseaseItem: {
        marginBottom: 16,
    },
    deseaseButton: {
        marginTop: 40,
    },
});
