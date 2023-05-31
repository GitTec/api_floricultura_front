import { useState, useEffect } from "react";
import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"
import { styles } from "./listaProduct.style";
import api from "../../../services/api.floricultura";
import { IProduto } from "../../../interfaces/produtos.interface";
import { useNavigation } from "@react-navigation/core";

export default function ListaProdutos() {

    const { navigate } = useNavigation();
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {
        api.get("/produto").then((dados) => {
            setProdutos(dados.data);
        })
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

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Preço</DataTable.Title>
                    <DataTable.Title>Qtd_Estoque</DataTable.Title>
                    <DataTable.Title>Categoria</DataTable.Title>
                </DataTable.Header>

                {
                    produtos.map((produto) => {
                        return <DataTable.Row key={produto.id}>
                            <DataTable.Cell>{produto.id}</DataTable.Cell>
                            <DataTable.Cell>{produto.nome_produto}</DataTable.Cell>
                            <DataTable.Cell>R${produto.preco}</DataTable.Cell>
                            <DataTable.Cell>{produto.qtd_estoque}</DataTable.Cell>
                            <DataTable.Cell>{produto.categoria_nome}</DataTable.Cell>
                            
                        </DataTable.Row>
                    })
                }
            </DataTable>
        </View>
    )
}
