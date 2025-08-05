import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Project = ({ skills, description, imgSrc }) => {
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true });

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center bg-black rounded-lg mb-4 border-2 border-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.6)] shadow-purple-700"
      ref={projectRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isProjectInView ? 1 : 0,
        y: isProjectInView ? 0 : 50,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="my-4 font-bold italic text-xl xl:text-2xl">NavAid</h2>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="border-2 border-purple-700 rounded-md px-2">
            {skill}
          </span>
        ))}
      </div>
      <p className="px-4 my-4 md:text-xl">{description}</p>
      <img src={imgSrc} alt="" className="px-4" />
    </motion.div>
  );
};

export default Project;
