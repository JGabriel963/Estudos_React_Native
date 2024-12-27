import { StackActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
    const navigation = useNavigation()

    // const handleHome = () => {
    //     navigation.dispatch(StackActions.popToTop())
    // }


    return (
        <View style={styles.container}>
            <Text>Contact</Text>
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