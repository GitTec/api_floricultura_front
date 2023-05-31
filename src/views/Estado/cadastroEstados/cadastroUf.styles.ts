import { StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color:colors.green,
        padding:35,
        backgroundColor:colors.darkGreen
    },
    text: {
        color: colors.purple,
        fontWeight: "bold",
        fontSize:20,
    },
    input: {
        marginTop:20,
        height: 40,
        width: "100%",
        borderColor: colors.darkBlue,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonSave:{
        marginTop:20,
        height: 40,
        width: 300,
        borderColor: colors.darkBlue
    }
})