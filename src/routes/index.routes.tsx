import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login/login';
import Categoria from '../views/categorias/category';
import ListaCategoria from '../views/Categoria/listagemCategorias/listaCat';
import ListaUsuario from '../views/Usuario/listagemUsuarios/listaUser';
import ListaProdutos from '../views/Produto/listagemProdutos/listaProduct';
import ListaCidades from '../views/Cidade/listagemCidades/listaCity';
import ListaEstados from '../views/Estado/listagemEstados/listaUf';
import CadastroCategoria from '../views/Categoria/cadastroCategorias/cadastroCat';
import CadastroProduto from '../views/Produto/cadastroProdutos/cadastroProd';
import CadastroUsuario from '../views/Usuario/cadastroUsuarios/cadastroUser';
import CadastroCidades from '../views/Cidade/cadastroCidades/cadastroCit';
import CadastroEstado from '../views/Estado/cadastroEstados/cadastroUf';

const { Navigator, Screen } = createStackNavigator();
export function Routes() {

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}>

                <Screen
                    name="Login"
                    component={Login}
                />

                <Screen
                    name="Categoria"
                    component={Categoria}
                />
                <Screen
                    name="ListaCat"
                    component={ListaCategoria}
                />
                <Screen
                    name="ListaProd"
                    component={ListaProdutos}
                />
                <Screen
                    name="ListaUser"
                    component={ListaUsuario}
                />
                <Screen
                    name="ListaCid"
                    component={ListaCidades}
                />
                <Screen
                    name="ListaEst"
                    component={ListaEstados}
                />
                <Screen
                    name="CadastroCat"
                    component={CadastroCategoria}
                />
                <Screen
                    name="CadastroProd"
                    component={CadastroProduto}
                />
                <Screen
                    name="CadastroUser"
                    component={CadastroUsuario}
                />
                <Screen
                    name="CadastroCid"
                    component={CadastroCidades}
                />
                <Screen
                    name="CadastroEst"
                    component={CadastroEstado}
                />
            </Navigator>
        </NavigationContainer>
    );
}