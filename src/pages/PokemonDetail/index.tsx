import { View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import IconButton from "../../components/IconButton";

export default function PokemonDetail({ navigation, route }) {
  const params = route.params;
  const goBack = () => navigation.goBack();

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 300,
        }}
      >
        <View
          style={{
            zIndex: 1,
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            onPress={goBack}
            size={32}
            name="chevron-back-outline"
            icon={Ionicons}
            color="#FFFFFF"
          />
          <IconButton
            onPress={() => console.log("LIKE")}
            size={30}
            name="hearto"
            icon={AntDesign}
            color="#FFFFFF"
          />
        </View>
        <LinearGradient
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          colors={["rgba(255,255,255,0.8)", "transparent"]}
          style={{
            position: "absolute",
            alignSelf: "center",
            width: "145%",
            height: 260,
            backgroundColor: params.color,
            borderBottomLeftRadius: 600,
            borderBottomRightRadius: 600,
          }}
        />
        <Image
          resizeMode="contain"
          source={{ uri: params.animationImg }}
          style={{
            zIndex: 9,
            width: "60%",
            height: "60%",
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
          }}
        />
      </View>
    </ScrollView>
  );
}
