import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { TabRoute } from "./src/routes";


export default function App() {
  return (
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  )
}

