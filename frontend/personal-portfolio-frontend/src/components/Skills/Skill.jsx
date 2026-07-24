import { motion } from "framer-motion";
const Skill = ({ imgSrc, name, isInView, animationDelay }) => {
  return (
    <li className="flex justify-center items-center">
      <motion.img
        src={imgSrc}
        alt={name}
        aria-label={name}
        className="sm:max-w-[150px] sm:max-h-[150px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: animationDelay }}
      />
    </li>
  );
};

export default Skill;
