import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native"
import { useState } from "react"
import { styles } from "./cadastroCit.styles";

export default function CadastroCidades() {

    const [nome, setNome] = useState();

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre uma nova cidade</Text>
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o nome"
        >
        </TextInput>
    
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o estado"
        >
        </TextInput>

        <Button
            style={styles.buttonSave}
            mode="contained"
            icon="content-save"
            onPress={() => {
                //@ts-ignore
                // navigate("CadastroCat")
            }}>
            SALVAR
        </Button>

    </View>
}