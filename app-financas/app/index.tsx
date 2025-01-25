import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Balance from './components/Balance'


export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='João G.' />
            <Balance balance='15.000,00' expense='365,00' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})