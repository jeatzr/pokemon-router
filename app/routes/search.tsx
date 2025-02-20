import React, { useState, useMemo, useEffect } from "react";
import { getAllPokemons } from "../services/pokeapi";
import SearchBox from "../components/SearchBox/SearchBox";
import CardList from "../components/CardList/CardList";

import type { PokemonBasic } from "../types/interfaces";
import { useLoaderData } from "react-router";

// **Loader function for React Router**
export async function clientLoader() {
  try {
    const pokemons: PokemonBasic[] = await getAllPokemons();
    return { pokemons: pokemons };
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    return { pokemons: [] };
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

function Search() {
  // Get Pokémon data from the loader
  const loaderData: { pokemons: PokemonBasic[] } = useLoaderData();

  // State for search term
  const [search, setSearch] = useState<string>("");

  // **Optimized filtering with useMemo**
  const filteredPokemons = useMemo(() => {
    return loaderData.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, loaderData.pokemons]);

  // **Render component**
  return (
    <div className="flex flex-col items-center justify-center text-white transition-colors duration-500">
      <header className="bg-white dark:bg-gray-700 text-gray-900 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-8">
          Search for a Pokémon
        </h3>
        <SearchBox
          placeholder="Write a Pokémon name"
          onSearchChange={setSearch}
        />
        {filteredPokemons.length === 0 ? (
          <p className="text-gray-500 mt-4">No Pokémon found.</p>
        ) : (
          <CardList pokemons={filteredPokemons} />
        )}
      </header>
    </div>
  );
}

export default Search;
