import { Link, router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home() {

    function handleNavigate() {
        router.replace('/dashboard')
    }


    return (
        <View style={styles.container}>
            <Text>
                Página Home 
            </Text>
            <Link href={"/profile"}>
                Ir par tela Profile
            </Link>
            <Link href={"/user/1327"}>
                Ir par tela User
            </Link>
            <Link href={"/dashboard"}>
                Ir para o Painel
            </Link>
            <Button onPress={handleNavigate} title='Ir par o Painel' />
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