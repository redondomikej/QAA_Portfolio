import React from "react";

const MyRole = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-20 px-6">
      {/* <h1 className="text-3xl font-semibold mb-6 text-center">My Role</h1> */}
      <div className="w-full max-w-2xl space-y-6">
        <p className="text-gray-400 text-lg text-left">
          As a QA Automation Engineer, my primary role is to develop and maintain automated test scripts to ensure software quality.
          I specialize in web automation using Selenium and Node.js, with a strong focus on CI/CD testing in GitLab or GitHub.
        </p>

        <h2 className="text-xl font-medium text-left">Responsibilities</h2>
        <ul className="text-gray-400 list-disc pl-6 space-y-2">
          <li>Develop and maintain automation test scripts for web and mobile applications.</li>
          <li>Ensure test coverage for UI, API, functional, integration, and performance testing.</li>
          <li>Integrate automated tests into CI/CD pipelines to streamline deployment.</li>
          <li>Collaborate with developers and stakeholders to define quality standards.</li>
        </ul>

        <h2 className="text-xl font-medium text-left">Types of Testing I Perform</h2>
        <ul className="text-gray-400 list-disc pl-6 space-y-2">
          <li>UI Testing (End-to-End, Functional, Regression)</li>
          <li>API Testing (Postman, Newman, REST Assured)</li>
          <li>Mobile Automation Testing (Appium, Detox)</li>
          <li>Performance & Load Testing</li>
          <li>Integration Testing</li>
        </ul>

        <h2 className="text-xl font-medium text-left">Tools & Technologies</h2>
        <p className="text-gray-400 text-left">
          I work with a range of automation tools, including Selenium, Appium, Cypress, Katalon Studio, Postman, Jenkins, and Docker.
        </p>

        <h2 className="text-xl font-medium text-left">Testing Methodologies & Best Practices</h2>
        <ul className="text-gray-400 list-disc pl-6 space-y-2">
          <li>Behavior-Driven Development (BDD)</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Data-Driven Testing (DDT)</li>
          <li>Continuous Testing in DevOps environments</li>
        </ul>
      </div>
    </div>
  );
};

export default MyRole;
