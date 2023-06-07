import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/Autenticar';
import { RoutesProtected } from './protected.routes';
import { RoutesPublic } from './public.routes';

export function Routes() {

    const { usuario } = useAuth();

    return (
        /*? --> if : else*/
        <NavigationContainer>
            {
                usuario ? <RoutesProtected /> : <RoutesPublic />
            }
        </NavigationContainer>
    );
}