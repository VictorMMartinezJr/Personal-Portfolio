import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
      <motion.header
          className="w-full"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <nav
          className="nav relative h-[8vh] flex items-center w-full px-2 lg:px-8 xl:px-12 2xl:px-16"
        >
          <div className="flex items-center gap-2 flex-1">
            <p className="hidden sm:block sm:font-semibold sm:text-xl">Victor</p>
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
                className="absolute overflow-hidden h-[100vh] w-full bg-gradient-to-b from-white/10 to-black/100 backdrop-blur-md flex flex-col justify-around top-0 left-1/2 -translate-x-1/2 text-center font-bold z-20 text-xl md:hidden"
                initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -100, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <li onClick={handleClick}>
                  <a
                    href="#home"
                    className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
                  >
                    Home
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a
                    href="#about"
                    className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
                  >
                    About
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a
                    href="#skills"
                    className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
                  >
                    Skills
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a
                    href="#projects"
                    className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
                  >
                    Projects
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a
                    href="#contact"
                    className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
                  >
                    Contact
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center gap-4 items-center text-lg lg:text-xl lg:gap-8 xl:gap-12 font-semibold flex-1">
            <li>
              <a
                href="#home"
                className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-white before:-bottom-1 before:left-0 before:transition-all hover:before:w-full"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Icons & Button */}
          <div className="hidden md:flex md:justify-end md:items-center md:gap-2 md:text-lg md:font-semibold md:flex-1 xl:gap-4">
            <a
              href="#contact"
              title="Contact"
              aria-label="Go to contact form"
              className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-[#9d9d9d] via-white to-[#9d9d9d] hover:scale-105 transform transition-transform duration-200"
            >
              <span className="block bg-black rounded-md px-4 py-2 text-white text-sm sm:text-xl">
                Get In Touch
              </span>
            </a>
          </div>
        </nav>
        </motion.header>
  );
};

export default Nav;
