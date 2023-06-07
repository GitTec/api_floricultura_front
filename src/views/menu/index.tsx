import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { Image } from "react-native"
import logoFloricultura from "../../assets/logoFloricultura.png";
import { styles } from "./index.style";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../../constants/color";
import { useAuth } from "../../hooks/Autenticar";

export default function Menu() {
    const { navigate } = useNavigation();
    const { usuario, fazerLogout } = useAuth();

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={logoFloricultura}
            />
            <Text style={styles.textLogin}>{usuario?.nome}</Text>
            <Button
                mode="text"
                onPress={() => {
                    fazerLogout();
                }}
            >
                SAIR
            </Button>

            <Text style={styles.textLogin}>Escolha a lista que deseja</Text>

            <Button
                style={styles.botao}
                icon="format-list-checkbox"
                mode="contained"
                buttonColor={colors.darkGreen}
                onPress={() => {
                    //@ts-ignore
                    navigate("ListaCat")
                }}>
                Categorias
            </Button>

            <Button
                style={styles.botao}
                icon="pine-tree"
                mode="contained"
                buttonColor={colors.darkGreen}
                onPress={() => {
                    //@ts-ignore
                    navigate("ListaProd")
                }}>
                Produtos
            </Button>

            <Button
                style={styles.botao}
                icon="account"
                mode="contained"
                buttonColor={colors.darkGreen}
                onPress={() => {
                    //@ts-ignore
                    navigate("ListaUser")
                }}>
                Usuários
            </Button>

            <Button
                style={styles.botao}
                icon="map"
                mode="contained"
                buttonColor={colors.darkGreen}
                onPress={() => {
                    //@ts-ignore
                    navigate("ListaCid")
                }}>
                Cidades
            </Button>

            <Button
                style={styles.botao}
                icon="map-marker"
                mode="contained"
                buttonColor={colors.darkGreen}
                onPress={() => {
                    //@ts-ignore
                    navigate("ListaEst")
                }}>
                Estados
            </Button>
        </View>
    )
}