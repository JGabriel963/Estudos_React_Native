import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>
                Página Home 
            </Text>
            <Link href={"/"}>
                Ir para página inicial
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})