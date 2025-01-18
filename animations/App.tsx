import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const widthAnimated = useRef(new Animated.Value(150)).current;
  const heightAnimated = useRef(new Animated.Value(50)).current;
  const opacityAnimated = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animated.timing(widthAnimated, {
    //   toValue: 300,
    //   duration: 2000,
    //   useNativeDriver: false
    // }).start();

  // Em sequência
  //   Animated.sequence([Animated.timing(widthAnimated, {
  //     toValue: 300,
  //     duration: 2000,
  //     useNativeDriver: false
  //   }),
  //   Animated.timing(heightAnimated, {
  //     toValue: 200,
  //     duration: 2000,
  //     useNativeDriver: false
  //   }),
  //   Animated.timing(opacityAnimated, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: false
  //   })
  // ])

  Animated.parallel([
    Animated.timing(widthAnimated, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }),
    Animated.timing(heightAnimated, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false
    })
  ])

  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: widthAnimated,
          height: heightAnimated,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          opacity: opacityAnimated
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: "#fff" }}>
          Carregando...
        </Text>
      </Animated.View>
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
});
