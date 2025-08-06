import { motion } from "framer-motion";
const Spotlight = () => {
  return (
    <div className="absolute top-0 w-full pointer-events-none z-0">
      <motion.div
        className="relative  bg-purple-700 left-0 -rotate-45 -translate-y-90 w-[20%] h-[100vh] blur-[120px]"
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Spotlight;
