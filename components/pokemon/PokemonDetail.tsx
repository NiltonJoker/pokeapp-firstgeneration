
import { FC } from "react";
import { Pokemon } from "../../interfaces";
import { PokemonImage } from "./PokemonImage";
import { PokemonInfo } from "./PokemonInfo";
import { Grid } from '@nextui-org/react';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetail:FC<Props> = ({pokemon}) => {
  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <PokemonImage pokemon={pokemon} />
      <PokemonInfo pokemon={pokemon}/>
    </Grid.Container>
  )
}
