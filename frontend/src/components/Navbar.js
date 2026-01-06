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
            <span className="text-2xl font-medium text-green-900">
              Ventha Wellness
            </span>
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
        <div className="hidden md:flex gap-8 text-sm text-green-900">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/methods">Methods</Link>
          <Link href="/workshops">Workshops</Link>
          <Link href="/events">Events</Link>
          <Link href="/ventha-universe">Ventha Universe</Link>
        </div>
      </div>
    </nav>
  );
}
