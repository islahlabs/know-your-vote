import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center cursor-pointer"
              >
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  Portfolio
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              >
                Contact
              </Link>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              >
                {isDarkMode ? (
                  <SunIcon className="h-5 w-5 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  );
};
