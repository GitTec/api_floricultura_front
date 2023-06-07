import { useState, useEffect } from "react";
import { Alert, View } from "react-native"
import { Button, DataTable, IconButton, Text } from "react-native-paper"
import { styles } from "./listaUf.style";
import { IEstado } from "../../../interfaces/estados.interface";
import api from "../../../services/api.floricultura";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "../../../hooks/Loading";

export default function ListaEstados() {

    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const [estados, setEstados] = useState<IEstado[]>([]);

    function carregarEstado() {
        setCarregando(true);
        api.get("/uf").then((dados) => {
            setEstados(dados.data);
        }).finally(() => {
            setCarregando(false);
        })
    }

    function excluirEstado(id: number) {
        api.delete(`/uf/${id}`).then((dados) => {
            Alert.alert("Sucesso", "Excluido com sucesso!")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao excluir estado!")

        })
    }
    useEffect(() => {
        carregarEstado();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.textLista}>Lista de Estados</Text>

            <Button
                style={styles.botao}
                icon="gamepad-round-outline"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("CadastroEst")
                }}>
                Adicionar
            </Button>

            <Button
                style={styles.botaoAtualizar}
                icon="refresh"
                mode="contained"
                onPress={() => {
                    carregarEstado();
                }}>
                Atualizar
            </Button>

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Sigla</DataTable.Title>
                    <DataTable.Title>EXCLUIR</DataTable.Title>
                    <DataTable.Title>EDITAR</DataTable.Title>
                </DataTable.Header>

                {
                    estados.map((estado) => {
                        return <DataTable.Row key={estado.id_Estado}>
                            <DataTable.Cell>{estado.id_Estado}</DataTable.Cell>
                            <DataTable.Cell>{estado.nome}</DataTable.Cell>
                            <DataTable.Cell>{estado.sigla}</DataTable.Cell>
                            <DataTable.Cell><IconButton icon="trash-can" iconColor="red" onPress={() => {
                                Alert.alert("Confirmação", "Deseja realmente excluir?",
                                    [{ text: "Não", style: "cancel" }, {
                                        text: "Sim", onPress: () => {
                                            excluirEstado(estado.id_Estado)
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