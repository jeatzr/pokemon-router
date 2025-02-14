import type { Pokemon } from "../../types/interfaces";

interface PokemonSpritesProps {
  pokemon: Pokemon;
}

function PokemonSprites({ pokemon }: PokemonSpritesProps) {
  return (
    <div className="flex gap-6">
      <img
        src={pokemon.sprites.front_default ?? "https://via.placeholder.com/150"}
        alt={pokemon.name}
        className="w-40 h-40 object-contain bg-white rounded-lg shadow-lg p-2"
      />
      <img
        src={pokemon.sprites.front_shiny ?? "https://via.placeholder.com/150"}
        alt={`${pokemon.name} shiny`}
        className="w-40 h-40 object-contain bg-yellow-300 rounded-lg shadow-lg p-2"
      />
    </div>
  );
}

export default PokemonSprites;
