import Navbar from "@/components/Navbar";

export default function Events() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 px-6 bg-[#f9fbf9]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-light text-green-900 mb-10">
            Events
          </h1>

          <p className="text-gray-700">
            Upcoming and past wellness events curated by Ventha Wellness.
          </p>
        </div>
      </section>
    </>
  );
}
