import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Details from './components/Details';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(!openModal);
  }


  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={showModal} />

      <Modal visible={openModal} animationType='slide'>
        <Details closeModal={showModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
