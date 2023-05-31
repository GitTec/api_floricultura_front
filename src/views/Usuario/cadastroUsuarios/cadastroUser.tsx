import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native"
import { styles } from "./cadastroUser.styles"
import { useState } from "react"

export default function CadastroUsuario() {

    const [nome, setNome] = useState();

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo usuário</Text>
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o nome"
        >
        </TextInput>
    
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o login"
        >
        </TextInput>

        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe a senha"
        >
        </TextInput>
        
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o Email"
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