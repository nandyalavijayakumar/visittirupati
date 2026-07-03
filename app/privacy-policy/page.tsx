import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - Explore Tirupati",
  description:
    "Read the Privacy Policy of Explore Tirupati. Learn how we collect, use, and protect your information while using our travel website.",
  keywords: [
    "Privacy Policy",
    "Explore Tirupati",
    "Tirupati travel website",
    "Cookies Policy",
    "Google AdSense Privacy",
  ],
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 bg-[#FFF8E1]">
        <div className="max-w-5xl mx-auto px-6 py-12">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#800000]">
              Privacy Policy
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
                Introduction
              </h2>

              <p className="text-[#8B7355] leading-8">
                Welcome to Explore Tirupati. Your privacy is important to us.
                This Privacy Policy explains how we collect, use, and protect
                your information when you use our website.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Information We Collect
              </h2>

              <ul className="list-disc pl-6 text-[#8B7355] space-y-3 leading-8">
                <li>Anonymous website analytics</li>
                <li>Browser and device information</li>
                <li>Cookies for website functionality</li>
                <li>Information you voluntarily provide through contact forms</li>
              </ul>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 text-[#8B7355] space-y-3 leading-8">
                <li>Improve website performance</li>
                <li>Enhance user experience</li>
                <li>Respond to enquiries</li>
                <li>Analyze visitor traffic</li>
                <li>Display relevant advertisements</li>
              </ul>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Google AdSense
              </h2>

              <p className="text-[#8B7355] leading-8">
                Our website may display advertisements provided by Google
                AdSense. Google may use cookies to personalize ads based on
                your interests and previous visits to this and other websites.
              </p>

              <p className="text-[#8B7355] leading-8 mt-4">
                You can learn more about Google's advertising policies by
                visiting Google's Privacy & Terms pages.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Cookies
              </h2>

              <p className="text-[#8B7355] leading-8">
                We use cookies to improve website functionality, remember user
                preferences, analyze website traffic, and provide personalized
                advertisements.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Third-Party Services
              </h2>

              <p className="text-[#8B7355] leading-8">
                Our website may use trusted third-party services such as Google
                Analytics, Google AdSense, Cloudflare, and social media
                platforms. These services may collect anonymous usage
                information according to their own privacy policies.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Data Security
              </h2>

              <p className="text-[#8B7355] leading-8">
                We implement appropriate security measures to protect your
                information. However, no method of internet transmission is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Children's Privacy
              </h2>

              <p className="text-[#8B7355] leading-8">
                Our website is intended for general audiences. We do not
                knowingly collect personal information from children under the
                age of 13.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Changes to This Privacy Policy
              </h2>

              <p className="text-[#8B7355] leading-8">
                We may update this Privacy Policy periodically. Any changes
                will be posted on this page along with the updated revision
                date.
              </p>
            </section>

            <section className="border-t border-[#E0D5C5] pt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Contact Us
              </h2>

              <p className="text-[#8B7355] leading-8">
                If you have questions regarding this Privacy Policy, please
                visit our Contact page.
              </p>

              <a
                href="/contact"
                className="inline-block mt-5 bg-[#FF6F00] text-white px-6 py-3 rounded-lg hover:bg-[#E65100] transition"
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