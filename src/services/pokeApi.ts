import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (offset?: string) => {
  const { data } = await pokeApi.get(
    `/pokemon?offset=${offset ?? "300"}&limit=5`
  );
  const { results } = data;

  const pokemons = await Promise.all(
    results.map(async (pokemon: any) => {
      const { data } = await axios.get(pokemon.url);

      const { id, name, types } = data;
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        id,
        name,
        types,
        imgUrl,
      };
    })
  );
  return pokemons;
};
