import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonDetail } from "../../components/pokemon";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { capitalize, getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title={capitalize(pokemon.name)}>
      <PokemonDetail pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    paths: data.results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    },
  };
};

export default PokemonByNamePage;
