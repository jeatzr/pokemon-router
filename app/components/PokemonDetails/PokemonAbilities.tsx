import type { Pokemon } from "../../types/interfaces";

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

function PokemonAbilities({ pokemon }: PokemonAbilitiesProps) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Abilities:</h3>
      <ul className="flex flex-wrap gap-2">
        {pokemon.abilities.map((ability) => (
          <li
            key={ability.ability.name}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
          >
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonAbilities;
