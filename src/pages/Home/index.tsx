import { View, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { PokemonDataProps, getPokemon } from "../../services/pokeApi";
import CardPokemon from "../../components/CardPokemon";

export default function Home({ navigation }) {
  const [pokemon, setPokemon] = useState<PokemonDataProps[]>([]);

  const fetchPokemon = async () => {
    const data: any = await getPokemon();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSearchPokemon}
          placeholder="Procurar Pókemon..."
        />
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={29}
          color="#000"
        />
      </View>
      <View style={styles.pokemonListContainer}>
        <FlatList
          data={pokemon}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => (
            <CardPokemon {...item} navigation={navigation} />
          )}
          keyExtractor={(item) => `pokemon-Card${item.id}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC",
  },
  inputSearchPokemon: {
    backgroundColor: "#fff",
    height: 56,
    borderWidth: 0.5,
    borderColor: "#CCCCCC",
    width: "90%",
    borderRadius: 12,
    paddingHorizontal: 38,
  },
  searchIcon: {
    position: "absolute",
    alignSelf: "center",
    left: 28,
  },
  pokemonListContainer: {
    flex: 1,
  },
});
