import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green,
    },
    logo: {
        justifyContent: "center",
    },
    textLogin: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        marginTop: 20,
        padding: 5,
        width: 300,
        height:40,
        backgroundColor: colors.white,
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 3,
        margin:4
    },
    botao: {
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: colors.red,
        marginTop: 10,
        borderRadius: 10
    },
    botaoText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white
    }
});