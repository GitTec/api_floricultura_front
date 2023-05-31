import { useState, useEffect } from "react";
import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"
import { styles } from "./listaCat.style";
import { ICategoria } from "../../../interfaces/categorias.interface";
import api from "../../../services/api.floricultura";
import { useNavigation } from "@react-navigation/core";

export default function ListaCategoria() {

    const { navigate } = useNavigation();
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(() => {
        api.get("/categoria").then((dados) => {
            setCategorias(dados.data);
        })
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

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                </DataTable.Header>

                {
                    categorias.map((categoria) => {
                        return <DataTable.Row key={categoria.id_categoria}>
                            <DataTable.Cell>{categoria.id_categoria}</DataTable.Cell>
                            <DataTable.Cell>{categoria.nome}</DataTable.Cell>
                        </DataTable.Row>
                    })
                }

            </DataTable>
        </View>
    )
}