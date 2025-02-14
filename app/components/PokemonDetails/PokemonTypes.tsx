import type { Pokemon } from "../../types/interfaces";

interface PokemonTypesProps {
  pokemon: Pokemon;
}

function PokemonTypes({ pokemon }: PokemonTypesProps) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2">
      {pokemon.types.map((type) => (
        <span
          key={type.type.name}
          className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-semibold"
        >
          {type.type.name.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

export default PokemonTypes;
