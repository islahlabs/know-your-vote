import { motion } from "framer-motion";

const skillCategories = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Zustand",
    "TanStack",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Styled Components",
    "Shadcn UI",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Socket.IO",
    "AWS",
    "Python",
  ],
  "Tools & Other": [
    "Git",
    "Docker",
    "Webpack",
    "Vite",
    "Cypress",
    "Zod",
    "PWA",
    "Google Analytics",
    "Figma",
  ],
};

export const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="prose dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I am a passionate Full Stack Developer with expertise in modern
              web technologies. I specialize in building scalable, performant
              web applications with a focus on user experience and clean code.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
