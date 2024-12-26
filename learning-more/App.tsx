import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={(value) => setStatus(value)}
        trackColor={{ false: '#FF0000', true: '#00FF00' }}
        thumbColor={status ? '#121212' : '#f4f4f4'}
      />

      <Text>{status ? 'Ligado' : 'Desativado'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'flex-start',
  }
});