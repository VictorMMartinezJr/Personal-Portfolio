import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionTitle = ({ title }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <motion.h1
      className="sectiontitle font-bold text-5xl mb-6 text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] sm:text-6xl 2xl:text-8xl sm:mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={titleRef}
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;
