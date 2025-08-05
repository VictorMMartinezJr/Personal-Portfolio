import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionTitle = ({ title }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <motion.h1
      className="font-bold text-3xl my-4 text-purple-500 sm:text-6xl 2xl:text-8xl sm:my-8"
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
