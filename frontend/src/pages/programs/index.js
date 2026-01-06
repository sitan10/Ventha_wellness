import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Asthma Relief Program",
    slug: "asthma",
    image: "/images/programs/asthma.jpg",
    desc: "Breathing-focused therapies to improve lung strength.",
  },
  {
    title: "Detox Program",
    slug: "detox",
    image: "/images/programs/detox.jpg",
    desc: "Gentle cleansing methods to restore balance.",
  },
  {
    title: "Alpha Wellness",
    slug: "alpha",
    image: "/images/programs/alpha.jpg",
    desc: "Performance-driven wellness and discipline.",
  },
  {
    title: "Queen Wellness",
    slug: "queen",
    image: "/images/programs/queen.jpg",
    desc: "Hormonal balance, emotional wellness, and inner vitality for women.",
  },
  {
    title: "Golden 45+ Wellness",
    slug: "golden45",
    image: "/images/programs/golden45.jpg",
    desc: "Age-supportive care focused on mobility, immunity, and calm living.",
  },
  {
    title: "Champion Kids Wellness",
    slug: "championkids",
    image: "/images/programs/championkids.jpg",
    desc: "Healthy habits, focus, and fitness for growing children.",
  },
  {
    title: "Weight Management",
    slug: "weight",
    image: "/images/programs/weight.jpg",
    desc: "Balanced nutrition and movement for sustainable weight control.",
  },
  {
    title: "Stress Relief Program",
    slug: "stress",
    image: "/images/programs/stress.jpg",
    desc: "Calming practices to release stress and restore mental peace.",
  },
  {
    title: "Corporate Wellness",
    slug: "corporate",
    image: "/images/programs/corporate.jpg",
    desc: "Workplace wellness programs for productivity and well-being.",
  },
  {
    title: "Fitness Programs",
    slug: "fitness",
    image: "/images/programs/fitness.jpg",
    desc: "Strength, endurance, and flexibility training for all levels.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="relative w-full min-h-screen text-gray-800 overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/ds1gudova/video/upload/v1767704674/programs-bg_jfbwob.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Light overlay (video clearly visible) */}
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[6px] -z-10" />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
        >
          Our Wellness Programs
        </motion.h1>

        <p
          className="mt-4 max-w-2xl mx-auto text-white/90"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
        >
          Holistic programs thoughtfully designed to support health, balance,
          strength, and long-term well-being.
        </p>
      </section>

      {/* PROGRAMS GRID */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl text-green-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{p.desc}</p>

                <a
                  href={`/programs/${p.slug}`}
                  className="mt-4 inline-block text-sm text-green-700 font-medium hover:underline"
                >
                  See More →
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}
