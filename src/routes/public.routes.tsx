import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';

const { Navigator, Screen } = createStackNavigator();
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