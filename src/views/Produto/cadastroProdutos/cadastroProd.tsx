import { Button, Text, TextInput } from "react-native-paper";
import { Alert, View } from "react-native"
import { styles } from "./cadastroProd.styles"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api.floricultura";
import { Controller, useForm } from "react-hook-form";
import { colors } from "../../../constants/color";
import { Picker } from "@react-native-picker/picker";
import { ICategoria } from "../../../interfaces/categorias.interface";

export default function CadastroProduto() {

    const { navigate } = useNavigation();
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(() => {
        api.get("/categoria").then((dados) => {
            setCategorias(dados.data)
        })
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nomeProduto: "",
            preco: 0,
            qtdEstoque: 0,
            idCategoria: 0
        }
    });

    const onSubmit = (dados: any) => {
        console.log(dados);

        api.post("/produto", { nome: dados.nomeProduto, preco: dados.preco, qtd_estoque: dados.qtdEstoque, categoria_id: dados.idCategoria }).then(() => {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
            //@ts-ignore
            navigate("ListaProd")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao realizar cadastro!!")
        })
    }

    return <View style={styles.container}>

        <Text style={styles.text}>Cadastre um novo Produto</Text>

        <Controller
            control={control}
            name="nomeProduto"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    placeholder="Informe o nome do produto"
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="preco"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    keyboardType="number-pad"
                    placeholder="Informe o valor do produto"
                    value={String(field.value)}
                    onChangeText={(value) => {
                        field.onChange(+value);
                    }}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="qtdEstoque"
            render={({ field }) => {
                return <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Informe a quantidade em estoque"
                    value={String(field.value)}
                    onChangeText={(value) => {
                        field.onChange(+value);
                    }}
                    onBlur={field.onBlur}
                />
            }}
        />

        <Controller
            control={control}
            name="idCategoria"
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

                    <Picker
                        selectedValue={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        style={{ borderWidth: 1, borderColor: colors.darkBlue, borderStyle: 'solid' }}
                    >
                        <Picker.Item label="Escolha a Categoria" value='0' />
                        {
                            categorias.map((categoria) => {
                                return <Picker.Item key={categoria.id_categoria} label={categoria.nome} value={categoria.id_categoria} />;
                            })
                        }
                    </Picker>
                </View>
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