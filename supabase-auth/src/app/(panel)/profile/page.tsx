import { supabase } from "@/src/lib/supabase";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTask = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("title")
      .eq("user_id", user?.id);

    if (error) {
      Alert.alert("Error", "Problema ao consultar banco de dados.");
      console.log(error);
    } else {
      console.log(data);
      setTasks(data);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styels.container}>
          <Text>Tarefas do id: {user?.id}</Text>

          {tasks.map((item) => (
            <View key={item.id} style={styels.taskItem}>
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    paddingHorizontal: 16,
  },
  taskItem: {
    width: "100%",
    backgroundColor: Colors.gray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
});
