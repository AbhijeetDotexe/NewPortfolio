import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <AboutMe />
      <BlogPost />
    </div>
  );
}

export default App;
