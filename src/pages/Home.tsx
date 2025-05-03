import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
