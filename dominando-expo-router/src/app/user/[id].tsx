import { Link, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function User() {
    const {id} = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text>
                Página Usuário com ID: {id} 
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