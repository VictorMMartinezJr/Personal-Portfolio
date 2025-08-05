import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WelcomeSVG from "./WelcomeSVG";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[92vh] w-full flex flex-col justify-around items-center overflow-hidden px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16">
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
          Hi there, I'm
        </motion.p>
        <motion.h1
          className="font-bold text-3xl bg-gradient-to-b from-white via-pink-300 to-purple-700 bg-clip-text text-transparent sm:text-6xl 2xl:text-8xl"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        >
          Victor Martinez
        </motion.h1>
        <motion.h2
          className="bg-gradient-to-b from-pink-300  to-white bg-clip-text text-transparent font-bold text-xl sm:text-4xl 2xl:text-6xl"
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
            animate={{
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
          >
            <div className="p-0.5 rounded-xl">
              <button className="bg-purple-700 border-2 border-purple-700 px-4 py-2 rounded-xl cursor-pointer text-white transform transition-transform duration-200 hover:scale-105 sm:text-xl">
                View My Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          >
            <div className="p-0.5 bg-gradient-to-r from-white via-purple-700 to-pink-500 rounded-xl">
              <button className="border-2 border-blue-600 px-4 py-2 rounded-xl cursor-pointer bg-black text-white transform transition-transform duration-200 hover:scale-105 sm:text-xl">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>

        {/* Icons */}
        <div className="flex">
          <a href="#" title="LinkedIn">
            <motion.img
              src={assets.linkedin}
              alt="Linkedin icon"
              className="w-7 h-7 transform transition-transform duration-200 hover:scale-150 mr-4"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
            />
          </a>
          <a href="#" title="Github">
            <motion.img
              src={assets.github}
              alt="Linkedin icon"
              className="w-7 h-7 transform transition-transform duration-200 hover:scale-150"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            />
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
