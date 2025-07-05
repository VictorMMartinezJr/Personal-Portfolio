import { motion } from "framer-motion";
const Spotlight = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
      >
        <div className="relative left-1/2 -translate-x-1/2 w-[70%] h-[40vh] bg-gradient-to-b from-white/20 to-transparent blur-3xl" />
      </motion.div>
    </>
  );
};

export default Spotlight;
