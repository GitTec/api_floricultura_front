import { createContext, useContext, useState } from "react";
import DialogWithLoadingIndicator from "../components/dialogLoading";
import ChildrenProvider from "./ChildrenProvider";

interface LoadingContextData {
    carregando: boolean;
    setCarregando: (value: boolean) => void;
}

export const LoadingContext = createContext({} as LoadingContextData);

export const LoadingProvider = ({ children }: ChildrenProvider) => {
    const [carregando, setCarregando] = useState<boolean>(false);
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