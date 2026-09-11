import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const wellnessPrograms = [
  {
    title: "Physical Growth",
    slug: "physical-growth",
    icon: "🌱",
    description:
      "Supporting healthy physical development, strength, flexibility and positive movement habits.",
  },
  {
    title: "Emotional Stability & Mental Wellbeing",
    slug: "emotional-stability",
    icon: "💚",
    description:
      "Helping students develop emotional awareness, confidence, calmness and healthy coping habits.",
  },
  {
    title: "Focus & Concentration",
    slug: "focus-concentration",
    icon: "🎯",
    description:
      "Encouraging mindful learning, better attention and healthier study habits.",
  },
  {
    title: "Boost Brain Power",
    slug: "brain-power",
    icon: "🧠",
    description:
      "Supporting mental alertness, mindfulness and positive routines for learning and wellbeing.",
  },
  {
    title: "Immunity & Energy Booster",
    slug: "immunity-energy-booster",
    icon: "⚡",
    description:
      "Encouraging active living, healthy routines and positive habits that support overall wellbeing.",
  },
  {
    title: "Academic Support & Correction (Tuition)",
    slug: "academic-support-correction",
    icon: "📚",
    description:
      "Personalized academic guidance designed to strengthen learning, understanding and confidence.",
  },
];

export default function StudentWellness() {
  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      <Navbar />

      {/* Hero */}
      {/* Hero */}
<section className="pt-36 pb-24 px-6 text-center">

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4"
  >
    Student Wellness Programs
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold text-green-900"
  >
    Helping Young Minds
    <br />
    <span className="text-green-700">Grow & Thrive</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-8"
  >
    Holistic wellness programs designed to support children's
    physical growth, emotional wellbeing, focus, energy and
    academic development.
  </motion.p>

</section>
      {/* Cards */}
      <section className="pb-28 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >

      <p className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-3">
        Our Programs
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-green-900">
        Explore Student Wellness Programs
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
        Explore our thoughtfully designed programs created to support
        different aspects of a student's growth, wellbeing and learning.
      </p>

    </motion.div>

    {/* Program Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wellnessPrograms.map((item, i) => (
            <Link
              key={item.slug}
              href={`/services/student/${item.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                whileHover={{ y: -8 }}
className="group bg-white rounded-3xl p-8 shadow-md border border-green-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 text-center h-full"              >
                <div className="text-5xl mb-5">
  {item.icon}
</div>

<h3 className="text-green-900 font-semibold text-xl">
  {item.title}
</h3>

<p className="mt-4 text-gray-500 leading-7">
  {item.description}
</p>

<div className="mt-7 inline-flex items-center text-green-700 font-semibold group-hover:gap-3 transition-all">
  Know More
  <span className="ml-2">→</span>
</div>
              </motion.div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}