import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native"
import { styles } from "./cadastroCat.styles"
import { useState } from "react"

export default function CadastroCategoria() {

    const [nome, setNome] = useState();

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre uma nova categoria</Text>
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o nome da categoria"
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