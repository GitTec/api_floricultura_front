import * as React from 'react';
import { ActivityIndicator, Platform, View, StyleSheet } from 'react-native';
import { Paragraph, Portal, Dialog } from 'react-native-paper';

const isIOS = Platform.OS === 'ios';

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