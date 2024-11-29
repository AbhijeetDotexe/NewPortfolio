import React from "react";
import { motion } from "framer-motion";

const navItems = ["Skills", "About", "Projects", "Blog"];

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function NavBar() {
  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const navbarHeight = 64; // Adjust this value if you change the navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className="bg-white shadow-md h-16 flex items-center sticky top-0 left-0 right-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <ul className="flex justify-center space-x-8 w-full">
        {navItems.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <motion.a
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-600 font-medium text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default NavBar;
