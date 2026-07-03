import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "About Us - Explore Tirupati Tourism Guide",
  description:
    "Learn about Explore Tirupati, your trusted travel guide for Tirupati tourism, temples, waterfalls, travel tips, and local attractions in Andhra Pradesh.",
  keywords: [
    "About Explore Tirupati",
    "Tirupati tourism",
    "Tirupati travel guide",
    "Tirupati temples",
    "Places to visit in Tirupati",
    "Andhra Pradesh tourism",
  ],
};

export default function About() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 bg-[#FFF8E1]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000]">
              About Explore Tirupati
            </h1>

            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>

            <p className="mt-6 text-lg text-[#8B7355] max-w-3xl mx-auto leading-8">
              Your trusted travel companion for exploring the temples,
              waterfalls, historical monuments, nature parks, and hidden gems
              of Tirupati and the surrounding regions.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg border border-[#E0D5C5] p-8 md:p-10 space-y-10">

            {/* Welcome */}
            <section>
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Welcome to Explore Tirupati
              </h2>

              <p className="text-[#8B7355] leading-8 mb-4">
                Explore Tirupati is a dedicated travel information website
                created to help pilgrims, tourists, families, and adventure
                seekers discover the best attractions in Tirupati and nearby
                destinations. Our goal is to provide accurate, easy-to-understand,
                and regularly updated travel information.
              </p>

              <p className="text-[#8B7355] leading-8">
                Tirupati is internationally known for the sacred Tirumala
                Venkateswara Temple, but the region also offers beautiful
                waterfalls, wildlife sanctuaries, trekking locations, historical
                forts, gardens, and cultural attractions that deserve to be
                explored.
              </p>
            </section>

            {/* Mission */}
            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Our Mission
              </h2>

              <p className="text-[#8B7355] leading-8">
                Our mission is to become one of the most trusted online travel
                guides for Tirupati by publishing reliable information, travel
                tips, destination guides, temple details, sightseeing
                recommendations, and local experiences that help visitors plan
                their journey with confidence.
              </p>
            </section>

            {/* What We Offer */}
            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-5">
                What We Offer
              </h2>

              <ul className="list-disc pl-6 text-[#8B7355] space-y-3 leading-8">
                <li>Complete Tirupati travel guides</li>
                <li>Temple timings and visitor information</li>
                <li>Popular waterfalls and nature attractions</li>
                <li>Tourist places and sightseeing recommendations</li>
                <li>Travel tips for pilgrims and tourists</li>
                <li>Best time to visit Tirupati</li>
                <li>Weekend trip ideas</li>
                <li>Blogs about local culture and traditions</li>
              </ul>
            </section>

            {/* Why Trust */}
            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Why Trust Explore Tirupati?
              </h2>

              <p className="text-[#8B7355] leading-8 mb-4">
                We strive to provide informative, helpful, and regularly updated
                travel content. Our articles are written after researching
                official sources, local attractions, and visitor experiences.
              </p>

              <p className="text-[#8B7355] leading-8">
                While we make every effort to keep information accurate, temple
                timings, ticket prices, and travel details may change. Visitors
                are encouraged to verify important information through official
                authorities before making travel plans.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Contact Us
              </h2>

              <p className="text-[#8B7355] leading-8 mb-4">
                We welcome your suggestions, corrections, and feedback. If you
                would like to recommend a tourist destination or report outdated
                information, we'd love to hear from you.
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#FF6F00] text-white px-6 py-3 rounded-lg hover:bg-[#E65100] transition"
              >
                Contact Us →
              </a>
            </section>

            {/* Disclaimer */}
            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Disclaimer
              </h2>

              <p className="text-[#8B7355] leading-8">
                Explore Tirupati is an independent travel information website
                and is not affiliated with TTD (Tirumala Tirupati Devasthanams)
                or any government organization. All trademarks, names, and
                images belong to their respective owners.
              </p>
            </section>

            {/* Last Updated */}
            <div className="border-t border-[#E0D5C5] pt-6 text-center">
              <p className="text-sm text-gray-500">
                Last Updated: July 2026
              </p>
            </div>

          </div>

          <div className="mt-12">
            <AdBanner />
          </div>
        </div>
      </main>
    </>
  );
}