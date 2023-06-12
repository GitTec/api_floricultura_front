import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';

//defino essa constante para navegação de telas
const { Navigator, Screen } = createStackNavigator();

//crio uma função para definir apenas as rotas publicas
export function RoutesPublic() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}>

            <Screen
                name="Login"
                component={Login}
            />
        </Navigator>
    );
}