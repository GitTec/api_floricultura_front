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
import { useLoading } from "../../hooks/Loading";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/Autenticar";

export default function Login() {

    const { setCarregando } = useLoading();
    const { fazerLogin } = useAuth();
    const { navigate } = useNavigation();
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
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
            <StatusBar hidden />
            <Image
                style={styles.logo}
                source={logoFloricultura}
            />
            <Text style={styles.textLogin}>Bem vindo a FloricuSauro</Text>

            <TextInput
                style={styles.input}
                label="Informe seu login"
                value={login}
                onChangeText={value => setLogin(value)}
                right={<TextInput.Icon icon="email" />}
            />

            <TextInput
                style={styles.input}
                label="Informe sua Senha"
                value={senha}
                onChangeText={value => setSenha(value)}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />

            <Button
                style={styles.botao}
                icon="login"
                mode="contained"
                onPress={() => {
                    fazerLogin(login, senha)
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