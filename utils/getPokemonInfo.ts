import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      types: data.types,
      abilities: data.abilities
    }
    
  } catch (error) {
    return null;
  }
  
}