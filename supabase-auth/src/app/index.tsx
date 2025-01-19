import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from '../../constants/Colors'


export default function Index() {
 

  return (
    <View style={styels.container}>
      <ActivityIndicator size={44} color={colors.green} />
    </View>
  );
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
