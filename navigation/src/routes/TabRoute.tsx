import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StackRoute from "./StackRoute";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export default function TabRoute() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#34CB79"
          
        //   tabBarStyle: {
        //     borderTopWidth: 0,
        //   }
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={StackRoute}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" size={size} color={color} />
            }
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{
            tabBarLabel: "Sobre",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen 
          name="Contact" 
          component={Contact} 
          options={{
            tabBarLabel: "Contato",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone" size={size} color={color} />
            }
          }}
        />
      </Tab.Navigator>
  )
}