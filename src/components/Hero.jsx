import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaAws,
  // FaNginx,
  // FaRedis,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import NetworkAnimation from "./NetworkAnimation";

function Hero() {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: FaServer },
    { name: "MongoDB", icon: FaDatabase },
    { name: "AWS", icon: FaAws },
    // { name: "Nginx", icon: FaNginx },
    // { name: "Redis", icon: FaRedis },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "React", icon: FaReact },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      <NetworkAnimation />

      <h1 className="text-9xl font-bold mb-8 text-gray-900">Abhijeet Rana</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-3xl">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <skill.icon className="w-12 h-12 text-blue-600 mb-2" />
            <span className="text-sm text-gray-600">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
