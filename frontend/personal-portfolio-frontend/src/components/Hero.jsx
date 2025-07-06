import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WelcomeSVG from "./WelcomeSVG";
import { assets } from "../assets/assets";

const Hero = () => {
  const [loadcontent, setLoadContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadContent(true);
    }, 500);
  }, []);

  return (
    <motion.div className="relative h-[92vh] w-full flex flex-col justify-around items-center overflow-hidden px-4 lg:flex-row lg:text-left lg:px-8 xl:px-12 2xl:px-16">
      {/* Text */}
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-6 flex-1 lg:items-start"
        initial={{ opacity: 0 }}
        animate={{
          opacity: loadcontent ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <p className="text-center z-10 sm:text-xl lg:text-left">
          Hi there, I'm
        </p>
        <h1 className="font-bold text-3xl text-blue-600 sm:text-4xl xl:text-6xl 2xl:text-8xl">
          Victor Martinez
        </h1>
        <h2 className="text-gray-400 font-bold text-xl sm:text-2xl xl:text-4xl 2xl:text-6xl">
          Full Stack Developer
        </h2>
        <p className="text-center text-gray-400 max-w-xl sm:text-xl lg:text-left">
          Passion for building real world solutions. Whether it's solving
          algorithms, designing responsive UIs, or architecting scalable
          systems, I'm all in. Every line of code I write pushes me closer to
          mastering this craft, and I'm just getting started.
        </p>

        {/* CTA buttons */}
        <div>
          <button className="bg-blue-600 px-4 py-2 mr-4 rounded-xl cursor-pointer transform transition-transform duration-200 hover:scale-105 xl:text-xl">
            View My Work
          </button>
          <button className="border-2 border-blue-600 px-4 py-2 rounded-xl cursor-pointer transform transition-transform duration-200 hover:scale-105 xl:text-xl">
            Get In Touch
          </button>
        </div>

        {/* Icons */}
        <div className="flex">
          <a href="#" title="LinkedIn">
            <img
              src={assets.linkedin}
              alt="Linkedin icon"
              className="w-4 h-4 lg:w-7 lg:h-7 transform transition-transform duration-200 hover:scale-150 mr-4"
            />
          </a>
          <a href="#" title="Github">
            <img
              src={assets.github}
              alt="Linkedin icon"
              className="w-4 h-4 lg:w-7 lg:h-7 transform transition-transform duration-200 hover:scale-150"
            />
          </a>
        </div>
      </motion.div>

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
    </motion.div>
  );
};

export default Hero;
