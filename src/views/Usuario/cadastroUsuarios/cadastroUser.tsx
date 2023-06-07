import { Button, Text, TextInput } from "react-native-paper";
import { Alert, View } from "react-native"
import { styles } from "./cadastroUser.styles"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import api from "../../../services/api.floricultura";

export default function CadastroUsuario() {

    const { navigate } = useNavigation();

    const { control, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            nome: "",
            login: "",
            senha1: "",
            senha2: "",
            email: "",
        }
    });

    const onSubmit = (dados: any) => {
        console.log(dados)

        if (getValues("senha1") != getValues("senha2")) {
            Alert.alert("Ops...", "As senhas não coincidem!!")
            return
        }

        api.post("/usuario", { nome: dados.nome, login: dados.login, senha: dados.senha1, email: dados.email }).then(() => {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
            //@ts-ignore
            navigate("ListaUser")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao realizar cadastro!!")
        })
    }

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo usuário</Text>

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
            name="login"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe o login"
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="senha1"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe a senha"
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="senha2"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Repita a senha"
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="email"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe o email"
                    keyboardType="email-address"
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