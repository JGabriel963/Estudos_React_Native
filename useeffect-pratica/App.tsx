import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  const inputRef = useRef<TextInput>(null);

  async function saveName() {
    await AsyncStorage.setItem('@name', input);
    setName(input);
    setInput('');
  }

  useEffect(() => {
    async function getName() {
      await AsyncStorage.getItem('@name').then((value) => {
        setName(value || '');
      });
    }

    inputRef.current?.focus();
    getName();
  }, []);

  // const  qtdName = name.length;
  const qtdName = useMemo(() => name.length, [name]);

  return (
    <View style={styles.container}>
      <Text>Opa! Aprendendo a usar o useEffect! 🫡🎉</Text>

      <View style={styles.inputField}>
        <TextInput
          value={input}
          placeholder='Digite seu nome'
          onChangeText={(value) => setInput(value)}
          style={styles.nameInput}
          ref={inputRef}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={saveName}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>

      {name && <Text style={styles.hello}>Olá, {name}!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 8,
    width: 250,
    height: 40,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    height: 40,
    width: 40,
    color: '#fff',
    textAlign: 'center',
  },
  hello: {
    marginTop: 20,
    fontSize: 18,
  }
});
