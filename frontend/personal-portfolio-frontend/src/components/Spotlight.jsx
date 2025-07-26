import { motion } from "framer-motion";
const Spotlight = ({ position, rotate }) => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none z-0 lg:hidden">
      <motion.div
        className="relative w-[20%] h-[60vh] bg-purple-700 blur-3xl lg:left-0 lg:-top-[15rem] lg:-translate-x-0 lg:-rotate-45 lg:w-[40%] lg:h-[100vh]"
        style={{
          left: position,
          transform: `translateX(-${position})`,
          rotate: rotate ? rotate : "0deg",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Spotlight;
