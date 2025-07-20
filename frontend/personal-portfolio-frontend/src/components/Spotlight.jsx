import { motion } from "framer-motion";
const Spotlight = () => {
  return (
    <>
      <motion.div
        initial={{ y: -700 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none z-0 opacity-50 lg:hidden"
      >
        <div className="relative left-1/2 -translate-x-1/2 w-[40%] h-[60vh] bg-blue-600 blur-3xl lg:left-0 lg:-top-[15rem] lg:-translate-x-0 lg:-rotate-45 lg:w-[40%] lg:h-[100vh]" />
      </motion.div>
    </>
  );
};

export default Spotlight;
