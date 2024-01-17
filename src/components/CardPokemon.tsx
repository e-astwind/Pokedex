import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import * as pokeTypeImgPath from "../global/pokeTypeImgPath";
import { PokemonDataProps } from "../services/pokeApi";

const { width } = Dimensions.get("window");
export default function CardPokemon({
  id,
  name,
  types,
  imgUrl,
}: PokemonDataProps) {
  const formatId = (id: number) => {
    if (id < 10) return `00${id}`;
    if (id < 100) return `0${id}`;
    return id;
  };

  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.verticalContainer}>
        <Text style={styles.idText}>{"N°" + formatId(id)}</Text>
        <Text style={styles.nameText}>{formatName(name)}</Text>
        <View style={styles.horizontalContainer}>
          {types.map((type) => {
            return (
              <View
                style={[
                  styles.typeContainer,
                  {
                    backgroundColor: colors.types[type.type.name],
                  },
                ]}
              >
                <View
                  style={{
                    padding: 7,
                    backgroundColor: "#FFF",
                    borderRadius: 25,
                  }}
                >
                  <Image
                    style={styles.typeImg}
                    source={pokeTypeImgPath[type.type.name]}
                  />
                </View>
                <Text style={styles.typeText}>
                  {formatName(type.type.name)}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={[
          styles.imgContainer,
          { backgroundColor: colors.types[types[0].type.name] },
        ]}
      >
        <Image style={styles.img} source={{ uri: imgUrl }} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF6EC",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.9,
    borderRadius: 10,
    height: 110,
  },
  verticalContainer: {
    padding: 10,
    gap: 5,
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  img: {
    width: 55,
    height: 55,
  },
  imgContainer: {
    height: "100%",
    width: "36%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  idText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  typeContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 16,
    marginHorizontal: 5,
  },
  typeText: {
    fontWeight: "bold",
  },
  typeImg: {
    width: 15,
    height: 15,
  },
});
