import React from "react";

const projects = [
  {
    title: "🚀 Selenium + Behave Automation Framework",
    description:
      "A Selenium + Behave automation framework for UI testing. Uses BDD with Gherkin, supports Page Object Model (POM), and generates reports with Allure.",
    features: [
      "BDD with Behave & Gherkin – Easily write human-readable test cases",
      "Selenium WebDriver – Automate browser interactions",
      "Page Object Model (POM) – Maintain clean and reusable code",
      "Allure Reporting – Generate detailed test reports",
      "Headless Mode Support – Run tests faster without a UI",
    ],
    github: "https://github.com/redondomikej/Selenium-Behave-automation-framework-for-UI-testing/tree/Selenium_Behave_UI_testing",
  },
  {
    title: "🌐 React + Vite + Tailwind CSS Portfolio (Vercel Deployment)",
    description:
      "A modern portfolio website built with React, Vite, and Tailwind CSS. It features smooth animations with Framer Motion, React Router for navigation, and is deployed seamlessly on Vercel.",
    features: [
      "React + Vite – Fast and optimized development",
      "Tailwind CSS – Efficient styling with utility-first approach",
      "Framer Motion – Smooth animations and transitions",
      "React Router – Client-side routing for better UX",
      "Vercel Deployment – Easy CI/CD and hosting",
    ],
    github: "https://github.com/redondomikej/QAA_Portfolio/tree/React-%2B-Vite-%2B-Tailwind-CSS-Portfolio-vercel-deployment",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center pt-20">
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
