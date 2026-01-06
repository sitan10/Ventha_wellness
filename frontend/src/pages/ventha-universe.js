import Navbar from "@/components/Navbar";

export default function VenthaUniverse() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-light text-green-900 mb-10">
            Ventha Universe
          </h1>

          <ul className="space-y-3 text-gray-700">
            <li>Ventha Foods</li>
            <li>Ventha Legal Services</li>
            <li>Ventha Hospitality</li>
            <li>Ventha Kitchen</li>
          </ul>
        </div>
      </section>
    </>
  );
}
