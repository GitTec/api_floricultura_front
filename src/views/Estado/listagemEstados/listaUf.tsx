import { useState, useEffect } from "react";
import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"
import { styles } from "./listaUf.style";
import { IEstado } from "../../../interfaces/estados.interface";
import api from "../../../services/api.floricultura";
import { useNavigation } from "@react-navigation/native";

export default function ListaEstados() {

    const { navigate } = useNavigation();
    const [estados, setEstados] = useState<IEstado[]>([]);

    useEffect(() => {
        api.get("/uf").then((dados) => {
            setEstados(dados.data)
        })
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

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Sigla</DataTable.Title>
                </DataTable.Header>

                {
                    estados.map((estado) => {
                        return <DataTable.Row key={estado.id_Estado}>
                            <DataTable.Cell>{estado.id_Estado}</DataTable.Cell>
                            <DataTable.Cell>{estado.nome}</DataTable.Cell>
                            <DataTable.Cell>{estado.sigla}</DataTable.Cell>
                        </DataTable.Row>
                    })
                }

            </DataTable>
        </View>
    )
}