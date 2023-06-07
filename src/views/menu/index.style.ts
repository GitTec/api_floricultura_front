import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green,
        padding:20
    },
    logo: {
        justifyContent: "center",
    },
    textLogin: {
        color: colors.white,
        fontSize: 25,
        fontWeight: "bold",
    },
    botao: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        margin:3,
        marginTop:20
    }
});