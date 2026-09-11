import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-green-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
            Ventha Wellness
          </h2>

          <p className="text-gray-300 mt-4 leading-7">
            Empowering healthier lives through Yoga, Meditation,
            Pranayama and holistic wellness programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Yoga Therapies</li>
            <li>Meditation Therapies</li>
            <li>Pranayama Therapies</li>
            <li>Student Wellness</li>
            <li>Diet Therapies</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact
          </h3>

         <div className="space-y-4">

  {/* Phone 1 */}
  <a
    href="tel:+917659997684"
    className="block hover:underline"
  >
    📞 +91 76599 97684
  </a>

  {/* Phone 2 */}
  <a
    href="tel:+917659997697"
    className="block hover:underline"
  >
    📞 +91 76599 97697
  </a>

  {/* Email */}
  <a
    href="mailto:venthawellness@gmail.com"
    className="block hover:underline break-words"
  >
    ✉️ venthawellness@gmail.com
  </a>

  {/* Address */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Flat+No.+202,+1st+Floor,+SM+Reddy+Complex,+House+No.+1-98%2F8%2F9%2FA,+Plot+No.+4,+Survey+No.+72+(Part),+Madhapur,+Near+Image+Garden+Function+Hall,+Hyderabad,+Telangana+500081"
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:underline leading-7"
  >
    📍 Flat No. 202, 1st Floor, SM Reddy Complex,
    House No. 1-98/8/9/A, Plot No. 4, Survey No. 72
    (Part), Madhapur, Near Image Garden Function Hall,
    Hyderabad, Telangana – 500081
  </a>

</div>
        </div>

      </div>

      <div className="border-t border-green-800 py-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ventha Wellness. All Rights Reserved.
      </div>
    </footer>
  );
}