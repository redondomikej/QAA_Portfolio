import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-400">
        {/* Contact Me */}
      </h1>

      <motion.div
        className="space-y-6 text-lg bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.p whileHover={{ scale: 1.05 }} className="flex items-center">
          📞 <strong className="ml-2">Mobile:</strong> 09169045914
        </motion.p>

        <motion.p whileHover={{ scale: 1.05 }} className="flex items-center">
          📧 <strong className="ml-2">Email:</strong>
          <a
            href="mailto:redondomikej@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition ml-2"
          >
            redondomikej@gmail.com
          </a>
        </motion.p>

        <motion.p whileHover={{ scale: 1.05 }} className="flex items-center">
          💼 <strong className="ml-2">LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/mike-e-j-redondo-735977209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition ml-2"
          >
            linkedin.com/in/mike-e-j-redondo-735977209
          </a>
        </motion.p>

        <motion.p whileHover={{ scale: 1.05 }} className="flex items-center">
          🖥️ <strong className="ml-2">GitHub:</strong>
          <a
            href="https://github.com/redondomikej"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition ml-2"
          >
            github.com/redondomikej
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
