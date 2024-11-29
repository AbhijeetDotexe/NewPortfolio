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

function AboutMe() {
  return (
    <motion.section
      className="bg-blue-600 text-white py-20 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.p className="text-lg mb-8 text-justify" variants={itemVariants}>
          I am a passionate developer with a strong background in computer
          science. Currently, I'm focused on web development and building
          scalable applications. I enjoy working on backend systems,
          implementing efficient architectures, and optimizing workflows for
          better performance. With hands-on experience in DevOps practices and
          AWS cloud services, I am able to deploy and manage applications with
          high reliability and scalability. I’m always eager to learn new tools
          and technologies that help automate processes and improve the
          development lifecycle. I am excited about building robust and
          maintainable systems, and I look forward to leveraging cloud
          infrastructure to drive innovation in the tech industry.
        </motion.p>
        <motion.button
          className="bg-transparent hover:bg-yellow-400 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
          variants={itemVariants}
        >
          Read More
        </motion.button>
      </div>
    </motion.section>
  );
}

export default AboutMe;
