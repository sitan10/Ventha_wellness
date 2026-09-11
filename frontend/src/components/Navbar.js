import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {isHome ? (
            // HOME PAGE → SHOW BRAND NAME
            <Link
  href="/"
  className="text-2xl font-medium text-green-900 hover:text-green-700 transition"
>
  Ventha Wellness
</Link>
          ) : (
            // INNER PAGES → SHOW BACK ARROW
            <button
              onClick={() => router.back()}
              className="text-2xl text-green-900 hover:opacity-70 transition"
              aria-label="Go back"
            >
              ←
            </button>
          )}
        </div>

        {/* RIGHT SIDE NAV LINKS */}
        {/* RIGHT SIDE NAV LINKS */}

<div className="hidden md:flex items-center gap-8 text-sm text-green-900">

  <Link href="/" className="hover:text-green-700 transition">
    Home
  </Link>

  <Link href="/about" className="hover:text-green-700 transition">
    About Us
  </Link>
 <Link
  href="/services"
  className={`transition ${
    router.pathname === "/services"
      ? "text-green-700 font-semibold"
      : "hover:text-green-700"
  }`}
>
  Services
</Link>

  <Link
    href="/programs"
    className={`transition ${
      router.pathname === "/programs"
        ? "text-green-700 font-semibold"
        : "hover:text-green-700"
    }`}
  >
    Programs
  </Link>

  <Link href="/methods" className="hover:text-green-700 transition">
    Methods
  </Link>

  <Link href="/workshops" className="hover:text-green-700 transition">
    Workshops
  </Link>

  <Link href="/events" className="hover:text-green-700 transition">
    Events
  </Link>

  <Link href="/ventha-universe" className="hover:text-green-700 transition">
    Ventha Universe
  </Link>

  {/* Book Consultation Button */}

  <Link
    href="/consultation"
    className="
      bg-green-700
      hover:bg-green-800
      text-white
      px-6
      py-3
      rounded-full
      font-medium
      shadow-lg
      hover:shadow-xl
      hover:-translate-y-0.5
      transition-all
      duration-300
    "
  >
    Book Consultation
  </Link>

</div>
      </div>
    </nav>
  );
}
