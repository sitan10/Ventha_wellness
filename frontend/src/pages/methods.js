import Navbar from "@/components/Navbar";

export default function Methods() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-light text-green-900 mb-10">
            Our Methods
          </h1>

          <ul className="space-y-4 text-gray-700">
            <li>• Yogic Methods</li>
            <li>• Herbal & Dietary Methods</li>
            <li>• Weight Training Methods</li>
            <li>• CrossFit Methods</li>
            <li>• Ayurvedic Healing</li>
            <li>• Combination of Methods</li>
          </ul>
        </div>
      </section>
    </>
  );
}
