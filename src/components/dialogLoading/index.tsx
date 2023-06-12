import * as React from 'react';
import { ActivityIndicator, Platform, View, StyleSheet } from 'react-native';
import { Paragraph, Portal, Dialog } from 'react-native-paper';

/*criei uma constante que recebe Platform.OS (retorna uma string indicando o sistema operacional 
em que o código está sendo executado.)*/
const isIOS = Platform.OS === 'ios';    

/*crio uma constante DialogWithLoadingIndicator com a propriedade visible para renderizar um dialogo de carregamento se o visible for true,
ou seja é uma função que irá renderizar o carregamento quando visible */
const DialogWithLoadingIndicator = ({
    visible
}: {
    visible: boolean;
}) => (
    <Portal>
        <Dialog visible={visible}>
            <Dialog.Title>Aguarde</Dialog.Title>
            <Dialog.Content>
                <View style={styles.flexing}>
                    <ActivityIndicator
                        size={isIOS ? 'large' : 48}
                        style={styles.marginRight}
                    />
                    <Paragraph>Carregando.....</Paragraph>
                </View>
            </Dialog.Content>
        </Dialog>
    </Portal>
);

const styles = StyleSheet.create({
    flexing: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginRight: {
        marginRight: 16,
    },
});

export default DialogWithLoadingIndicator;