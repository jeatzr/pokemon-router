import { useParams, useLoaderData } from "react-router";
import type { Pokemon } from "../types/interfaces";
import { getPokemonByName } from "../services/pokeapi";
import type { Route } from "../+types/root";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

// **Loader function for React Router**
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  try {
    // where params.name is part of the URL pokemon:name
    //route("pokemon/:name", "routes/details.tsx"),
    const pokemon: Pokemon | null = await getPokemonByName(params.name);
    return { pokemon: pokemon };
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    return { pokemon: null };
  }
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg">Loading Pokémon...</p>
    </div>
  );
}

function Details() {
  // Obtener datos del loader
  const { pokemon } = useLoaderData() as { pokemon: Pokemon | null };

  // if there is no pokemon show an error message
  if (!pokemon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <h2 className="text-2xl font-bold">❌ Pokémon Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}

export default Details;
