import { motion } from "framer-motion";

const Services = ({ services }) => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
