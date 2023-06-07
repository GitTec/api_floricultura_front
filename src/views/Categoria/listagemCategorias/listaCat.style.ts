import { StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green,
        padding:10
    },
    textLista: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        width: "50%",
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    botaoAtualizar:{
        width:"50%",
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    tabela:{
        marginTop:10,
        backgroundColor:colors.gray,
        width:"100%",
    }
});