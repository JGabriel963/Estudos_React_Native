import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para sobre" onPress={() => navigation.navigate('About')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})