import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaDocker } from "react-icons/fa"; 
import { SiPostman, SiSelenium, SiCypress, SiJenkins, SiMongodb, SiMysql } from "react-icons/si";

const toolsData = [
  {
    category: "Development Tools",
    tools: [
      { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, link: "https://react.dev/" },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, link: "https://nodejs.org/en/docs" },
      { name: "VS Code", icon: <FaTools className="text-gray-400 text-3xl" />, link: "https://code.visualstudio.com/docs" },
      { name: "GitHub", icon: <FaTools className="text-gray-400 text-3xl" />, link: "https://docs.github.com/en" },
      { name: "Tailwind CSS", icon: <FaTools className="text-teal-400 text-3xl" />, link: "https://tailwindcss.com/docs" },
    ],
  },
  {
    category: "Backend Testing",
    tools: [
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" />, link: "https://learning.postman.com/docs/" },
      { name: "Newman", icon: <FaTools className="text-gray-400 text-3xl" />, link: "https://github.com/postmanlabs/newman" },
      { name: "JMeter", icon: <FaTools className="text-gray-400 text-3xl" />, link: "https://jmeter.apache.org/usermanual/index.html" },
    ],
  },
  {
    category: "UI Testing",
    tools: [
      { name: "Selenium", icon: <SiSelenium className="text-green-400 text-3xl" />, link: "https://www.selenium.dev/documentation/" },
      { name: "Cypress", icon: <SiCypress className="text-teal-400 text-3xl" />, link: "https://docs.cypress.io/guides/overview/why-cypress" },
      { name: "Behave (BDD)", icon: <FaTools className="text-gray-400 text-3xl" />, link: "https://behave.readthedocs.io/en/latest/" },
      { name: "Cucumber", icon: <FaTools className="text-green-400 text-3xl" />, link: "https://cucumber.io/docs/guides/10-minute-tutorial/" },
    ],
  },
  {
    category: "Databases",
    tools: [
      { name: "Redis", icon: <FaDatabase className="text-red-400 text-3xl" />, link: "https://redis.io/docs/" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" />, link: "https://www.mongodb.com/docs/" },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" />, link: "https://dev.mysql.com/doc/" },
    ],
  },
  {
    category: "CI/CD & Containers",
    tools: [
      { name: "Jenkins", icon: <SiJenkins className="text-red-500 text-3xl" />, link: "https://www.jenkins.io/doc/" },
      { name: "Docker", icon: <FaDocker className="text-blue-500 text-3xl" />, link: "https://docs.docker.com/" },
    ],
  },
];

const Tools = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-blue-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Tools & Technologies */}
      </motion.h1>

      <div className="w-full max-w-4xl">
        {toolsData.map((section, index) => (
          <motion.div 
            key={index} 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2 mb-4">
              {section.category}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
              {section.tools.map((tool, idx) => (
                <motion.li 
                  key={idx} 
                  className="bg-gray-800 p-4 rounded-lg text-center shadow-md flex flex-col items-center transition hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    {tool.icon}
                    <span className="mt-2 underline">{tool.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tools;
