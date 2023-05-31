import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native"
import { styles } from "./cadastroProd.styles"
import { useState } from "react"

export default function CadastroProduto() {

    const [nome, setNome] = useState();

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo Produto</Text>
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o nome do produto"
        >
        </TextInput>

        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe o preço do produto"
        >
        </TextInput>

        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe a quantidade em estoque"
        >
        </TextInput>
        
        <TextInput
            style={styles.input}
            value={nome}
            placeholder="Informe a categoria"
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