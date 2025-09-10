import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ import menu & close icons
import ThemeToggle from "../hooks/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <h1 className="!text-2xl md:!text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
              Prince Kumar
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a onClick={handleClick} href="#home" className="block hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium">Home</a>
            <a onClick={handleClick} href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium">About</a>
            <a onClick={handleClick} href="#skills" className="block hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium">Skills</a>
            <a onClick={handleClick} href="#projects" className="block hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium">Projects</a>
            <a onClick={handleClick} href="#contact" className="block hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
