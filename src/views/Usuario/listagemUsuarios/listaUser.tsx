import { useState, useEffect } from "react";
import { Alert, View } from "react-native"
import { Button, DataTable, IconButton, Text } from "react-native-paper"
import { styles } from "./listaUser.style";
import api from "../../../services/api.floricultura";
import { IUsuario } from "../../../interfaces/usuarios.interface";
import { useNavigation } from "@react-navigation/core";
import { useLoading } from "../../../hooks/Loading";

export default function ListaUsuario() {

    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    function carregarUsuario() {
        setCarregando(true);
        api.get("/usuario").then((dados) => {
            setUsuarios(dados.data);
        }).finally(() => {
            setCarregando(false);
        })
    }

    function excluirUsuario(id: number) {
        api.delete(`/usuario/${id}`).then((dados) => {
            Alert.alert("Sucesso", "Excluido com sucesso!")
        }).catch((err) => {
            Alert.alert("Ops...", "Erro ao excluir usuario!")

        })
    }
    useEffect(() => {
        carregarUsuario();
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

            <Button
                style={styles.botaoAtualizar}
                icon="refresh"
                mode="contained"
                onPress={() => {
                    carregarUsuario();
                }}>
                Atualizar
            </Button>

            <DataTable style={styles.tabela}>
                <DataTable.Header>
                    <DataTable.Title>Cód</DataTable.Title>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title>Login</DataTable.Title>
                    <DataTable.Title>EXCLUIR</DataTable.Title>
                    <DataTable.Title>EDITAR</DataTable.Title>
                </DataTable.Header>

                {
                    usuarios.map((usuario) => {
                        return <DataTable.Row key={usuario.id_usuario}>
                            <DataTable.Cell>{usuario.id_usuario}</DataTable.Cell>
                            <DataTable.Cell>{usuario.nome}</DataTable.Cell>
                            <DataTable.Cell>{usuario.email}</DataTable.Cell>
                            <DataTable.Cell>{usuario.login}</DataTable.Cell>
                            <DataTable.Cell><IconButton icon="trash-can" iconColor="red" onPress={() => {
                                Alert.alert("Confirmação", "Deseja realmente excluir?",
                                    [{ text: "Não", style: "cancel" }, {
                                        text: "Sim", onPress: () => {
                                            excluirUsuario(usuario.id_usuario)
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
