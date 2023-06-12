import { createContext, useContext, useState } from "react";
import DialogWithLoadingIndicator from "../components/dialogLoading";
import ChildrenProvider from "./ChildrenProvider";

////Defino uma interface com os parametros do LoadingContextData
interface LoadingContextData {
    carregando: boolean;
    setCarregando: (value: boolean) => void;
}

//crio uma variavel LoadingContext que recebe um objeto vazio, sendo obrigado a ser do tipo LoadingContextData
export const LoadingContext = createContext({} as LoadingContextData);


export const LoadingProvider = ({ children }: ChildrenProvider) => {    //desestruturação da propriedade children
    const [carregando, setCarregando] = useState<boolean>(false);
    /*A partir daqui recebo os parametros de carregamento definidos acima
    verifico o meu dialogg onde passo o visible como carregando
    */
    return (
        < LoadingContext.Provider value={{
            carregando,
            setCarregando
        }}>
            <DialogWithLoadingIndicator visible={carregando} /> 
            {children}
        </LoadingContext.Provider >
    )
}

export const useLoading = () => useContext(LoadingContext)