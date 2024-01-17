import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export enum ROUTES_NAMES {
  Home = "Home",
  PokemonDetail = "PokemonDetail",
}

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#173EA5",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen name="Pokedéx" component={PokedexScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const PokedexScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES_NAMES.Home} component={Home} />
      <Stack.Screen
        name={ROUTES_NAMES.PokemonDetail}
        component={PokemonDetail}
      />
    </Stack.Navigator>
  );
};
