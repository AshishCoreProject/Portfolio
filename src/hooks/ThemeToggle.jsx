import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // using lucide icons (already in your project)

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                 text-gray-500 dark:text-yellow-400 
                 dark:hover:bg-gray-600 
                 transition focus:outline-none focus:ring-0 active:outline-none"
    >
      {darkMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
