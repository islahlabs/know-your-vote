import { useState, useEffect } from "react";
import { Outlet, Link } from "@tanstack/react-router";

export const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <nav
        className={`fixed top-0 w-full shadow-lg z-50 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
                         <div className="flex">
               <Link
                 to="/"
                 className="flex items-center cursor-pointer"
               >
                 <span
                   className={`text-xl font-bold transition-colors duration-300 ${
                     isDarkMode ? "text-white" : "text-gray-800"
                   }`}
                 >
                   Muslim Voters
                 </span>
               </Link>
             </div>
                         <div className="flex items-center space-x-4">
               <a
                 href="#about"
                 className={`transition-colors duration-300 cursor-pointer ${
                   isDarkMode
                     ? "text-gray-300 hover:text-white"
                     : "text-gray-600 hover:text-gray-900"
                 }`}
               >
                 About
               </a>
               <a
                 href="#projects"
                 className={`transition-colors duration-300 cursor-pointer ${
                   isDarkMode
                     ? "text-gray-300 hover:text-white"
                     : "text-gray-600 hover:text-gray-900"
                 }`}
               >
                 Initiatives
               </a>
               <a
                 href="#experience"
                 className={`transition-colors duration-300 cursor-pointer ${
                   isDarkMode
                     ? "text-gray-300 hover:text-white"
                     : "text-gray-600 hover:text-gray-900"
                 }`}
               >
                 Experience
               </a>
               <a
                 href="#contact"
                 className={`transition-colors duration-300 cursor-pointer ${
                   isDarkMode
                     ? "text-gray-300 hover:text-white"
                     : "text-gray-600 hover:text-gray-900"
                 }`}
               >
                 Get Involved
               </a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};
