import { createContext, useContext, useState } from "react";
import { IUsuario } from "../interfaces/usuarios.interface";
import ChildrenProvider from "./ChildrenProvider";
import api from "../services/api.floricultura";
import { Alert } from "react-native";

//Defino uma interface com os parametros do AuthContextData
interface AuthContextData {
    usuario: IUsuario | undefined;
    token: string;
    fazerLogin: (login: string, senha: string) => void;
    fazerLogout: () => void;
}

/*crio uma variavel que recebe uma função createContext, onde a mesmo esta sendo passado um objeto vazio como argumento, 
mas que está sendo forçado a ser do tipo AuthContextData usando a sintaxe as*/
export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: ChildrenProvider) => {   //desestruturação da propriedade children
    const [usuario, setUsuario] = useState<IUsuario>()
    const [token, setToken] = useState<string>("")

/*criacao da funcao de login que recebe como parametro login e senha
que é responsavel por fazer a requisição HTTP POST, enviando login e senha como dados*/
    function fazerLogin(login: string, senha: string) {
        api.post("/usuario/login", { login, senha }).then(resp => {
            setUsuario(resp.data.user)
            setToken(resp.data.token)   //token de autenticacao
            api.defaults.headers.common.Authorization = `Bearer ${resp.data.token}` // definido o valor do cabeçalho "Authorization" como Bearer 
        }).catch(() => {
            Alert.alert("Ops...", "Verifique login e senha!!")
        })
    }

    function fazerLogout() {
        setUsuario(undefined)
        setToken("")
        api.defaults.headers.common.Authorization = "" // definido o valor do cabeçalho "Authorization" como vazio 
    }

    return (
        //Envolvo os componentes filho definidos no children
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

//exporto uma variavel que retorna um contexto de autenticação AuthContext
export const useAuth = () => useContext(AuthContext)