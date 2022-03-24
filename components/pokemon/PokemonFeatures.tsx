import { Container,Text } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

export const PokemonFeatures: FC<Props> = ({ pokemon }) => {
  return (
    <>
      <Text size={30}>Info:</Text>
      <Container>
        <Text>Height: {pokemon.height}</Text>

        <Text>Weight: {pokemon.weight}</Text>
        <Text>Base Experience: {pokemon.base_experience}</Text>

        <Text>
          Types:
          {pokemon.types.map((pokeType, i, arr) => (
            <Text span key={pokeType.slot} transform="capitalize">
              {" "}
              {pokeType.type.name} {i != arr.length - 1 ? "," : ""}
            </Text>
          ))}
        </Text>
        <Text>
          Abilities:
          {pokemon.abilities.map((pokeAbility, i, arr) => (
            <Text span key={pokeAbility.slot} transform="capitalize">
              {" "}
              {pokeAbility.ability.name} {i != arr.length - 1 ? "," : ""}
            </Text>
          ))}
        </Text>
      </Container>
    </>
  );
};
