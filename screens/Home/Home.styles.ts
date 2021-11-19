import { StyleSheet } from "react-native";
import { SFonts } from "../../utils/styles/Fonts.styles";

export const SHome = StyleSheet.create({
    container: {
        paddingVertical: 68,
        backgroundColor: "white",
        flex: 1,
    },
    title: {
        maxWidth: 160,
        textAlign: "center",
        display: "flex",
        alignSelf: "center",
        ...SFonts.SM500_28_34,
    },
    description: {
        maxWidth: 311,
        marginTop: 24,
        textAlign: "center",
        display: "flex",
        alignSelf: "center",
        ...SFonts.SM500_14_20,
    },
    image: {
        marginTop: 46,
        display: "flex",
        alignSelf: "center",
    },
    button: {
        marginTop: 40,
        width: 335,
        alignSelf: "center",
    },
});
