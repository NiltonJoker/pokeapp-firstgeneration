import { FC, useState } from "react";
import { Grid, Card, Button, Text } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";
import { PokemonFeatures } from "./PokemonFeatures";
import { PokemonSprites } from "./PokemonSprites";

interface Props {
  pokemon: Pokemon;
}

export const PokemonInfo: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);

    setIsInFavorites(!isInFavorites);

    if(isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x:1,
        y:0
      }
    })
    
  };

  return (
    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header
          css={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Text h1 transform="capitalize">
            {pokemon.name}
          </Text>
          <Button
            color="gradient"
            ghost={!isInFavorites}
            onClick={onToggleFavorite}
          >
            {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
          </Button>
        </Card.Header>
        <Card.Body>
          <PokemonFeatures pokemon={pokemon} />
          <PokemonSprites pokemon={pokemon} />
        </Card.Body>
      </Card>
    </Grid>
  );
};
