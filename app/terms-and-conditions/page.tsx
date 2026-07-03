import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Terms & Conditions - Explore Tirupati",
  description:
    "Read the Terms & Conditions for using Explore Tirupati, your trusted travel guide for Tirupati tourism.",
  keywords: [
    "Terms and Conditions",
    "Explore Tirupati",
    "Website Terms",
    "Travel Guide Terms",
    "Tirupati Tourism",
  ],
};

export default function TermsAndConditions() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 bg-[#FFF8E1]">
        <div className="max-w-5xl mx-auto px-6 py-12">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000]">
              Terms & Conditions
            </h1>

            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>

            <p className="mt-6 text-lg text-[#8B7355]">
              Last Updated: July 2026
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-[#E0D5C5] p-8 md:p-10 space-y-10">

            <section>
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Acceptance of Terms
              </h2>

              <p className="text-[#8B7355] leading-8">
                By accessing and using Explore Tirupati, you agree to comply
                with these Terms & Conditions. If you do not agree with these
                terms, please discontinue using the website.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Website Purpose
              </h2>

              <p className="text-[#8B7355] leading-8">
                Explore Tirupati is an informational travel website that
                provides guides, articles, destination information, travel
                tips, temple details, waterfalls, and tourism-related content.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Accuracy of Information
              </h2>

              <p className="text-[#8B7355] leading-8">
                We make every effort to keep our information accurate and
                updated. However, temple timings, ticket prices, travel routes,
                opening hours, and other information may change without notice.
                Visitors should verify important information through official
                sources before making travel plans.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Intellectual Property
              </h2>

              <p className="text-[#8B7355] leading-8">
                All original content published on Explore Tirupati, including
                articles, graphics, website design, and logos, is protected by
                applicable copyright laws unless otherwise stated.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                External Links
              </h2>

              <p className="text-[#8B7355] leading-8">
                Our website may include links to third-party websites for your
                convenience. We are not responsible for the content, privacy
                practices, or accuracy of information on those external
                websites.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Advertisements
              </h2>

              <p className="text-[#8B7355] leading-8">
                Explore Tirupati displays advertisements through Google
                AdSense and other advertising partners. We are not responsible
                for products, services, or claims made by advertisers.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Limitation of Liability
              </h2>

              <p className="text-[#8B7355] leading-8">
                Explore Tirupati shall not be held liable for any direct,
                indirect, incidental, or consequential damages arising from the
                use of this website or reliance on its content.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Changes to These Terms
              </h2>

              <p className="text-[#8B7355] leading-8">
                We reserve the right to update or modify these Terms &
                Conditions at any time. Changes will become effective once they
                are published on this page.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Contact Us
              </h2>

              <p className="text-[#8B7355] leading-8 mb-4">
                If you have any questions regarding these Terms &
                Conditions, please contact us.
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#FF6F00] text-white px-6 py-3 rounded-lg hover:bg-[#E65100] transition"
              >
                Contact Us →
              </a>
            </section>

          </div>

          <div className="mt-12">
            <AdBanner />
          </div>

        </div>
      </main>
    </>
  );
}