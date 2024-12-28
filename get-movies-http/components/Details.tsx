import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useEffect } from "react";

interface DetailsProps {
    title: string,
    sinopse: string
    close: () => void
}

export function Details({ title, sinopse, close }: DetailsProps) {
    
    useEffect(() => {
        console.log("COMPONENTE MONTADO!!")


        return () => console.log("COMPONENTE DESMONTADO")
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.5} onPress={close}>
                        <Feather
                        name="x-circle"
                        size={28}
                        color="#1e293b"
                        />
                    </TouchableOpacity>
                </View>

                <Text>
                    {title}
                </Text>
                <Text>
                    Sinopse:
                </Text>
                <Text>
                    {sinopse}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: '#cbd5e1',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 18
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})