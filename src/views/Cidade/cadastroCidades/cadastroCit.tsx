import { Button, Text, TextInput } from "react-native-paper";
import { Alert, View } from "react-native"
import { styles } from "./cadastroCit.styles";
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from "react-hook-form"
import { colors } from "../../../constants/color";
import { useState, useEffect } from "react"
import api from "../../../services/api.floricultura";
import { IEstado } from "../../../interfaces/estados.interface";
import { useNavigation } from "@react-navigation/native";

interface ICadastrarCidade {
    nome: string;
    idEstado: number;
}

export default function CadastroCidades() {

    const { navigate } = useNavigation();
    const [estados, setEstados] = useState<IEstado[]>([]);

    useEffect(() => {
        api.get("/uf").then((dados) => {
            setEstados(dados.data);
        })
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm<ICadastrarCidade>({
        defaultValues: {
            nome: "",
            idEstado: 0
        }
    });

    const onSubmit = (dados: any) => {
        console.log(dados)

        api.post("/cidade", { nome: dados.nome, estado_id: dados.idEstado }).then(() => {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
            //@ts-ignore
            navigate("ListaCid")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao realizar cadastro!!")
        })
    }

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre uma nova cidade</Text>

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
            name="idEstado"
            render={({ field }) => {
                return <View
                    style={{
                        borderRadius: 5,
                        borderWidth: 2,
                        width: 300,
                        borderColor: colors.purple,
                        borderStyle: 'solid',
                        marginTop: 5,
                        backgroundColor: colors.white,

                    }}>

                    < Picker
                        selectedValue={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        style={{ borderWidth: 1, borderColor: colors.darkBlue, borderStyle: 'solid' }}
                    >
                        <Picker.Item label="Escolha o Estado" value='0' />
                        {
                            estados.map((estado) => {
                                return <Picker.Item key={estado.id_Estado} label={estado.nome} value={estado.id_Estado} />;
                            })
                        }
                    </Picker>
                </View>
            }}
        />

        < Button
            style={styles.buttonSave}
            mode="contained"
            icon="content-save"
            onPress={
                handleSubmit(onSubmit)
            } >
            SALVAR
        </Button >
    </View >
}