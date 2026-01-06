import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Home() {
  const programs = [
  {
    title: "Asthma Relief Program",
    slug: "asthma",
    image: "/images/programs/asthma.jpg",
    desc: "Breathing-focused therapies to improve lung strength."
  },
  {
    title: "Detox Program",
    slug: "detox",
    image: "/images/programs/detox.jpg",
    desc: "Gentle cleansing methods to restore balance."
  },
  {
    title: "Alpha Wellness",
    slug: "alpha",
    image: "/images/programs/alpha.jpg",
    desc: "Performance-driven wellness and discipline."
  },
];
  const specialties = [
    { title: "Yoga & Mindfulness", image: "/images/specialties/yoga.jpg" },
    { title: "Ayurvedic Healing", image: "/images/specialties/ayurveda.jpg" },
    { title: "Fitness Training", image: "/images/specialties/fitness.jpg" },
    { title: "Nutrition Guidance", image: "/images/specialties/nutrition.jpg" },
    { title: "Meditation Therapy", image: "/images/specialties/meditation.jpg" },
    { title: "Holistic Therapy", image: "/images/specialties/therapy.jpg" },
  ];

  const testimonials = [
    {
      name: "Ritika Sharma",
      role: "Corporate Professional",
      quote:
        "Ventha Wellness helped me regain balance, energy, and peace in my daily life.",
    },
    {
      name: "Ankit Verma",
      role: "Fitness Enthusiast",
      quote:
        "The holistic approach here is truly transformative, not just physical.",
    },
    {
      name: "Meena Joshi",
      role: "Homemaker",
      quote:
        "I feel calmer, healthier, and more confident after joining Ventha Wellness.",
    },
  ];

  return (
  <div className="w-full h-full text-gray-800">
    <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <Navbar />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/ds1gudova/video/upload/v1767704674/hero_lnofps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-light text-green-900">
            Ventha Wellness
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-700">
            A calming path to balance, healing, and mindful living.
          </p>
        </motion.div>
      </section>

      {/* ================= FLOWING VIDEO BACKGROUND ================= */}
      <section className="relative overflow-hidden">
        <video
          className="fixed inset-0 w-full h-full object-cover -z-10"
          src="/videos/water-sunlight.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ONLY 15 BLUR */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[15px] -z-10" />

        {/* ================= PROGRAMS ================= */}
       <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="py-24 px-6"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-4xl font-light text-green-900 mb-16">
      Our Wellness Programs
    </h2>

    {/* Program Cards */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {programs.slice(0, 3).map((p, i) => (
        <motion.div
          key={i}
          className="bg-white/70 rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={p.image}
            alt={p.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl text-green-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{p.desc}</p>

            {/* SEE MORE LINK */}
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

    {/* Explore More Button */}
    <div className="mt-16 flex justify-center">
      <a href="/programs">
        <button
          className="
            px-12 py-4
            rounded-full
            border border-green-700
            text-green-700
            text-sm
            tracking-widest
            bg-transparent
            hover:bg-green-700
            hover:text-white
            transition
          "
        >
          Explore More Programs
        </button>
      </a>
    </div>
  </div>
</motion.section>

        {/* ================= SPECIALTIES ================= */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-4xl font-light text-green-900 mb-16">
              Our Specialties
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/70 rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg text-green-900">{s.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-light text-green-900 mb-16">
              What Our Clients Say
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white/70 shadow-lg"
                >
                  <p className="italic text-gray-700">“{t.quote}”</p>
                  <h4 className="mt-6 text-green-900 font-medium">
                    {t.name}
                  </h4>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-4xl font-light text-green-900 mb-16">
              Blog & Wellness News
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  title: "Daily Wellness Rituals",
                  image: "/images/blog/blog1.jpg",
                  desc: "Simple practices to restore balance and calm.",
                },
                {
                  title: "Mind–Body Connection",
                  image: "/images/blog/blog2.jpg",
                  desc: "How thoughts and health are deeply connected.",
                },
                {
                  title: "Nutrition as Medicine",
                  image: "/images/blog/blog3.jpg",
                  desc: "Using food as a healing tool for vitality.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-white/70 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg text-green-900">{b.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/ds1gudova/video/upload/v1767704675/cta_sjo2z6.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-tight"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.45)" }}
          >
            Begin Your Journey Towards a <br />
            Healthier, Calmer & Balanced Life
          </h2>

          <p
            className="mt-6 text-lg text-white max-w-2xl"
            style={{ textShadow: "0 3px 15px rgba(0,0,0,0.4)" }}
          >
            Join Ventha Wellness and experience holistic care designed for
            your body, mind, and soul.
          </p>
        </motion.div>
      </section>
        </div>
  );
}
