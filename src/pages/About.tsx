import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            About Muslim Voter Mobilization
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We are dedicated to empowering Muslim communities across America to
            participate actively in the democratic process through voter
            registration, education, and mobilization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our Mission
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <p>
                To increase Muslim voter participation and representation in
                American democracy by providing accessible voter registration,
                education, and community engagement tools.
              </p>
              <p>
                We believe that every voice matters and that Muslim Americans
                have a crucial role to play in shaping the future of our nation
                through civic participation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Why Vote?
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <p>
                Voting is not just a right—it's a powerful tool for change. When
                Muslim Americans vote, we amplify our collective voice and
                ensure our communities are represented.
              </p>
              <p>
                From local elections to national policies, every vote counts in
                building a more inclusive and representative democracy that
                reflects the diversity of America.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Our Key Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center transition-colors duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Voter Registration
              </h4>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Help community members register to vote and update their voter
                information
              </p>
              <button
                className="bg-green-500 mt-4 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  window.open("https://www.mymuslimvote.org/pledge", "_blank");
                }}
              >
                Pledge to Vote!
              </button>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center transition-colors duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Voter Education
              </h4>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Provide information about candidates, issues, and the voting
                process
              </p>
              <button
                className="bg-green-500 mt-4 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  window.open("https://www.mymuslimvote.org/", "_blank");
                }}
              >
                Learn More
              </button>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 text-center transition-colors duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Community Engagement
              </h4>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Build partnerships with mosques, community centers, and local
                organizations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Voters Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Community Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Partner Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-green-100">Voter Turnout Increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
