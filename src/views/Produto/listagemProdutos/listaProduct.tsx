import { useState, useEffect } from "react";
import { Alert, View } from "react-native"
import { Button, DataTable, IconButton, Text } from "react-native-paper"
import { styles } from "./listaProduct.style";
import api from "../../../services/api.floricultura";
import { IProduto } from "../../../interfaces/produtos.interface";
import { useNavigation } from "@react-navigation/core";
import { useLoading } from "../../../hooks/Loading";

export default function ListaProdutos() {

    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    function carregarProduto() {
        setCarregando(true);
        api.get("/produto").then((dados) => {
            setProdutos(dados.data);
        }).finally(() => {
            setCarregando(false);
        })
    }

    function excluirProduto(id: number) {
        api.delete(`/produto/${id}`).then((dados) => {
            Alert.alert("Sucesso", "Excluido com sucesso!")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao excluir produto!")

        })
    }
    useEffect(() => {
        carregarProduto();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.textLista}>Lista de Produtos</Text>

            <Button
                style={styles.botao}
                icon="gamepad-round-outline"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("CadastroProd")
                }}>
                Adicionar
            </Button>

            <Button
                style={styles.botaoAtualizar}
                icon="refresh"
                mode="contained"
                onPress={() => {
                    carregarProduto();
                }}>
                Atualizar
            </Button>

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Preço</DataTable.Title>
                    <DataTable.Title>Qtd_Estoque</DataTable.Title>
                    <DataTable.Title>Categoria</DataTable.Title>
                    <DataTable.Title>EXCLUIR</DataTable.Title>
                    <DataTable.Title>EDITAR</DataTable.Title>
                </DataTable.Header>

                {
                    produtos.map((produto) => {
                        return <DataTable.Row key={produto.id}>
                            <DataTable.Cell>{produto.id}</DataTable.Cell>
                            <DataTable.Cell>{produto.nome_produto}</DataTable.Cell>
                            <DataTable.Cell>R${produto.preco}</DataTable.Cell>
                            <DataTable.Cell>{produto.qtd_estoque}</DataTable.Cell>
                            <DataTable.Cell>{produto.categoria_nome}</DataTable.Cell>
                            <DataTable.Cell><IconButton icon="trash-can" iconColor="red" onPress={() => {
                                Alert.alert("Confirmação", "Deseja realmente excluir?",
                                    [{ text: "Não", style: "cancel" }, {
                                        text: "Sim", onPress: () => {
                                            excluirProduto(produto.id)
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
