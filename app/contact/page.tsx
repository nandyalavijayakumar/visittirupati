import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Contact Us - Explore Tirupati",
  description:
    "Get in touch with Explore Tirupati. Contact us for travel suggestions, corrections, partnerships, or general enquiries.",
  keywords: [
    "Contact Explore Tirupati",
    "Tirupati travel guide",
    "Contact Tirupati tourism",
    "Travel support",
    "Explore Tirupati contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 bg-[#FFF8E1]">
        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000]">
              Contact Us
            </h1>

            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>

            <p className="mt-6 text-lg text-[#8B7355]">
              We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-[#E0D5C5] p-8 md:p-10">

            <section className="space-y-6">

              <p className="text-[#8B7355] leading-8">
                Thank you for visiting <strong>Explore Tirupati</strong>.
                Whether you have a question, found incorrect information,
                want to suggest a new tourist destination, or wish to
                collaborate with us, feel free to contact us.
              </p>

              <div className="border-t border-[#E0D5C5] pt-8">

                <h2 className="text-2xl font-semibold text-[#800000] mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">

                  <div>
                    <h3 className="font-semibold text-lg">
                      Website
                    </h3>

                    <p className="text-[#8B7355]">
                      https://visittirupati.online
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email
                    </h3>

                    <p className="text-[#8B7355]">
                      your@email.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Response Time
                    </h3>

                    <p className="text-[#8B7355]">
                      Usually within 24–48 hours.
                    </p>
                  </div>

                </div>

              </div>

              <div className="border-t border-[#E0D5C5] pt-8">

                <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                  We Can Help You With
                </h2>

                <ul className="list-disc pl-6 text-[#8B7355] leading-8 space-y-2">
                  <li>Travel information</li>
                  <li>Temple details</li>
                  <li>Tourist attractions</li>
                  <li>Reporting incorrect information</li>
                  <li>Business enquiries</li>
                  <li>Website feedback</li>
                </ul>

              </div>

              <div className="border-t border-[#E0D5C5] pt-8">

                <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">

                  <div>
                    <h3 className="font-semibold">
                      Is Explore Tirupati an official government website?
                    </h3>

                    <p className="text-[#8B7355] mt-2">
                      No. Explore Tirupati is an independent travel information
                      website created to help visitors explore Tirupati.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Can I suggest a new tourist destination?
                    </h3>

                    <p className="text-[#8B7355] mt-2">
                      Absolutely. We welcome suggestions for new destinations,
                      blogs, and travel experiences.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      How often is the website updated?
                    </h3>

                    <p className="text-[#8B7355] mt-2">
                      We regularly update our content to provide accurate and
                      useful travel information.
                    </p>
                  </div>

                </div>

              </div>

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