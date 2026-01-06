import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function WeightProgram() {
  const weightPrograms = [
    "Weight Loss Program",
    "Fat Reduction & Body Shaping",
    "Post-Pregnancy Weight Management",
    "Weight Gain & Muscle Building Program",
    "Metabolism Reset Program",
    "Obesity Reversal Program",
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      {/* NAVBAR */}
      <Navbar />

      {/* TITLE */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-green-900"
        >
          Weight Management Program
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Structured, holistic programs designed to support healthy weight,
          metabolism, and long-term body balance.
        </p>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {weightPrograms.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
