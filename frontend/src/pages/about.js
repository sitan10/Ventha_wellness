import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 px-6 bg-[#f9fbf9]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-light text-green-900 mb-8">
            Our Story
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Ventha Wellness was founded with a vision to bring together
            ancient wisdom and modern wellness practices. Our mission is
            to create a calm, nurturing space where healing happens
            naturally — for the body, mind, and soul.
          </p>
        </motion.div>
      </section>
    </>
  );
}
