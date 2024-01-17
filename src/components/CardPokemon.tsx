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
import * as globalizationName from "../utils/globalizationName";
import { PokemonDataProps } from "../services/pokeApi";
import { formatId, formatName } from "../utils/formats";
interface CardPokemonProps extends PokemonDataProps {
  navigation: any;
}
const { width } = Dimensions.get("window");
export default function CardPokemon({
  id,
  name,
  types,
  imgUrl,
  animationImg,
  abilities,
  height,
  weight,
  sentence,
  navigation,
}: CardPokemonProps) {
  const onPress = () => {
    navigation.navigate("PokemonDetail", {
      id,
      name,
      types,
      imgUrl,
      animationImg,
      color: colors.types[types[0].type.name],
      abilities,
      height,
      weight,
      sentence,
    });
  };

  return (
    <TouchableOpacity
      key={`pokemon-Component-Card${id}`}
      onPress={() => onPress()}
      style={styles.container}
    >
      <View style={styles.verticalContainer}>
        <Text style={styles.idText}>{"N°" + formatId(id)}</Text>
        <Text style={styles.nameText}>{formatName(name)}</Text>
        <View style={styles.horizontalContainer}>
          {types.map((type, index) => {
            return (
              <View
                key={`type-${index}`}
                style={[
                  styles.typeContainer,
                  {
                    backgroundColor: colors.types[type.type.name],
                  },
                ]}
              >
                <View
                  style={{
                    padding: 4,
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
                  {formatName(globalizationName[type.type.name])}
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
    height: 120,
  },
  verticalContainer: {
    padding: 10,
    gap: 5,
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  img: {
    width: 95,
    height: 95,
  },
  imgContainer: {
    height: "100%",
    width: "32%",
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
    gap: 4,
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
