import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RocketSVG from "./RocketSVG";

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <nav className="w-full h-[8vh] relative flex justify-between items-center border-2 border-red-500 text-center text-white px-2">
      <div className="flex justify-center items-center">
        <motion.div
          animate={{
            rotate: menuClicked ? 180 : 0,
            x: menuClicked ? [0, 150, 160] : 0,
            y: menuClicked ? [0, 0, 800] : 0,
            scale: menuClicked ? [1, 1.5, 8] : 1,
          }}
          transition={{
            rotate: { duration: 0.5 },
            x: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
            y: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
            scale: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
          }}
        >
          <RocketSVG menuClicked={menuClicked} />
        </motion.div>
        <label>Victor</label>
      </div>

      {/* Menu Button */}
      <button className="cursor-pointer z-20" onClick={handleClick}>
        {/* Line 1 */}
        <motion.div
          className="w-6 h-1 m-1"
          style={{ backgroundColor: menuClicked ? "black" : "white" }}
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
          className="w-6 h-1 m-1"
          style={{ backgroundColor: menuClicked ? "black" : "white" }}
          animate={{
            rotate: menuClicked ? 45 : 0,
            x: menuClicked ? -5 : 0,
            y: menuClicked ? -8 : 0,
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </button>

      {/* Nav links */}
      <AnimatePresence mode="wait">
        {menuClicked && (
          <motion.ul
            key={"menu"}
            className="absolute w-full h-[95vh] left-0 top-0 bg-white text-black flex flex-col justify-around items-center"
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
