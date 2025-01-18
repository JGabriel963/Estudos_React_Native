import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export function BetterOption() {
    useEffect(() => {
        console.log("MONTADO")
    }, [])

    return (
        <View>
            <View style={styles.container}>
                <Text>
                    BetterOption
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1f2937',
    }
})