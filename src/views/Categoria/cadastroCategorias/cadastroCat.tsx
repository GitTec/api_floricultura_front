import { Button, Text, TextInput } from "react-native-paper";
import { Alert, View } from "react-native"
import { styles } from "./cadastroCat.styles"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form";
import api from "../../../services/api.floricultura";
import { useEffect, } from "react"
import { useNavigation } from "@react-navigation/native";
import { ICategoria } from "../../../interfaces/categorias.interface";

export default function CadastroCategoria() {

    const { navigate } = useNavigation();
    const [nome, setNome] = useState<ICategoria[]>([]);

    useEffect(() => {
        api.get("/categoria").then((dados) => {
            setNome(dados.data);
        })
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nome: "",
        }
    });

    const onSubmit = (dados: any) => {
        console.log(dados)

        api.post("/categoria", { nome: dados.nome }).then(() => {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
            //@ts-ignore
            navigate("ListaCat")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao realizar cadatro!!")
        })
    }

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre uma nova categoria</Text>

        <Controller
            control={control}
            name="nome"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe o nome"
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Button
            style={styles.buttonSave}
            mode="contained"
            icon="content-save"
            onPress={
                handleSubmit(onSubmit)
            }>
            SALVAR
        </Button>

    </View>
}