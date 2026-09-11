import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const universe = [
  "Community Healing Sessions",
  "Wellness Talks & Events",
  "Expert Consultations",
  "Guided Online Programs",
  "Support Groups",
  "Learning Resources",
];

export default function VenthaUniversePage() {
  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      <Navbar />

      {/* HEADER */}
      <section className="pt-36 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-green-900">
          Ventha Universe
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          A complete wellness ecosystem designed to support your journey.
        </p>
      </section>

      {/* CARDS */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {universe.map((item, i) => (
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
