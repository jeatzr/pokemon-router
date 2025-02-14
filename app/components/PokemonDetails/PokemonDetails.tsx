import type { Pokemon } from "../../types/interfaces";
import PokemonSprites from "./PokemonSprites";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <>
      {/* title */}
      <h2 className="text-4xl font-bold mb-4 capitalize">{pokemon.name}</h2>

      <PokemonSprites pokemon={pokemon} />
      <PokemonTypes pokemon={pokemon} />
      <PokemonAbilities pokemon={pokemon} />
      <PokemonStats pokemon={pokemon} />
    </>
  );
}

export default PokemonDetails;
