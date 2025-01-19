import colors from "@/constants/Colors";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
    Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    console.log("Função iniciada")
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name: name
            }
        }
    })

    if (error) {
        Alert.alert("Error", error.message)
        setLoading(false);
        return;
    }

    setLoading(false)
    router.replace('/(auth)/signin/page')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={styels.container}>
          <View style={styels.header}>
            <Pressable style={styels.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </Pressable>

            <Text style={styels.logoText}>
              Dev<Text style={{ color: colors.green }}>App</Text>
            </Text>

            <Text style={styels.slogan}>Criar uma conta</Text>
          </View>

          <View style={styels.form}>
            {/* Nome */}
            <View>
              <Text style={styels.label}>Nome</Text>
              <TextInput
                placeholder="Digite seu nome"
                style={styels.input}
                value={name}
                onChangeText={setName}
              />
            </View>

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

            <Pressable style={styels.button} onPress={handleSignUp} disabled={loading}>
              <Text style={styels.buttonText}>
              {loading ? <ActivityIndicator /> : "Cadastrar"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  backButton: {
    backgroundColor: "rgba(255,255,255, 0.55)",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
});
