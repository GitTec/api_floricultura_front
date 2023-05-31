import { StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#32b768",
        padding:10
    },
    textLista: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao:{
        width: 200,
        height: 50,
        backgroundColor: '#ab4651',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    tabela:{
        marginTop:10,
        backgroundColor:colors.gray,
        width:"100%",
        
    }
});