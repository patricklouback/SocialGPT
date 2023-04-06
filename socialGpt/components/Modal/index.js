import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native';

export function ModalComponent({ modalVisible, fechar }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View
                style={styles.container}>
                <TouchableOpacity style={styles.close} onPress={fechar}>
                    <Ionicons name='close-circle' size={35} color="#333333" />
                </TouchableOpacity>
                <Text style={styles.text}>Bem-vindo ao SocialGpt! </Text>
                <Text style={styles.text}>O objetivo deste aplicativo é gerar textos de forma automatizada, utilizando a API do ChatGPT da OpenAI.</Text>
                <Text style={styles.text}>Para saber mais sobre como utilizar o aplicativo, siga o passo a passo descrito no arquivo README disponível no nosso repositório no GitHub: </Text>
                <TouchableOpacity style={styles.github} onPress={() => Linking.openURL('https://github.com/patricklouback/SocialGPT')}>
                    <Ionicons name='logo-github' size={55} color="#333333" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 5,
        elevation: 5
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Inter',
        color: '#333',
        marginBottom: 10
    },
    github: {
        position: 'absolute',
        bottom: 40,
        right: '50%'
    }
});

export default styles;



// centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
