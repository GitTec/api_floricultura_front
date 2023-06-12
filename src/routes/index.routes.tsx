import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/Autenticar';
import { RoutesProtected } from './protected.routes';
import { RoutesPublic } from './public.routes';

export function Routes() {

    const { usuario } = useAuth();  //desestruturando o usuario do useAuth
    return (
        /*? --> if : else*/
        <NavigationContainer>
            {
                usuario ? <RoutesProtected /> : <RoutesPublic />//se o usuario tiver autenticado entra nas protegidas, senao nas publicas
            }
        </NavigationContainer>
    );
}