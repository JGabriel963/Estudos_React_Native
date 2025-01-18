import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BetterOption } from './components/BetterOption';
import { useState } from 'react';

export default function App() {
  const [openModal, setOpenModal] = useState(false)

  const setVisibleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./public/logo.png')}
      />

      <Text style={[styles.text, { fontSize: 28, fontWeight: 'bold', marginTop: 20}]}>
        Qual a melhor opção?
      </Text>

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Álcool (preço por litro):</Text>
        <TextInput style={styles.input} placeholder='4.60'/>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Gasolina (preço por litro):</Text>
        <TextInput style={styles.input} placeholder='4.60'/>
      </View>

      <TouchableOpacity onPress={setVisibleModal} activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonText}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Modal animationType='slide' transparent={true} visible={openModal}>
        <BetterOption />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  logo: {
    height: 60,
    width: 60
  },
  text: {
    color: "#fff"
  },
  inputArea: {
    width: '100%',
    marginTop: 20,
    gap: 8
  },
  inputLabel: {
    fontWeight: 'medium',
    color: "#fff",
    fontSize: 22
  },
  input: {
    backgroundColor: '#e5e7eb',
    height: 45,
    padding: 12,
    borderRadius: 12
  },
  button: {
    width: '100%',
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dc2626',
    borderRadius: 16
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: "#fff"
  }
});
