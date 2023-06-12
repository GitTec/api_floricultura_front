import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './src/routes/index.routes';
import { AppRegistry } from 'react-native';
import { expo } from './app.json';
import { LoadingProvider } from './src/hooks/Loading';
import { AuthProvider } from './src/hooks/Autenticar';

//Defino uma função App como componente principal da minha aplicação
export default function App() {
  return (
    //usado para garantir que o conteudo seja exibido em diferentes dispositivos e telas
    <SafeAreaView style={{
      flex: 1
    }}>

      <PaperProvider> 
        <LoadingProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </LoadingProvider>
      </PaperProvider>
    </SafeAreaView>
  );
}

AppRegistry.registerComponent(expo.name, () => App);

/*O AppRegistryéregisterComponent é usado para registrar um componente na aplicação,
 associando-o a um nome.
 Que no meu caso é App*/
