export default function Welcome() {
  return (
    <div className="flex justify-center items-center  text-gray-900 dark:text-white px-6">
      <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg rounded-2xl p-8 max-w-md text-center transition-colors duration-300">
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
          Welcome to My Poke-App
        </h1>
        <img
          src="/favicon.ico"
          alt="Poke-App Logo"
          className="h-12 w-12 mx-auto mb-4"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Feel free to explore the different options in the menu and discover
          your favorite Pokémon!
        </p>
        <p className="mt-4">
          This App uses the{" "}
          <a
            className="text-red-600 dark:text-red-400 hover:text-amber-300 dark:hover:text-amber-500 cursor-pointer"
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeApi
          </a>
        </p>
      </div>
    </div>
  );
}
