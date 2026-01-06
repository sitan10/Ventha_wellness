// src/pages/programs/fitness.js

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function FitnessProgram() {
  const fitnessPacks = [
    "Personal Fitness Transformation Pack",
    "Strength & Conditioning Pack",
    "Yoga Fitness Pack",
    "Athletes Performance Pack",
    "Recovery & Rehabilitation Pack",
    "Complete Lifestyle Fitness Pack",
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-green-900"
        >
          Fitness Packs
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Structured fitness programs designed to improve strength, endurance,
          flexibility, recovery, and overall lifestyle fitness.
        </p>
      </section>

      {/* FITNESS PACKS GRID */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {fitnessPacks.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-10 shadow-md text-center"
            >
              <h3 className="text-green-900 font-medium text-lg">{pack}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
