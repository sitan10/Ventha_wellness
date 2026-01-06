import Navbar from "@/components/Navbar";

export default function Workshops() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-light text-green-900 mb-10">
            Workshops
          </h1>

          <ul className="space-y-3 text-gray-700">
            <li>Yoga Workshops</li>
            <li>45+ Wellness Workshops</li>
            <li>Kids Wellness Workshops</li>
            <li>Nutrition & Diet Workshops</li>
            <li>Corporate Wellness Workshops</li>
          </ul>
        </div>
      </section>
    </>
  );
}
