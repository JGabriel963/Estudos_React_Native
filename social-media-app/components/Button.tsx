import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
    buttonStyle?: object;
    textStyle?: string,
    title: string;
    onPress: () => void;
    loading?: boolean;
    hasShadow?: boolean;
}

export default function Button({
    buttonStyle,
    textStyle,
    title,
    onPress = () => {},
    loading = false,
    hasShadow = false
}: ButtonProps) {

    const shadowStyle = {

    }

    return (
        <Pressable onPress={onPress} style={[sytle.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[sytle.text, textStyle]}>Button</Text>
        </Pressable>
    )
}

const sytle = StyleSheet.create({
    button: {

    },
    text: {

    }
})