import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Leaf,
  Laptop,
  UserRoundCheck,
  HeartHandshake,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
} from "lucide-react";

export default function Consultation() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/consultation-bg.jpg')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center px-8"
        >
          <p className="uppercase tracking-[6px] text-green-300 mb-5">
            Ventha Wellness
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            Book Your
            <br />
            Wellness Consultation
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
            Begin your journey towards better health through personalized
            wellness guidance, therapeutic yoga, holistic healing,
            nutrition and lifestyle transformation.
          </p>

          <div className="mt-10 flex justify-center">

            <button className="
    bg-green-700
    hover:bg-green-800
    hover:-translate-y-1
    transition-all
    duration-300
    text-white
    px-12
    py-5
    rounded-full
    text-lg
    font-semibold
    shadow-xl
    hover:shadow-2xl">

              Book Consultation

            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">

              <div className="flex justify-center mb-4">
  <Leaf
    size={46}
    strokeWidth={1.8}
    className="text-green-300"
  />
</div>

              <h3 className="text-white text-xl font-semibold">
                Personalized Wellness
              </h3>

              <p className="text-gray-200 mt-3">
                Customized wellness plans according to your lifestyle.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">

              <div className="flex justify-center mb-4">
  <Laptop
    size={46}
    strokeWidth={1.8}
    className="text-green-300"
  />
</div>

              <h3 className="text-white text-xl font-semibold">
                Online & Offline
              </h3>

              <p className="text-gray-200 mt-3">
                Flexible consultation options from anywhere.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">

              <div className="flex justify-center mb-4">
  <UserRoundCheck
    size={46}
    strokeWidth={1.8}
    className="text-green-300"
  />
</div>

              <h3 className="text-white text-xl font-semibold">
                Expert Guidance
              </h3>

              <p className="text-gray-200 mt-3">
                Holistic experts helping you achieve long-term wellness.
              </p>

            </div>

          </div>

        </motion.div>

      </section>



      {/* ================= WHY CHOOSE VENTHA ================= */}

      <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-28 bg-white"
>

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-green-700 font-semibold">

              WHY CHOOSE VENTHA

            </p>

            <h2 className="text-5xl font-light text-green-900 mt-5">

              Your Wellness Journey Starts Here

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">

              At Ventha Wellness we believe every individual deserves
              personalized care. Our wellness consultations help us understand
              your lifestyle, health challenges and goals before recommending
              the most suitable therapy.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="rounded-3xl bg-white border border-green-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

              <div className="text-6xl mb-6">🌿</div>

              <h3 className="text-3xl font-semibold text-green-900">

                Holistic Healing

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Natural therapies that focus on healing the root cause rather
                than just managing symptoms.

              </p>

            </div>

            <div className="rounded-3xl bg-white border border-green-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

              <div className="text-6xl mb-6">🧘</div>

              <h3 className="text-3xl font-semibold text-green-900">

                Personalized Care

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Every consultation is tailored specifically to your body,
                lifestyle and wellness goals.

              </p>

            </div>

            <div className="rounded-3xl bg-white border border-green-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

              <div className="text-6xl mb-6">💻</div>

              <h3 className="text-3xl font-semibold text-green-900">

                Flexible Sessions

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Attend consultations online or visit our wellness center
                according to your convenience.

              </p>

            </div>

            <div className="rounded-3xl bg-white border border-green-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

              <div className="text-6xl mb-6">❤️</div>

              <h3 className="text-3xl font-semibold text-green-900">

                Long-Term Wellness

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                Sustainable lifestyle transformation instead of temporary
                solutions.

              </p>

            </div>

          </div>

        </div>

</motion.section>      {/* ================= APPOINTMENT SECTION ================= */}

<section className="py-28 bg-[#F8FAF8]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[4px] text-green-700 font-semibold">
        BOOK APPOINTMENT
      </p>

      <h2 className="text-5xl font-light text-green-900 mt-4">
        Schedule Your Consultation
      </h2>

      <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
        Fill in your details below and one of our wellness experts will
        contact you shortly to confirm your appointment.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* ================= LEFT FORM ================= */}

      <div className="lg:col-span-2 bg-white border border-green-100 rounded-[35px] shadow-2xl p-12 md:p-14 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500">

        <form className="grid md:grid-cols-2 gap-8">

          {/* Full Name */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"            />

          </div>

          {/* Phone */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"
            />

          </div>

          {/* Email */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"            />

          </div>

          {/* Age */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Age
            </label>

            <input
              type="number"
              placeholder="Your age"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"
            />

          </div>

          {/* Gender */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Gender
            </label>

            <select className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300">

              <option>Select Gender</option>

              <option>Male</option>

              <option>Female</option>

              <option>Other</option>

            </select>

          </div>

          {/* Consultation */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Consultation Mode
            </label>

            <select className="w-full rounded-xl border border-gray-200 px-5 py-4 focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none">

              <option>Online</option>

              <option>Offline</option>

            </select>

          </div>

          {/* Health Concern */}

          <div className="md:col-span-2">

            <label className="block mb-3 font-medium text-gray-700">
              Health Concern
            </label>

            <input
              type="text"
              placeholder="Example: PCOD / Stress / Migraine"
className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"            />

          </div>

          {/* Date */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Preferred Date
            </label>

            <input
              type="date"
className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"            />

          </div>

          {/* Time */}

          <div>

            <label className="block mb-3 font-medium text-gray-700">
              Preferred Time
            </label>

            <input
              type="time"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"
            />

          </div>

          {/* Message */}

          <div className="md:col-span-2">

            <label className="block mb-3 font-medium text-gray-700">
              Tell us about your concern
            </label>

            <textarea
              rows="6"
              placeholder="Briefly describe your symptoms or wellness goals..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-green-700 focus:ring-2 focus:ring-green-700 outline-none transition-all duration-300"
            ></textarea>

          </div>

          <div className="md:col-span-2 text-center mt-4">

            <button
className="bg-green-700 hover:bg-green-800 hover:-translate-y-1 hover:shadow-2xl text-white px-14 py-5 rounded-full text-lg font-semibold transition-all duration-300"            >
              Book Appointment →
            </button>

          </div>

        </form>

      </div>

      {/* ================= RIGHT CONTACT CARD ================= */}

<div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-[35px] text-white p-10 shadow-2xl border border-green-600">
<h3 className="text-4xl font-light mb-12">
          Contact Ventha

        </h3>

       <div className="space-y-12">
                  {/* Phone */}

         <div className="flex items-center gap-3 mb-3">
  <Phone
    size={20}
    strokeWidth={2}
    className="text-green-300"
  />

  <p className="uppercase tracking-[4px] text-green-300 text-sm">
    Call Us
  </p>
</div>

          {/* WhatsApp */}

          <div className="flex items-center gap-3 mb-3">
  <MessageCircle
    size={20}
    strokeWidth={2}
    className="text-green-300"
  />

  <p className="uppercase tracking-[4px] text-green-300 text-sm">
    WhatsApp
  </p>
</div>

          {/* Email */}

         <div className="flex items-center gap-3 mb-3">
  <Mail
    size={20}
    strokeWidth={2}
    className="text-green-300"
  />

  <p className="uppercase tracking-[4px] text-green-300 text-sm">
    Email
  </p>
</div>
          <hr className="border-white/20" />

          {/* Working Hours */}

          <div className="flex items-center gap-3 mb-3">
  <Clock3
    size={20}
    strokeWidth={2}
    className="text-green-300"
  />

  <p className="uppercase tracking-[4px] text-green-300 text-sm">
    Working Hours
  </p>
</div>

          {/* Response Card */}

<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mt-12 shadow-lg">
<h4 className="text-2xl font-bold">              Quick Response
            </h4>

            <p className="mt-4 text-gray-200 leading-8">
              After submitting your appointment request,
              our wellness team will contact you within
              <span className="font-semibold text-white">
                {" "}24 Hours
              </span>
              {" "}to confirm your consultation.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= TESTIMONIALS ================= */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[4px] text-green-700 font-semibold">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-green-900 mt-4">
        What Our Clients Say
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#F8FAF8] rounded-3xl p-8 shadow-lg">

        <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>

        <p className="text-gray-600 leading-8">
          The personalized consultation completely changed my lifestyle.
          The team understood my concerns and guided me step by step.
        </p>

        <h4 className="mt-8 text-green-900 font-semibold">
          — Client Review
        </h4>

      </div>

      <div className="bg-[#F8FAF8] rounded-3xl p-8 shadow-lg">

        <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>

        <p className="text-gray-600 leading-8">
          Ventha Wellness helped me improve my health naturally.
          The yoga and wellness plan was easy to follow.
        </p>

        <h4 className="mt-8 text-green-900 font-semibold">
          — Client Review
        </h4>

      </div>

      <div className="bg-[#F8FAF8] rounded-3xl p-8 shadow-lg">

        <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>

        <p className="text-gray-600 leading-8">
          Amazing guidance and continuous support throughout my wellness journey.
        </p>

        <h4 className="mt-8 text-green-900 font-semibold">
          — Client Review
        </h4>

      </div>

    </div>

  </div>

</section>

{/* ================= FAQ ================= */}

<section className="py-28 bg-[#F8FAF8]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[4px] text-green-700 font-semibold">
        FAQ
      </p>

      <h2 className="text-5xl font-light text-green-900 mt-4">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="space-y-8">

      <div className="bg-white rounded-2xl p-8 shadow-md">

        <h3 className="text-2xl text-green-900 font-medium">
          How do I book a consultation?
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Simply fill out the appointment form above and our team will contact
          you within 24 hours.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md">

        <h3 className="text-2xl text-green-900 font-medium">
          Are online consultations available?
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Yes. We offer both online and offline consultations based on your
          convenience.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md">

        <h3 className="text-2xl text-green-900 font-medium">
          Which health conditions do you support?
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          We provide wellness support for lifestyle disorders, yoga therapies,
          student wellness, stress management, women's wellness and many other
          holistic programs.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="py-28 bg-green-900 text-center text-white">

  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-5xl font-light">
      Begin Your Wellness Journey Today
    </h2>

    <p className="mt-8 text-xl leading-9 text-gray-200">
      Take the first step toward a healthier, happier and more balanced life.
      Our wellness experts are here to guide you with personalized care and
      holistic healing.
    </p>

    <button className="mt-12 bg-white text-green-900 hover:bg-gray-100 px-12 py-5 rounded-full text-lg font-semibold transition shadow-xl">

      Book Consultation

    </button>

  </div>

</section>
<Footer />

    </>
  );
}