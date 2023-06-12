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

    /*Aqui uso a biblioteca useForm(ajuda a gerenciar formularios no react)desestruturo o mesmo em variaveis*/
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {    //Aqui defino os valores padroes dos campos
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
            control={control}   //control: objeto que serve para controlar e interagir com o formulario, registrar campos, validar entradas etc
            name="nome"
            render={({ field }) => {    //renderizado o campo na tela
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
                handleSubmit(onSubmit)  //usado para enviar o formulario do onSubmit
            }>
            SALVAR
        </Button>

    </View>
}