import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center pt-20">
      {/* <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1> */}
      <div className="w-full max-w-3xl space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed text-left">
          Hi! I'm Mike EJ Redondo, but you can call me Mike. I'm a QA Automation Engineer from the Philippines, passionate about ensuring software quality through automation and manual testing.
        </p>

        <h2 className="text-xl font-medium text-left">My Journey into QA Automation</h2>
        <p className="text-gray-400 text-left">
          I started my career in software testing, working on various projects across e-commerce platforms, school management systems, and other web and mobile applications. Over time, I transitioned into automation testing, where I discovered my passion for writing efficient test scripts and optimizing testing processes to enhance software reliability.
        </p>

        <h2 className="text-xl font-medium text-left">Why QA?</h2>
        <p className="text-gray-400 text-left">
          For me, quality assurance isn't just about finding bugs—it's about improving user experience, ensuring smooth functionality, and building trust in software products. I enjoy automating repetitive tasks, expanding test coverage, and continuously learning new tools and frameworks to stay ahead in the fast-evolving tech industry.
        </p>

        <h2 className="text-xl font-medium text-left">My Values & Passion</h2>
        <ul className="text-gray-400 list-disc pl-6 space-y-2">
          <li>Efficiency – I strive to optimize test execution for faster feedback loops.</li>
          <li>Reliability – My goal is to contribute to building stable and dependable applications.</li>
          <li>Continuous Learning – I embrace new automation tools and methodologies to improve testing strategies.</li>
        </ul>

        <h2 className="text-xl font-medium text-left">Fun Fact About Me</h2>
        <p className="text-gray-400 text-left">
          I'm always ready for a challenge! I have a strong eagerness to learn, adapt, and thrive in different environments, making me highly flexible in tackling new projects and technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
