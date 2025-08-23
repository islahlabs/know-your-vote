import { motion } from "framer-motion";

const experiences = [
  {
    title: "Community Organizer",
    organization: "Muslim Voter Mobilization Initiative",
    period: "2023 - Present",
    description:
      "Leading voter registration drives and civic engagement programs across California communities.",
    achievements: [
      "Organized 50+ voter registration events",
      "Trained 200+ community volunteers",
      "Increased voter registration by 300% in target areas",
    ],
    skills: ["Community Outreach", "Event Planning", "Volunteer Management"],
  },
  {
    title: "Youth Civic Engagement Coordinator",
    organization: "Islamic Center of Southern California",
    period: "2022 - 2023",
    description:
      "Developed and implemented youth programs focused on civic education and political participation.",
    achievements: [
      "Created youth leadership development program",
      "Engaged 500+ young Muslim Americans",
      "Established partnerships with 20+ local organizations",
    ],
    skills: ["Youth Development", "Program Management", "Partnership Building"],
  },
  {
    title: "Voter Education Specialist",
    organization: "CAIR California",
    period: "2021 - 2022",
    description:
      "Provided voter education and training to Muslim communities across California.",
    achievements: [
      "Conducted 100+ voter education workshops",
      "Developed multilingual voting resources",
      "Reached 10,000+ community members",
    ],
    skills: [
      "Voter Education",
      "Multilingual Outreach",
      "Resource Development",
    ],
  },
  {
    title: "Community Outreach Volunteer",
    organization: "Local Mosque Network",
    period: "2020 - 2021",
    description:
      "Volunteered in grassroots efforts to increase Muslim voter participation.",
    achievements: [
      "Assisted in voter registration drives",
      "Provided translation services",
      "Built community trust and relationships",
    ],
    skills: ["Volunteer Coordination", "Translation", "Community Building"],
  },
];

const trainingPrograms = [
  {
    title: "Civic Leadership Development",
    provider: "Muslim Public Affairs Council",
    duration: "6 months",
    description:
      "Comprehensive training in civic engagement, community organizing, and political advocacy.",
    certificate: "Civic Leadership Certificate",
  },
  {
    title: "Voter Registration Specialist",
    provider: "California Secretary of State",
    duration: "2 weeks",
    description:
      "Official training to become a certified voter registration specialist in California.",
    certificate: "Voter Registration Specialist",
  },
  {
    title: "Community Organizing",
    provider: "Center for Community Change",
    duration: "3 months",
    description:
      "Advanced training in community organizing, coalition building, and grassroots mobilization.",
    certificate: "Community Organizing Certificate",
  },
  {
    title: "Digital Advocacy",
    provider: "Netroots Nation",
    duration: "1 month",
    description:
      "Training in digital tools and social media for civic engagement and advocacy.",
    certificate: "Digital Advocacy Certificate",
  },
];

export const ExperiencePage = () => {
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
            Experience & Training
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our team brings years of experience in community organizing, voter
            mobilization, and civic engagement to serve Muslim communities
            across America.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-green-500 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {experience.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium transition-colors duration-300">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 transition-colors duration-300">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {experience.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Key Achievements:
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Skills:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Training & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {program.title}
                  </h4>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-300">
                    {program.duration}
                  </span>
                </div>
                <p className="text-blue-700 dark:text-blue-300 font-medium mb-2 transition-colors duration-300">
                  {program.provider}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                  {program.description}
                </p>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm inline-block transition-colors duration-300">
                  {program.certificate}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2">
                Community Organizing
              </h4>
              <p className="text-green-100">
                Building strong relationships and mobilizing communities for
                civic action
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2">
                Data-Driven Approach
              </h4>
              <p className="text-green-100">
                Using analytics and insights to improve voter mobilization
                strategies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-2">
                Cultural Competency
              </h4>
              <p className="text-green-100">
                Understanding and respecting diverse Muslim communities and
                cultures
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
