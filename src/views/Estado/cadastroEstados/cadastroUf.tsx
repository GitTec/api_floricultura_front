import { Button, Text, TextInput } from "react-native-paper";
import { Alert, View } from "react-native"
import { useEffect, useState } from "react"
import { styles } from "./cadastroUf.styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api.floricultura";
import { Controller, useForm } from "react-hook-form";

interface ICadastrarEstado {
    nome: string;
    sigla: string;
}

export default function CadastroEstado() {

    const { navigate } = useNavigation();
    const [estado, setEstado] = useState();


    useEffect(() => {
        api.get("/uf").then((dados) => {
            setEstado(dados.data);
        })
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm<ICadastrarEstado>({
        defaultValues: {
            nome: "",
            sigla: "",
        }
    });

    const onSubmit = (dados: any) => {
        console.log(dados)

        api.post("/uf", { nome: dados.nome, sigla: dados.sigla }).then(() => {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
            //@ts-ignore
            navigate("ListaEst")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao realizar cadatro!!")
        })
    }

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo estado</Text>

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

        <Controller
            control={control}
            name="sigla"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe a sigla"
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