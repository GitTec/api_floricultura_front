import { useState, useEffect } from "react";
import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"
import { styles } from "./listaUser.style";
import api from "../../../services/api.floricultura";
import { IUsuario } from "../../../interfaces/usuarios.interface";
import { useNavigation } from "@react-navigation/core";

export default function ListaUsuario() {

    const { navigate } = useNavigation();
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    useEffect(() => {
        api.get("/usuario").then((dados) => {
            setUsuarios(dados.data);
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.textLista}>Lista de Usuários</Text>

            <Button
                style={styles.botao}
                icon="gamepad-round-outline"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("CadastroUser")
                }}>
                Adicionar
            </Button>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title>Login</DataTable.Title>
                </DataTable.Header>

                {
                    usuarios.map((usuario) => {
                        return <DataTable.Row key={usuario.id_usuario}>
                            <DataTable.Cell>{usuario.id_usuario}</DataTable.Cell>
                            <DataTable.Cell>{usuario.nome}</DataTable.Cell>
                            <DataTable.Cell>{usuario.email}</DataTable.Cell>
                            <DataTable.Cell>{usuario.login}</DataTable.Cell>
                        </DataTable.Row>
                    })
                }
            </DataTable>
        </View>
    )
}
