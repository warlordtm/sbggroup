import { motion } from "framer-motion";

const CTA = ({ headline, buttonText, buttonLink }) => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {headline}
      </motion.h2>
      <motion.a
        href={buttonLink}
        className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTA;
