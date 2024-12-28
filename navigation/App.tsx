import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import TabRoute from "./src/routes/TabRoute";
import { DrawerRoute } from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoute />
    </NavigationContainer>
  )
}

