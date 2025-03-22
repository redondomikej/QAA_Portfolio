import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">Mike EJ Redondo</h1>
      <h2 className="text-xl md:text-2xl mt-4 text-gray-400">QA Automation Engineer</h2>

      {/* Resume Link */}
      <a
        href="https://drive.google.com/drive/folders/1CAoZeTtKxFZFf65tt7u1VbCNbBMMeQ1H?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 text-blue-400 hover:underline"
      >
        View Resume & Cover Letter
      </a>

      <p className="mt-6 text-lg max-w-2xl">
        Passionate about test automation, ensuring software quality, and optimizing testing workflows. Experienced in web automation using Selenium, writing test scripts in Node.js, and working with GitLab CI/CD. Currently exploring mobile app automation to expand my expertise.
      </p>

      <div className="mt-8">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
