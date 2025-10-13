import { motion } from "framer-motion";

const Header = ({ title, subtitle }) => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {subtitle}
      </motion.p>
    </header>
  );
};

export default Header;
