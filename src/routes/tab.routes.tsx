import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedéx"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#173EA5",
          tabBarInactiveTintColor: "#000",
          // tabBarIcon(props) {
          //   // if (state.route.name === "Pokedéx") {
          //   //   return <FontAwesome5 name="disease" size={24} color="black" />;
          //   // }
          // },
        }}
      >
        <Tab.Screen options={{}} name="Pokedéx" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
