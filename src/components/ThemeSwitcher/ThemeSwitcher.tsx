import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="text-right">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded font-medium transition-colors bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
