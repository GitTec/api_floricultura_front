import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native"
import { useState } from "react"
import { styles } from "./cadastroUf.styles";


export default function CadastroEstado() {

    const [nome, setNome] = useState();

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo estado</Text>
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o nome"
        >
        </TextInput>
    
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe a Sigla"
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