import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../interfaces";
import { PokemonFeatures } from "./PokemonFeatures";
import { PokemonSprites } from "./PokemonSprites";

interface Props {
  pokemon: Pokemon;
}

export const PokemonInfo: FC<Props> = ({ pokemon }) => {
  return (
    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header css={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
          <Text h1 transform="capitalize">
            {pokemon.name}
          </Text>
          <Button color="gradient" ghost>
            Guardar en favoritos
          </Button>
        </Card.Header>
        <Card.Body>
          
          <PokemonFeatures pokemon={pokemon}/>
          <PokemonSprites pokemon={pokemon} />
          
        </Card.Body>
      </Card>
    </Grid>
  );
};
