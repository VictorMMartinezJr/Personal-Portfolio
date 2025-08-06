import { motion } from "framer-motion";
import WelcomeSVG from "./WelcomeSVG";
import { assets } from "../assets/assets";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { toast } from "react-toastify";

const Hero = () => {
  return (
    <div className="hero relative h-[92vh] w-full flex flex-col justify-around items-center overflow-hidden px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16">
      {/* Text */}
      <div className="w-full flex flex-col justify-center items-center gap-6 flex-1 lg:items-start">
        <motion.p
          className="text-center z-10 sm:text-xl lg:text-left xl:text-2xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          Hi there! I'm
        </motion.p>
        <motion.h1
          className="hero__name font-bold text-4xl bg-gradient-to-b from-white via-pink-300 to-purple-700 bg-clip-text text-transparent sm:text-5xl 2xl:text-8xl"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          Victor Martinez
        </motion.h1>
        <motion.h2
          className="hero__sub bg-gradient-to-b from-pink-300  to-white bg-clip-text text-transparent font-bold text-2xl sm:text-3xl 2xl:text-6xl"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        >
          Full Stack Developer
        </motion.h2>

        {/* CTA buttons */}
        <div className="flex gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
          >
            <a
              href="#projects"
              title="Projects"
              aria-label="Go to projects section"
              className="inline-block bg-purple-700 border-2 border-purple-700 px-4 py-2 rounded-lg cursor-pointer text-white transform transition-transform duration-200 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.6)] text-sm sm:text-xl"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          >
            <a
              href="#contact"
              title="Contact"
              aria-label="Go to contact form"
              className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-white via-purple-700 to-pink-500 hover:scale-105 transform transition-transform duration-200"
            >
              <span className="block bg-black rounded-md px-4 py-2 text-white text-sm sm:text-xl">
                Get In Touch
              </span>
            </a>
          </motion.div>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="cursor-pointer"
          >
            <motion.div
              className="transform transition-transform duration-200 hover:scale-150"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
            >
              <CiLinkedin className="w-9 h-9 xl:w-11 xl:h-11" />
            </motion.div>
          </a>
          <a
            href="https://github.com/VictorMMartinezJr"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="cursor-pointer"
          >
            <motion.div
              className="transform transition-transform duration-200 hover:scale-150"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            >
              <FaGithubAlt className="w-9 h-9 xl:w-11 xl:h-11" />
            </motion.div>
          </a>
        </div>
      </div>

      {/* Image */}
      <motion.div
        className="w-full flex justify-center items-center flex-1 overflow-hidden"
        animate={{
          y: [0, -10, 0], // float up, down
          x: [0, 5, 0], //  side drift
          rotate: [0, 1, 0, -1, 0], //  tilt
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <WelcomeSVG />
      </motion.div>
    </div>
  );
};

export default Hero;
