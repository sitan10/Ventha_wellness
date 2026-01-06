import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ChampionKidsProgram() {
  const items = [
    "Child Growth & Development Program",
    "Kids Immunity Boost Program",
    "Learning & Focus Enhancement",
    "Healthy Posture & Body Strength Training",
    "Pediatric Nutrition Guidance",
    "Screen-Time & Lifestyle Management Program",
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
          Champion Kids Wellness Program
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          A holistic wellness program designed to support children’s growth,
          immunity, learning ability, posture, nutrition, and healthy lifestyle habits.
        </p>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
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
