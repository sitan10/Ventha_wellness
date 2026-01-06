import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const programDetails = {
  asthma: {
    title: "Asthma Relief Program",
    desc:
      "A holistic, natural approach to improve breathing, lung strength, and long-term respiratory wellness.",
    points: [
      "Breathing Training & Lung Improvement",
      "Mucus & Airway Cleaning Therapy",
      "Lifestyle & Environmental Coaching",
      "Guided Pranayama & Yogic Breathing",
      "Stress-Linked Asthma Management",
      "Pediatric Asthma Support Program",
    ],
  },

  detox: {
    title: "Detox Program",
    desc:
      "Gentle detoxification methods that cleanse the body and restore vitality.",
    points: [
      "Full Body Detox",
      "Liver & Gut Detox",
      "Heavy Metal Detox",
      "Hormonal Detox",
      "Ayurvedic Panchakarma Detox",
      "Seasonal Detox Plans",
    ],
  },
  
  weight: {
  title: "Weight Management Program",
  desc:
    "A structured, holistic program designed to support healthy weight loss, weight gain, and metabolic balance through natural methods.",
  points: [
    "Weight Loss Program",
    "Fat Reduction & Body Shaping",
    "Post-Pregnancy Weight Management",
    "Weight Gain & Muscle Building Program",
    "Metabolism Reset Program",
    "Obesity Reversal Program",
  ],
},
};

export default function ProgramDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const program = programDetails[slug];
  if (!program) return null;

  return (
    <div className="min-h-screen bg-[#f9fbf9]">
      <Navbar showBack />

      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-green-900"
        >
          {program.title}
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          {program.desc}
        </p>
      </section>

      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {program.points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
