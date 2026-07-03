import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">
              Explore Tirupati
            </h2>

            <p className="text-gray-400 leading-7 text-sm">
              Explore Tirupati is your trusted travel guide for discovering
              Tirupati's famous temples, waterfalls, parks, trekking places,
              tourist attractions, travel tips, and nearby destinations in
              Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-[#FF6F00] mb-4">
              Quick Links
            </h2>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/places"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Places
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Travel Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-[#FFD700] transition"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-[#FF6F00] mb-4">
              Contact
            </h2>

            <p className="text-gray-400 text-sm leading-7 mb-4">
              Have questions, suggestions, or found incorrect information?
              We'd love to hear from you.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#FF6F00] hover:bg-[#E65100] text-white px-5 py-2 rounded-lg transition"
            >
              Contact Us
            </Link>

            <div className="mt-6">
              <h3 className="text-[#FFD700] font-semibold mb-2">
                Explore
              </h3>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Temples</li>
                <li>✓ Waterfalls</li>
                <li>✓ Nature Parks</li>
                <li>✓ Tourist Attractions</li>
                <li>✓ Travel Guides</li>
                <li>✓ Local Experiences</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6">

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Explore Tirupati. All Rights Reserved.
          </p>

          <p className="text-center text-gray-500 text-xs mt-3 max-w-3xl mx-auto leading-6">
            Explore Tirupati is an independent travel information website
            created to help tourists and pilgrims discover Tirupati and nearby
            attractions. We are not affiliated with Tirumala Tirupati
            Devasthanams (TTD) or any government organization.
          </p>

        </div>

      </div>
    </footer>
  );
}