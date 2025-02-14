import type { Pokemon } from "../../types/interfaces";

interface PokemonStatsProps {
  pokemon: Pokemon;
}

function PokemonStats({ pokemon }: PokemonStatsProps) {
  return (
    <div className="mt-6 w-full max-w-lg bg-white p-6 rounded-xl shadow-lg text-gray-900">
      <h3 className="text-xl font-bold text-center mb-4">Stats</h3>
      <div className="space-y-2">
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="flex items-center">
            <span className="w-32 font-semibold capitalize">
              {stat.stat.name}:
            </span>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
            <span className="ml-3 font-semibold">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonStats;
