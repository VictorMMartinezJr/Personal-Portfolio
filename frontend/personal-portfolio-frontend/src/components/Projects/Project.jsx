import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa";

const Project = ({ name, skills, description, imgSrc, GHLink, demoLink }) => {
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true });

  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-[950px] text-center bg-black rounded-lg mb-4 border-2 border-white shadow-[0_0_35px_rgba(168,85,247,0.5)]"
      ref={projectRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isProjectInView ? 1 : 0,
        y: isProjectInView ? 0 : 50,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="my-4 font-bold italic text-xl xl:text-2xl">{name}</h2>

      {/* Tech used */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="border-2 border-[#9d9d9d] rounded-md px-2 text-lg "
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="px-4 my-4 text-lg flex-1 md:text-xl">{description}</p>
      <img src={imgSrc} alt="" className="px-4" />

      {/* Icons */}
      <div className="w-full flex justify-start my-4 px-4">
        <a
          href={demoLink}
          title="Live demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit live demo"
          className="cursor-pointer"
        >
          <motion.div
            className="w-7 h-7 transform transition-transform duration-200 hover:scale-150 mr-4"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          >
            <FiExternalLink className="w-7 h-7" />
          </motion.div>
        </a>
        <a
          href={GHLink}
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub repository"
          className="cursor-pointer"
        >
          <motion.div
            className="w-7 h-7 transform transition-transform duration-200 hover:scale-150 mr-4"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          >
            <FaGithubAlt className="w-7 h-7" />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
