import { motion } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import HeroSVG from "./HeroSVG";

const Hero = () => {
  return (
    <div className="hero relative h-[92vh] w-full flex flex-col justify-around items-center overflow-hidden px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16">
      {/* Text */}
      <div className="w-full flex flex-col justify-center items-center gap-6 flex-1 whitespace-nowrap lg:items-start">
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
          className="hero__name relative font-bold text-4xl bg-gradient-to-r from-[#9d9d9d] via-white to-[#9d9d9d] bg-clip-text text-transparent sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          {/* Glow behind text */}
          <motion.span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-10 rounded-full bg-gradient-to-r from-[#9d9d9d] via-white to-[#9d9d9d] blur-xl opacity-20 z-0 lg:w-[70%]"></motion.span>
          {/* Text on top */}
          Victor Martinez
        </motion.h1>

        <motion.h2
          className="hero__sub font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl"
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
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          >
            <a
              href="#projects"
              title="Projects"
              aria-label="Go to projects section"
              className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-[#9d9d9d] via-white to-[#9d9d9d] hover:scale-105 transform transition-transform duration-200"
            >
              <span className="block bg-black rounded-md px-4 py-2 text-white text-sm sm:text-xl">
                View My Work
              </span>
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
              className="relative inline-block rounded-lg p-[2px] bg-gradient-to-r from-[#9d9d9d] via-white to-[#9d9d9d] hover:scale-105 transform transition-transform duration-200"
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
            href="https://www.linkedin.com/in/victormmartinezjr/"
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
      <div className="w-full flex justify-center items-center flex-1 overflow-hidden">
        <HeroSVG />
      </div>
    </div>
  );
};

export default Hero;
