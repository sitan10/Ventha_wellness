import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ServiceTemplate({ data }) {
 const {
  category,
  title,
  subtitle,
  about,
  symptoms,
  treatment,
  contact,
  image,
} = data;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F8F5] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
         <Link
  href={category === "student" ? "/services/student" : "/services/yoga"}
  className="inline-flex items-center text-green-700 font-medium hover:underline mb-10"
>
  ← {category === "student" ? "Back to Student Wellness" : "Back to Yoga Therapies"}
</Link>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-green-900">
              {title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              {subtitle}
            </p>

            <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Book Consultation
            </button>
          </motion.section>
{/* ================= QUICK FACTS ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-24"
>

  <div className="text-center mb-12">

    <h2 className="text-3xl md:text-4xl font-bold text-green-900">
      Quick Facts
    </h2>

    <p className="mt-3 text-gray-600">
      A quick overview of this condition.
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">⏳</div>
      <h3 className="font-semibold text-green-900">
        Duration
      </h3>
      <p className="mt-2 text-gray-600">
        3–6 Months
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">👩</div>
      <h3 className="font-semibold text-green-900">
        Suitable For
      </h3>
      <p className="mt-2 text-gray-600">
        Women
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">🧘</div>
      <h3 className="font-semibold text-green-900">
        Therapy
      </h3>
      <p className="mt-2 text-gray-600">
        Yoga & Lifestyle
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">💻</div>
      <h3 className="font-semibold text-green-900">
        Consultation
      </h3>
      <p className="mt-2 text-gray-600">
        Online / Offline
      </p>
    </div>

  </div>

</motion.section>
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                {about.heading}
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                {about.description}
              </p>
            </div>

            <div className="bg-green-100 rounded-3xl h-[350px] flex items-center justify-center">
              <span className="text-green-700 text-lg">
                Disease Image
              </span>
            </div>
          </motion.section>

          {/* Symptoms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
              Common Symptoms
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
                >
                  <p className="text-gray-700 font-medium">
                    {symptom}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Treatment */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              {treatment.heading}
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-10">
              {treatment.description}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.points.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <h3 className="font-semibold text-green-800">
                    {point}
                  </h3>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-700 rounded-3xl text-white text-center py-16 px-8"
          >
            <h2 className="text-4xl font-bold mb-6">
              {contact.heading}
            </h2>

            <p className="text-lg max-w-2xl mx-auto mb-10">
              {contact.description}
            </p>

            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </motion.section>

        </div>
      </main>

      <Footer />
    </>
  );
}