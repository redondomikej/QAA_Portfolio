import React from "react";
import { motion } from "framer-motion";


const AboutHeader = () => {
  return (
    <motion.div
      className="w-full max-w-3xl flex flex-col md:flex-row items-center mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/img3.JPG"  // Change this to your actual image path
        alt="Mike EJ Redondo"
        className="w-40 h-40 md:w-30 md:h-60 rounded-full border-4 border-blue-500 shadow-lg object-cover"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-blue-400">Mike EJ Redondo</h1>
        <p className="text-lg text-gray-300">QA Automation Engineer</p>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
