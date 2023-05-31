import React from "react";
import { Image, Text, View } from "react-native"
import { Avatar, Button, TextInput } from 'react-native-paper';
import logoFloricultura from "../../assets/logoFloricultura.png";
import { styles } from "./login.styles";
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import api from "../../services/api.floricultura";
import { colors } from "../../constants/color";
import { StatusBar } from "expo-status-bar";

export default function Login() {
    const { navigate } = useNavigation();
    const [apiIsRunning, setApiIsRunning] = useState(false);

    useEffect(() => {
        api.get("/").then(data => {
            if (data.status === 200) {
                setApiIsRunning(true);
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <Image
                style={styles.logo}
                source={logoFloricultura}
            />
            <Text style={styles.textLogin}>Bem vindo a FloricuSauro</Text>

            <TextInput
                style={styles.input}
                label="Digite seu Email"
                right={<TextInput.Icon icon="email" />}
            />

            <TextInput
                style={styles.input}
                label="Digite sua Senha"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />

            <Button
                style={styles.botao}
                icon="login"
                mode="contained"
                onPress={() => {
                    //@ts-ignore
                    navigate("Categoria")
                }}>
                Acessar
            </Button>

            <Avatar.Icon
                size={24}
                icon="checkbox-blank-circle"
                color={apiIsRunning ? colors.green : colors.red}
            />

            <Text>
                {apiIsRunning ? "CONECTADO" : "DESCONECTADO"}
            </Text>
        </View>
    );
}