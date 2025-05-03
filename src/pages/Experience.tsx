import { motion } from "framer-motion";
import type { Experience } from "../types";

const experiences: Experience[] = [
  {
    id: "1",
    company: "Focus 360",
    position: "Full Stack Developer, R&D",
    duration: "Sep 2022 - Present · 2 yrs 9 mos",
    description: [
      "Developed and maintained both client-facing and internal applications using React, TypeScript, and Redux for efficient state management",
      "Designed reusable UI components with Tailwind CSS for responsiveness",
      "Conducted end-to-end testing using Cypress.js to ensure application reliability",
      "Enhanced offline app functionality and performance through Workbox service workers to reduce monthly AWS CloudFront egress costs by 80%",
      "Developed scalable backend solutions in AWS, leveraging technologies like S3, CloudFront, Lambdas, and API Gateway",
      "Managed MySQL databases for efficient data storage and retrieval",
      "Ensured system reliability with AWS CloudWatch and streamlined code deployment with DevOps",
      "Conducted comprehensive testing of backend APIs using Postman for functionality validation",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Cypress",
      "AWS",
      "MySQL",
      "Workbox",
      "DevOps",
    ],
  },
  // Add more experiences
];

export const ExperiencePage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 md:mt-0">
                    {exp.duration}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, index) => (
                    <li key={index} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
