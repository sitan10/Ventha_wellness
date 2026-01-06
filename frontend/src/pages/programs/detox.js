import Navbar from "@/components/Navbar";

export default function DetoxProgram() {
  return (
    <div className="min-h-screen bg-[#f9fbf9] text-gray-800">
      <Navbar showBack />

      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-green-900">
          Detox Program
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Natural detoxification programs to cleanse, rejuvenate, and restore
          your body from within.
        </p>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {[
            "Full Body Detox",
            "Liver & Gut Detox Program",
            "Heavy Metal Detox",
            "Hormonal Detox",
            "Ayurvedic Panchakarma Detox",
            "Seasonal Detox Plans",
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white shadow text-center"
            >
              <h3 className="text-green-900 font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
