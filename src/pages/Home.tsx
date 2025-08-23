import { motion } from "framer-motion";
import MapChart from "../components/Map";
import { About } from "./About";
import { Projects } from "./Projects";
import { ExperiencePage } from "./Experience";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Muslim Voters
            <span className="text-green-600 dark:text-green-400">
              {" "}
              Mobilization
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Empowering Muslim communities across America to exercise their right
            to vote. Your voice matters. Your vote counts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#map"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors cursor-pointer font-semibold text-lg"
            >
              Explore Communities
            </a>
            <a
              href="#about"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              3.5M+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Muslim Americans
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              States with Muslim Communities
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-300">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Voting Rights Matter
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="map"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
            Muslim Communities Across America
          </h2>
          <div className="max-w-4xl mx-auto">
            <MapChart />
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
            Click on California to explore Muslim communities and voter
            registration opportunities
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen">
        <ExperiencePage />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
};
