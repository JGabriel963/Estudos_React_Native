import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SlideComponent() {
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        minimumTrackTintColor="#000FFF"
        maximumTrackTintColor="#FF0000"
      />
      <Text>Valor: {value.toFixed(0)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});