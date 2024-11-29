import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import NetworkAnimation from "./NetworkAnimation";

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

function Hero() {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: FaServer },
    { name: "MongoDB", icon: FaDatabase },
    { name: "AWS", icon: FaAws },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "React", icon: FaReact },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <NetworkAnimation />
      <motion.div
        className="relative z-10 mt-16" // Added mt-16 to account for navbar height
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-8xl font-bold mb-8 text-gray-800"
          variants={itemVariants}
        >
          Abhijeet Rana
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon className="w-12 h-12 text-blue-600 mb-2" />
              </motion.div>
              <span className="text-sm text-gray-600">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
