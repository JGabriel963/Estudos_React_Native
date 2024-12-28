import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const navigation = useNavigation()

    function goToAbout() {
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para detalhes" onPress={goToAbout} />
            <Button title="Menu" onPress={() => navigation.openDrawer()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    }
})