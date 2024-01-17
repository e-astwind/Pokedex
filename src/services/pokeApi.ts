import axios from "axios";
import { formatSentencesWithSlash } from "../utils/formats";

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
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  animationImg: string;
  sentence: string;
}

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (): Promise<PokemonDataProps> => {
  const { data } = await pokeApi.get(`/pokemon?offset=0&limit=20`);
  const { results } = data;

  const pokemons: any = await Promise.all(
    results.map(async (pokemon: PokemonProps) => {
      const { data } = await axios.get(pokemon.url);

      const { id, name, types, height, weight, abilities } = data;
      const { data: moreInfos } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      const { flavor_text_entries } = moreInfos;
      const formatedSentences = formatSentencesWithSlash(
        flavor_text_entries[0].flavor_text
      );
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      const animationImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
      return {
        id,
        name,
        types,
        imgUrl,
        animationImg,
        height,
        weight,
        abilities,
        sentence: formatedSentences,
      };
    })
  );
  return pokemons;
};
