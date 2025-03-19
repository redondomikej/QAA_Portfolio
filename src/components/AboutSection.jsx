import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({ title, children }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{title}</h2>
      <p className="text-lg text-gray-300">{children}</p>
    </motion.div>
  );
};

export default AboutSection;
