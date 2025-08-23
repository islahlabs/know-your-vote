import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Voter Registration Drives",
    description:
      "Organizing community-wide voter registration events at mosques, community centers, and universities across California.",
    impact: "5,000+ new voters registered",
    status: "Active",
    color: "green",
  },
  {
    title: "Youth Civic Engagement",
    description:
      "Educational programs for Muslim youth to understand the importance of civic participation and voting rights.",
    impact: "2,000+ youth engaged",
    status: "Active",
    color: "blue",
  },
  {
    title: "Community Outreach",
    description:
      "Building partnerships with local organizations and mosques to increase voter awareness and participation.",
    impact: "50+ partner organizations",
    status: "Active",
    color: "purple",
  },
  {
    title: "Digital Voter Education",
    description:
      "Online resources and social media campaigns to educate Muslim communities about voting rights and procedures.",
    impact: "100,000+ reach",
    status: "Active",
    color: "orange",
  },
  {
    title: "Election Day Support",
    description:
      "Providing transportation and support services to help community members get to polling stations on election day.",
    impact: "1,000+ assisted",
    status: "Planning",
    color: "red",
  },
  {
    title: "Post-Election Analysis",
    description:
      "Analyzing voting patterns and community engagement to improve future mobilization efforts.",
    impact: "Data-driven insights",
    status: "Ongoing",
    color: "indigo",
  },
];

// const successStories = [
//   {
//     name: "Aisha Khan",
//     role: "Community Organizer",
//     story:
//       "We registered over 500 new voters in our mosque community. The sense of empowerment was incredible.",
//     location: "Los Angeles, CA",
//   },
//   {
//     name: "Ahmed Hassan",
//     role: "Youth Coordinator",
//     story:
//       "Our youth program helped young Muslims understand their civic duty. Many are now active in local politics.",
//     location: "San Francisco, CA",
//   },
//   {
//     name: "Fatima Ali",
//     role: "Volunteer Coordinator",
//     story:
//       "The community response was overwhelming. People were eager to participate and make their voices heard.",
//     location: "San Diego, CA",
//   },
// ];

export const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "border-green-200 bg-green-50";
      case "blue":
        return "border-blue-200 bg-blue-50";
      case "purple":
        return "border-purple-200 bg-purple-50";
      case "orange":
        return "border-orange-200 bg-orange-50";
      case "red":
        return "border-red-200 bg-red-50";
      case "indigo":
        return "border-indigo-200 bg-indigo-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our Initiatives & Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Discover how we're making a difference in Muslim communities across
            America through voter mobilization and civic engagement programs.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Current Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`border rounded-lg p-6 ${getColorClasses(
                  initiative.color
                )}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {initiative.title}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      initiative.status
                    )}`}
                  >
                    {initiative.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="text-sm font-semibold text-gray-800">
                  Impact: {initiative.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {story.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {story.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic transition-colors duration-300">
                  "{story.story}"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  {story.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Get Involved Today</h3>
          <p className="text-xl mb-6 text-green-100">
            Join us in empowering Muslim communities through civic engagement
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Donate
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
