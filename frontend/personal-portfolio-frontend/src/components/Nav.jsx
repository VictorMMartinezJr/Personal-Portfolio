import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "../assets/assets";

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <motion.nav
      className="relative h-[8vh] flex items-center w-full px-2 lg:px-8 xl:px-12 2xl:px-16"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 flex-1">
        <p className="hidden sm:block sm:font-semibold">Victor</p>
        <img
          src={assets.navLogo}
          className="h-10 w-10 md:h-14 md:w-14 xl:h-16 xl:w-16"
          alt="Victor Martinez coding icon"
        />
      </div>

      {/* Menu Button */}
      <button
        aria-label="Toggle menu"
        className="cursor-pointer z-30 md:hidden"
        onClick={handleClick}
      >
        {/* Line 1 */}
        <motion.div
          className="w-6 h-1 m-1 bg-white"
          animate={{
            rotate: menuClicked ? -45 : 0,
            x: menuClicked ? -5 : 0,
            y: menuClicked ? 8 : 0,
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* Line 2 */}
        <motion.div
          className="w-6 h-1 m-1 bg-white"
          animate={{ opacity: menuClicked ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* Line 3 */}
        <motion.div
          className="w-6 h-1 m-1 bg-white"
          animate={{
            rotate: menuClicked ? 45 : 0,
            x: menuClicked ? -5 : 0,
            y: menuClicked ? -8 : 0,
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuClicked && (
          <motion.ul
            key={"menu"}
            className="absolute overflow-hidden h-[40vh] w-full bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-md  text-gray-300 flex flex-col justify-around top-0 left-1/2 -translate-x-1/2 text-center z-20 md:hidden"
            initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -100, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-4 items-center text-lg font-semibold flex-1">
        <li>
          <a
            href="#home"
            className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-blue-600 before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-blue-600 before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-blue-600 before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-blue-600 before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-blue-600 before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Icons & Button */}
      <ul className="hidden md:flex justify-end items-center gap-4 text-lg font-semibold flex-1">
        <li>
          <a href="#">
            <img
              src={assets.linkedin}
              alt="Linkedin icon"
              className="w-4 h-4 md:w-7 md:h-7 transform transition-transform duration-200 hover:scale-150"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={assets.github}
              alt="Github icon"
              className="w-4 h-4 md:w-7 md:h-7 transform transition-transform duration-200 hover:scale-150"
            />
          </a>
        </li>
        <li>
          <button className="bg-blue-600 px-4 py-2 rounded-xl cursor-pointer transform transition-transform duration-200 hover:scale-105">
            Lets Chat!
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
