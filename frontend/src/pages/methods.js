import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const methods = [
  "Yoga Therapy",
  "Breathwork & Pranayama",
  "Ayurvedic Healing",
  "Mindfulness & Meditation",
  "Nutrition-Based Healing",
  "Lifestyle Correction Therapy",
];

export default function MethodsPage() {
  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      <Navbar />

      {/* HEADER */}
      <section className="pt-36 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-green-900">
          Our Methods
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Time-tested and holistic methods designed to heal mind, body, and soul.
        </p>
      </section>

      {/* CARDS */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-md text-center"
            >
              <h3 className="text-green-900 font-medium">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
