import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";

export default function Welcome() {
    const router = useRouter();

    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* Welcome image */}
                <Image style={styles.welcomeImage} resizeMode="contain" source={require("../assets/images/welcome.png")} />

                {/* Title */}
                <View style={{gap: 20}}>
                    <Text style={styles.title}>LinkUp!</Text>
                    <Text style={styles.punchline}>Where every thought finds a home and every image teils a story</Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Button 
                        title="Getting Sarted"
                        buttonStyle={{marginHorizontal: wp(3)}}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: "center",
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: "center",
        fontWeight: '800'
    },
    punchline: {
        textAlign: "center",
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    },
    footer: {

    }
})