// src/pages/programs/queen.js

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function QueenWellnessProgram() {
  const programs = [
    "Women’s Hormonal Balance Program",
    "PCOD / PCOS Wellness Management",
    "Thyroid Health & Weight Balance",
    "Prenatal & Postnatal Wellness",
    "Emotional & Mental Wellness Program",
    "Skin, Hair & Beauty Support",
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      <Navbar />

      {/* HEADER */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-green-900"
        >
          Queen Wellness Program
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Holistic wellness programs designed specifically to support women’s
          health, balance, and inner vitality.
        </p>
      </section>

      {/* PROGRAM LIST */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((item, i) => (
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
