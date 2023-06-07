import { createStackNavigator } from '@react-navigation/stack';
import CadastroCategoria from '../views/Categoria/cadastroCategorias/cadastroCat';
import ListaCategoria from '../views/Categoria/listagemCategorias/listaCat';
import CadastroCidades from '../views/Cidade/cadastroCidades/cadastroCit';
import ListaCidades from '../views/Cidade/listagemCidades/listaCity';
import CadastroEstado from '../views/Estado/cadastroEstados/cadastroUf';
import ListaEstados from '../views/Estado/listagemEstados/listaUf';
import CadastroProduto from '../views/Produto/cadastroProdutos/cadastroProd';
import ListaProdutos from '../views/Produto/listagemProdutos/listaProduct';
import CadastroUsuario from '../views/Usuario/cadastroUsuarios/cadastroUser';
import ListaUsuario from '../views/Usuario/listagemUsuarios/listaUser';
import Menu from '../views/menu';

const { Navigator, Screen } = createStackNavigator();
export function RoutesProtected() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}>

            <Screen
                name="Menu"
                component={Menu}
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
    );
}