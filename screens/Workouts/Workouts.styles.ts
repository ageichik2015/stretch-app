import { StyleSheet } from "react-native";
import { SFonts } from "../../utils/styles/Fonts.styles";

export const SWorkouts = StyleSheet.create({
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
    title: {
        marginTop: 40,
        color: "black",
        ...SFonts.SM500_18_22,
    },
    list: {
        marginTop: 28,
    },
    listItem: {
        marginBottom: 24,
    },
});
