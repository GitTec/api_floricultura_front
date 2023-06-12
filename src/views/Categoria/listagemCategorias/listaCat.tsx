import { useState, useEffect } from "react";
import { Alert, View } from "react-native"
import { Button, DataTable, IconButton, Text } from "react-native-paper"
import { styles } from "./listaCat.style";
import { ICategoria } from "../../../interfaces/categorias.interface";
import api from "../../../services/api.floricultura";
import { useNavigation } from "@react-navigation/core";
import { useLoading } from "../../../hooks/Loading";

export default function ListaCategoria() {

    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    //Aqui defino um função para trazer as categorias cadastradas
    function carregarCategoria() {
        setCarregando(true);
        api.get("/categoria").then((dados) => {
            setCategorias(dados.data);
        }).finally(() => {
            setCarregando(false);
        })
    }

    //Aqui defino um função para excluir uma categoria cadastrada
    function excluirCategoria(id: number) {
        api.delete(`/categoria/${id}`).then((dados) => {
            Alert.alert("Sucesso", "Excluido com sucesso!")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao excluir categoria!")

        })
    }
    //Uso essa função para realizar o carregamento da categoria depois de deletada
    useEffect(() => {
        carregarCategoria();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.textLista}>Lista de Categorias</Text>

            <Button
                style={styles.botao}
                icon="gamepad-round-outline"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("CadastroCat")
                }}>
                Adicionar
            </Button>

            <Button
                style={styles.botaoAtualizar}
                icon="refresh"
                mode="contained"
                onPress={() => {
                    carregarCategoria();
                }}>
                Atualizar
            </Button>

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>EXCLUIR</DataTable.Title>
                    <DataTable.Title>EDITAR</DataTable.Title>
                </DataTable.Header>

                {
                    categorias.map((categoria) => {
                        return <DataTable.Row key={categoria.id_categoria}>
                            <DataTable.Cell>{categoria.id_categoria}</DataTable.Cell>
                            <DataTable.Cell>{categoria.nome}</DataTable.Cell>
                            <DataTable.Cell><IconButton icon="trash-can" iconColor="red" onPress={() => {
                                Alert.alert("Confirmação", "Deseja realmente excluir?",
                                    [{ text: "Não", style: "cancel" }, {
                                        text: "Sim", onPress: () => {
                                            excluirCategoria(categoria.id_categoria)
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