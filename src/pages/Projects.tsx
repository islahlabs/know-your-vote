import { motion } from "framer-motion";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "Fun 2 Learn - A Learning Platform",
    description:
      "A full-stack application built with React, Node.js, and PostgreSQL. Features include interactive image carousels with audio cueues, alphabetical & numerical recognition, and more.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Fetch API",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    imageUrl:
      "https://user-images.githubusercontent.com/93749120/179878027-9a0fd36f-35d8-460e-b504-77c7ddc2a9e0.gif",
    githubUrl: "https://github.com/mohamadalsyouf/fun-2-learn",
    // liveUrl: "https://fun2learn.netlify.app/",
  },
  {
    id: "2",
    title: "Real-time Chat Application",
    description:
      "A modern chat application featuring real-time messaging, file sharing, and group conversations. Built with React, Socket.IO, and AWS services for scalable message handling and storage.",
    technologies: [
      "React",
      "Socket.IO",
      "AWS",
      "TypeScript",
      "Zustand",
      "Styled Components",
      "Express.js",
    ],
    imageUrl:
      "https://placehold.co/600x400/059669/ffffff?text=Chat+Application",
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.com",
  },
  {
    id: "3",
    title: "Task Management Dashboard",
    description:
      "A comprehensive project management tool with features like task tracking, team collaboration, and analytics. Implements drag-and-drop functionality and real-time updates.",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Node.js",
      "MySQL",
      "Shadcn UI",
      "Cypress",
    ],
    imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Task+Dashboard",
    githubUrl: "https://github.com/yourusername/task-dashboard",
    liveUrl: "https://task-dashboard-demo.com",
  },
  // {
  //   id: "4",
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart functionality, and Stripe payment integration.",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "PostgreSQL",
  //     "Redux",
  //     "Stripe API",
  //     "Tailwind CSS",
  //   ],
  //   imageUrl:
  //     "https://placehold.co/600x400/2563eb/ffffff?text=E-Commerce+Platform",
  //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
  //   liveUrl: "https://ecommerce-platform-demo.com",
  // },
  // {
  //   id: "5",
  //   title: "Real-time Chat Application",
  //   description:
  //     "A modern chat application featuring real-time messaging, file sharing, and group conversations. Built with React, Socket.IO, and AWS services for scalable message handling and storage.",
  //   technologies: [
  //     "React",
  //     "Socket.IO",
  //     "AWS",
  //     "TypeScript",
  //     "Zustand",
  //     "Styled Components",
  //     "Express.js",
  //   ],
  //   imageUrl:
  //     "https://placehold.co/600x400/059669/ffffff?text=Chat+Application",
  //   githubUrl: "https://github.com/yourusername/chat-app",
  //   liveUrl: "https://chat-app-demo.com",
  // },
  // {
  //   id: "6",
  //   title: "Task Management Dashboard",
  //   description:
  //     "A comprehensive project management tool with features like task tracking, team collaboration, and analytics. Implements drag-and-drop functionality and real-time updates.",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "TanStack Query",
  //     "Node.js",
  //     "MySQL",
  //     "Shadcn UI",
  //     "Cypress",
  //   ],
  //   imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Task+Dashboard",
  //   githubUrl: "https://github.com/yourusername/task-dashboard",
  //   liveUrl: "https://task-dashboard-demo.com",
  // },
];

export const Projects = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {/* {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Live Demo →
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
