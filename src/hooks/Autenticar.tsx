import { createContext, useContext, useState } from "react";
import { IUsuario } from "../interfaces/usuarios.interface";
import ChildrenProvider from "./ChildrenProvider";
import api from "../services/api.floricultura";
import { Alert } from "react-native";

interface AuthContextData {
    usuario: IUsuario | undefined;
    token: string;
    fazerLogin: (login: string, senha: string) => void;
    fazerLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: ChildrenProvider) => {
    const [usuario, setUsuario] = useState<IUsuario>()
    const [token, setToken] = useState<string>("")

    function fazerLogin(login: string, senha: string) {
        api.post("/usuario/login", { login, senha }).then(resp => {
            setUsuario(resp.data.user)
            setToken(resp.data.token)
            api.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`
        }).catch(() => {
            Alert.alert("Ops...", "Verifique login e senha!!")
        })
    }

    function fazerLogout() {
        setUsuario(undefined)
        setToken("")
        api.defaults.headers.common.Authorization = ""
    }

    return (
        < AuthContext.Provider value={{
            usuario,
            token,
            fazerLogin,
            fazerLogout
        }}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuth = () => useContext(AuthContext)