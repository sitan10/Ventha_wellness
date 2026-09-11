import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const diseases = [
  { title: "Menstrual Disorder", slug: "menstrual-disorder" },
  { title: "Menopause", slug: "menopause" },
  { title: "PCOD / PCOS", slug: "pcod-pcos" },
  { title: "Infertility", slug: "infertility" },
  { title: "Acidity", slug: "acidity" },
  { title: "Insomnia", slug: "insomnia" },
  { title: "Migraine", slug: "migraine" },
  {
    title: "Hyperthyroidism / Hypothyroidism",
    slug: "hyperthyroidism-hypothyroidism",
  },
  { title: "Gastric & Acidity", slug: "gastric-acidity" },
  { title: "Frozen Shoulder", slug: "frozen-shoulder" },
  { title: "Cervical Spondylosis", slug: "cervical-spondylosis" },
  { title: "Hypermobility", slug: "hypermobility" },
  { title: "Knee Pain", slug: "knee-pain" },
  { title: "Back Pain", slug: "back-pain" },
  { title: "Sinusitis Treatment", slug: "sinusitis-treatment" },
  { title: "Scoliosis", slug: "scoliosis" },
  { title: "Kidney Dysfunction", slug: "kidney-dysfunction" },
  
  { title: "Asthma", slug: "asthma" },
  { title: "Yoga Nidra for Stress Relief", slug: "stress-relief" },
  { title: "Arthritis", slug: "arthritis" },
  {
    title: "Cancer Therapy (Pre & Post Treatment)",
    slug: "cancer-therapy",
  },
  { title: "Post Surgery Therapy", slug: "post-surgery" },
  { title: "Flat Foot", slug: "flat-foot" },
  { title: "PostNatal care", slug: "postnatal-care" },
];

export default function YogaTherapies() {
  return (
    <div className="w-full min-h-screen bg-[#f9fbf9] text-gray-800">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-green-900"
        >
          Yoga Therapies
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Therapeutic yoga practices designed to help manage lifestyle
          disorders, improve mobility, enhance recovery and support holistic
          healing.
        </p>
      </section>

      {/* THERAPIES GRID */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {diseases.map((item, i) => (
            <Link
              key={item.slug}
              href={`/services/yoga/${item.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 text-center h-full"
              >
                <div className="text-5xl mb-5">
                  🧘
                </div>

                <h3 className="text-green-900 font-semibold text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  Specialized Yoga Therapy
                </p>

                <div className="mt-6 text-green-700 font-medium">
                  Know More →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}