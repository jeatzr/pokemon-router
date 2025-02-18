import { Info, Search } from "lucide-react"; // Íconos monocolor

type ButtonVariant = "about" | "search";

interface IconButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
}

function IconButton({ variant, onClick }: IconButtonProps) {
  const icons = {
    about: <Info className="h-5 w-5" />,
    search: <Search className="h-5 w-5" />,
  };

  const labels = {
    about: "About",
    search: "Search Pokémon",
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {icons[variant]}
      <span className="text-sm font-medium">{labels[variant]}</span>
    </button>
  );
}

export default IconButton;
