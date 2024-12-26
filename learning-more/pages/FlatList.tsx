import { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import { Post } from '../components/Post';


export default function App() {
const [feed, setFeed] = useState([
  {id: '1', title: 'Post 1'},
  {id: '2', title: 'Post 2'},
  {id: '3', title: 'Post 3'},
  {id: '4', title: 'Post 4'},
  {id: '5', title: 'Post 5'},
  {id: '6', title: 'Post 6'},
  {id: '7', title: 'Post 7'},
  {id: '8', title: 'Post 8'},
  {id: '9', title: 'Post 9'},
  {id: '10', title: 'Post 10'},
]);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post id={item.id} title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});
