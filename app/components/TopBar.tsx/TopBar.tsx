import { Link } from "react-router";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import IconButton from "../IconButton/IconButton";

function TopBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-500 to-yellow-500 shadow-md p-4 flex justify-between items-center text-white">
      {/* Logo / Title */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold tracking-wide hover:text-yellow-200 transition"
      >
        <img src="/favicon.ico" alt="Poke-App Logo" className="h-8 w-8" />
        Poke-App
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="search">
            <IconButton variant="search" />
          </Link>
        </li>
        <li>
          <Link to="about">
            <IconButton variant="about" />
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
