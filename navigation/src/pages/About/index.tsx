import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About() {
    const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: route.params?.name === '' ? "Sobre" : route.params?.name,
    //     })
    // }, [])



    return (
        <View style={styles.container}>
            <Text>About</Text>
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