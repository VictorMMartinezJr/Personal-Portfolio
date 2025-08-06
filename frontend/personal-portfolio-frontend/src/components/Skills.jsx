import { motion, useInView } from "framer-motion";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import springboot from "../assets/springboot.svg";
import mysql from "../assets/mysql.svg";
import { useRef } from "react";
import tailwindcss from "../assets/tailwindcss.svg";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  return (
    <div
      id="skills"
      className="h-auto w-full flex flex-col justify-center items-center px-4 overflow-hidden mt-12 sm:my-20 lg:px-8 xl:px-12 2xl:px-16"
    >
      <div className="flex flex-col justify-center items-center text-center lg:flex-1">
        <SectionTitle title="Skills" />
        <p className="my-4 px-4 text-lg sm:text-2xl">
          I specialize in <i>full-stack development</i> with a strong foundation
          in both front-end and back-end technologies. Here's a snapshot of the
          tools and languages I use:
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Frontend:
          </span>{" "}
          HTML, CSS, Tailwind CSS, JavaScript, React
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Backend:
          </span>{" "}
          Java, Spring Boot
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Database:
          </span>{" "}
          MySQL
          <br />
          <span className="font-semibold mt-2 inline-block sm:mt-4 lg:mt-6">
            Version Control & Tools:
          </span>{" "}
          Git, GitHub, Netlify, Framer-Motion
          <br />
        </p>
      </div>
      <ul
        className="grid grid-cols-3 gap-4 justify-center items-center md:grid-cols-4 xl:grid-cols-8 xl:grid-rows-1 w-full"
        ref={skillsRef}
        aria-label="Skills logos"
      >
        <li className="flex justify-center items-center">
          <motion.img
            src={html}
            alt="HTML logo"
            aria-label="HTML"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={css}
            alt="CSS logo"
            aria-label="CSS"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={javascript}
            alt="JavaScript logo"
            aria-label="JavaScript"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={react}
            alt="React logo"
            aria-label="React"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={tailwindcss}
            alt="TailwindCSS logo"
            aria-label="TailwindCSS"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={java}
            alt="Java logo"
            aria-label="Java"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={springboot}
            alt="Springboot logo"
            aria-label="Springboot"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          />
        </li>
        <li className="flex justify-center items-center">
          <motion.img
            src={mysql}
            alt="mySQL logo"
            aria-label="mySQL"
            className="sm:max-w-[150px] sm:max-h-[150px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
