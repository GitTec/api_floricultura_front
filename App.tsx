import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './src/routes/index.routes';
import { AppRegistry } from 'react-native';
import { expo } from './app.json';
import { LoadingProvider } from './src/hooks/Loading';
import { AuthProvider } from './src/hooks/Autenticar';

export default function App() {
  return (
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
