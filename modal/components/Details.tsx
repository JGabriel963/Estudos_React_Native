import { Button, StyleSheet, Text, View } from "react-native";

type DetailsProps = {
    closeModal: () => void;
}

export default function Details({ closeModal }: DetailsProps) {
    return (
        <View style={styles.container}>
            <Text>Welcom to React Native</Text>
            <Button title="Close Modal" onPress={closeModal} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});