import { Text, View, StyleSheet } from "react-native";

type PostProps = {
    id: string;
    title: string;
}

export function Post(props: PostProps) {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'lightblue',
        marginBottom: 10,        
        padding: 10,
        borderRadius: 5,
    }
});