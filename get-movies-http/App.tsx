import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import api from './services/api';
import { ApiResponseMovies, Movies } from './types';
import { CardMovie } from './components/CardMovie';

export default function App() {
  const [movies, setMovies] = useState<Movies[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function getMovies() {
      const response: ApiResponseMovies = await api.get('r-api/?api=filmes')
      setMovies(response.data)

      setLoading(false)
    }

    getMovies()
  }, [])

  if (loading) {
    return (
      <View style={{
        flex: 1,
        marginTop: 42,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color="#121212" size={25} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.title}>Aprendendo a consumir</Text>
        <Text style={styles.textAPI}>
          APIs
        </Text>
      </View>

      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return (
            <CardMovie 
              nome={item.nome} 
              sinopse={item.sinopse} 
              foto={item.foto} 
              id={item.id} 
              key={item.id} 
            />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 42
  },
  titleHeader: {
    width: '100%',
    height: 45,
    borderColor: '#94a3b8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    gap: 4
  },
  title: {
   fontSize: 22,
   fontWeight: 'normal'
  },
  textAPI: {
    color: '#16a34a',
    fontWeight: 'bold',
    fontSize: 24
  }
});
