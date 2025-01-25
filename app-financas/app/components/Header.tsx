import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({ name }: { name: string }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
                    <Feather name="user" size={27} style={{ color: '#fff' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})