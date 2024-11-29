import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BlogPost from "./components/BlogPost";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <NavBar />
      <main className="bg-gray-100">
        <section id="skills" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>
        <section id="projects" className="min-h-screen">
          <div className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <p className="text-center text-gray-600">
              Will Add Project later here
            </p>
          </div>
        </section>
        <section id="blog" className="min-h-screen">
          <BlogPost />
        </section>
      </main>
    </motion.div>
  );
}

export default App;
