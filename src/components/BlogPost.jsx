import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function BlogPost() {
  return (
    <motion.section
      className="py-20 px-6 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          variants={itemVariants}
        >
          <div className="p-6">
            <motion.h3
              className="text-2xl font-semibold mb-2"
              variants={itemVariants}
            >
              3 Months of Web Development
            </motion.h3>
            <motion.p
              className="text-sm text-gray-500 mb-2"
              variants={itemVariants}
            >
              What I've learned in 3 months of web development
            </motion.p>
            <motion.p
              className="text-sm text-gray-400 mb-4"
              variants={itemVariants}
            >
              Nov 28, 2024 • 3 min read
            </motion.p>
            <motion.p className="text-gray-600" variants={itemVariants}>
              I have been involved in web development for a short time, and it's
              been an incredible journey. In just three months, I've learned so
              much about frontend and backend technologies, best practices, and
              the ever-evolving ecosystem of web development...
            </motion.p>
            <motion.button
              className="text-blue-600 hover:text-blue-800 mt-4"
              variants={itemVariants}
            >
              Read more
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="text-center mt-8" variants={itemVariants}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More Posts
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BlogPost;
