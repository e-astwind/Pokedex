import axios from "axios";

interface PokemonProps {
  name: string;
  url: string;
}
export interface PokemonDataProps {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  imgUrl: string;
}

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (): Promise<PokemonDataProps> => {
  const { data } = await pokeApi.get(`/pokemon?offset=0&limit=80`);
  const { results } = data;

  const pokemons: any = await Promise.all(
    results.map(async (pokemon: PokemonProps) => {
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
