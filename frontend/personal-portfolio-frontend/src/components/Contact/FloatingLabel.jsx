import { motion } from "framer-motion";

const FloatingLabel = ({ labelText, floating }) => {
  return (
    <motion.label
      className="absolute pointer-events-none text-gray-300 top-1/2 translate -translate-y-1/2"
      initial={false}
      animate={{
        top: floating ? "-15px" : "25px",
        fontSize: floating ? ".80rem" : "1rem",
        left: floating ? "16px" : "32px",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {labelText}
    </motion.label>
  );
};

export default FloatingLabel;
