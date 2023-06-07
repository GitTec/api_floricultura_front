import { useState, useEffect } from "react";
import { ICidade } from "../../../interfaces/cidades.interface";
import api from "../../../services/api.floricultura";
import { Alert, View } from "react-native"
import { Button, DataTable, IconButton, Text } from "react-native-paper"
import { styles } from "./listaCity.style";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "../../../hooks/Loading";

export default function ListaCidades() {

    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const [cidades, setCidades] = useState<ICidade[]>([]);

    function carregarCidade() {
        setCarregando(true);
        api.get("/cidade").then((dados) => {
            setCidades(dados.data);
        }).finally(() => {
            setCarregando(false);
        })
    }

    function excluirCidade(id: number) {
        api.delete(`/cidade/${id}`).then((dados) => {
            Alert.alert("Sucesso", "Excluido com sucesso!")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao excluir cidade!")
        })
    }

    useEffect(() => {
        carregarCidade();
    }, [])

    return (

        <View style={styles.container}>
            <Text style={styles.textLista}>Lista de Cidades</Text>

            <Button
                style={styles.botao}
                icon="gamepad-round-outline"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("CadastroCid")
                }}>
                Adicionar
            </Button>

            <Button
                style={styles.botaoAtualizar}
                icon="refresh"
                mode="contained"
                onPress={() => {
                    carregarCidade();
                }}>
                Atualizar
            </Button>

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>UF</DataTable.Title>
                    <DataTable.Title>EXCLUIR</DataTable.Title>
                    <DataTable.Title>EDITAR</DataTable.Title>
                </DataTable.Header>

                {
                    cidades.map((cidade) => {
                        return <DataTable.Row key={cidade.id}>
                            <DataTable.Cell>{cidade.id}</DataTable.Cell>
                            <DataTable.Cell>{cidade.nome}</DataTable.Cell>
                            <DataTable.Cell>{cidade.sigla_estado}</DataTable.Cell>
                            <DataTable.Cell><IconButton icon="trash-can" iconColor="red" onPress={() => {
                                Alert.alert("Confirmação", "Deseja realmente excluir?",
                                    [{ text: "Não", style: "cancel" }, {
                                        text: "Sim", onPress: () => {
                                            excluirCidade(+cidade.id);
                                        }
                                    }])
                            }} /></DataTable.Cell>
                            <DataTable.Cell><IconButton icon="square-edit-outline" iconColor="blue"/></DataTable.Cell>
                        </DataTable.Row>
                    })
                }
            </DataTable>
        </View>
    )

}