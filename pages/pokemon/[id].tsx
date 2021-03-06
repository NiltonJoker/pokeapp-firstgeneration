import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "../../components/layouts";
import { PokemonDetail } from "../../components/pokemon";
import { Pokemon } from "../../interfaces";
import { capitalize } from "../../utils";
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={ capitalize(pokemon.name) }>
      <PokemonDetail pokemon={pokemon} />
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    // fallback: false,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
 
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id)

  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400
  };
};

export default PokemonPage;
