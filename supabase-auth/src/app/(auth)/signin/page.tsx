import colors from "@/constants/Colors";
import { supabase } from "@/src/lib/supabase";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      Alert.alert("Error", error.message)
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace('/(panel)/profile/page')
  }

  return (
    <View style={styels.container}>
      <View style={styels.header}>
        <Text style={styels.logoText}>
          Dev<Text style={{ color: colors.green }}>App</Text>
        </Text>
        <Text style={styels.slogan}>O futuro da programação</Text>
      </View>

      <View style={styels.form}>
        {/* E-mail */}
        <View>
          <Text style={styels.label}>E-mail</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            style={styels.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Senha */}
        <View>
          <Text style={styels.label}>Senha</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            style={styels.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable style={styels.button} onPress={handleSignIn}>
          <Text style={styels.buttonText}>
            {loading ? <ActivityIndicator /> : "Acessar"}
          </Text>
        </Pressable>

        <Link href="/(auth)/signup/page" style={styels.link}>
          Ainda não possui uma conta? Cadastre-se
        </Link>
      </View>
    </View>
  );
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc,
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8,
  },
  slogan: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 34,
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 24,
    paddingLeft: 14,
    paddingRight: 14,
  },
  label: {
    color: colors.zinc,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  link: {
    marginTop: 16,
    textAlign: "center",
  },
});
