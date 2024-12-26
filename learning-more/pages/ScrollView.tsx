import { StyleSheet, View, ScrollView } from 'react-native';

export default function TEXT() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box2}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    width: 150,
    height: 250,
    backgroundColor: 'red',
  },
  box2: {
    width: 150,
    height: 250,
    backgroundColor: 'blue',
  },
  box3: {
    width: 150,
    height: 250,
    backgroundColor: 'green',
  },
  box4: {
    width: 150,
    height: 250,
    backgroundColor: 'yellow',
  }
});
