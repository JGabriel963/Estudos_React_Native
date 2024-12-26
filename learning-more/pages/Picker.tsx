import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Pickerr() {
  const [anime, setAnime] = useState(1)
  const [animes, setAnimes] = useState([
    {id: 1, name: 'Naruto', episodes: 220},
    {id: 2, name: 'Bleach', episodes: 366},
    {id: 3, name: 'One Piece', episodes: 1000},
  ])



  return (
    <View style={styles.container}>
      <Picker
        selectedValue={anime}
        onValueChange={(value, index) => setAnime(value)}
      >
        {animes.map((anime) => (
          <Picker.Item key={anime.id} label={anime.name} value={anime.id} />
        ))}
      </Picker>
      <Text style={styles.text}> {animes[anime].name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  text: {
    marginTop: 20,
    fontSize: 25,
  }
});
