import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const services = [
  {
    title: "Yoga Therapies",
    slug: "yoga",
    image: "/images/services/yoga.jpg",
  },
  {
    title: "Meditation Therapies",
    slug: "meditation",
    image: "/images/services/meditation.jpg",
  },
  {
    title: "Pranayama Therapies",
    slug: "pranayama",
    image: "/images/services/pranayama.jpg",
  },
  {
    title: "Student Wellness",
    slug: "student",
    image: "/images/services/student.jpg",
  },
  {
    title: "Post Lunch Therapies",
    slug: "post-lunch",
    image: "/images/services/post-lunch.jpg",
  },
  {
    title: "Yoga Pilates",
    slug: "pilates",
    image: "/images/services/pilates.jpg",
  },
  {
    title: "Weight Management",
    slug: "weight",
    image: "/images/services/weight.jpg",
  },
  {
    title: "Diet & Nutrition",
    slug: "diet",
    image: "/images/services/diet.jpg",
  },
  {
    title: "Chakra Healing",
    slug: "chakra",
    image: "/images/services/chakra.jpg",
  },
  {
    title: "Sudarshan Kriya",
    slug: "sudarshan-kriya",
    image: "/images/services/sudarshan-kriya.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen text-gray-800 overflow-hidden">

      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/ds1gudova/video/upload/v1767704674/programs-bg_jfbwob.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[6px] -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-light text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
        >
          Our Wellness Services
        </motion.h1>

        <p
          className="mt-4 max-w-2xl mx-auto text-white/90"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
        >
          Explore our specialized wellness services designed to nurture your body,
          mind and overall lifestyle.
        </p>
      </section>

      {/* Services Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-52 w-full overflow-hidden">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

              <div className="p-6">
                <h3 className="text-xl text-green-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700">
                  {service.desc}
                </p>

                <Link
  href={`/services/${service.slug}`}
  className="mt-4 inline-block text-sm text-green-700 font-medium hover:underline"
>
  See More →
</Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}