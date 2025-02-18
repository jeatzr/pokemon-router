export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg rounded-2xl p-8 max-w-lg text-center transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
          About the Creators
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This project was created with ❤️ by passionate Pokémon fans. Our goal
          is to bring a fun and interactive experience to all trainers!
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Stay tuned for more updates!
        </p>
      </div>
    </div>
  );
}
