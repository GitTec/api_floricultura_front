import { useState, useEffect } from "react";
import { ICidade } from "../../../interfaces/cidades.interface";
import api from "../../../services/api.floricultura";
import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"
import { styles } from "./listaCity.style";
import { useNavigation } from "@react-navigation/native";

export default function ListaCidades() {

    const {navigate} = useNavigation();
    const [cidades, setCidades] = useState<ICidade[]>([]);

    useEffect(() => {
        api.get("/cidade").then((dados) => {
            setCidades(dados.data);
        })
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

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>UF</DataTable.Title>
                </DataTable.Header>

                {
                    cidades.map((cidade) => {
                        return <DataTable.Row key={cidade.id}>
                            <DataTable.Cell>{cidade.id}</DataTable.Cell>
                            <DataTable.Cell>{cidade.nome}</DataTable.Cell>
                            <DataTable.Cell>{cidade.sigla_estado}</DataTable.Cell>
                        </DataTable.Row>
                    })
                }
            </DataTable>
        </View>
    )

}