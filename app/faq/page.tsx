import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Explore Tirupati",
  description: "Find answers to common questions about visiting Tirupati - temple timings, accommodation, best time to visit, and travel tips.",
  keywords: ["Tirupati FAQ", "Tirupati travel questions", "Tirumala temple FAQ", "Tirupati tourism tips", "Tirupati visitor guide"],
};

const faqs = [
  {
    question: "What is the best time to visit Tirupati?",
    answer: "The best time to visit Tirupati is from October to March when the weather is pleasant. The months of September to November are ideal due to fewer crowds and special Brahmotsavam festival. Avoid summer months (April-June) as temperatures can exceed 40°C.",
  },
  {
    question: "What are the Tirumala temple darshan timings?",
    answer: "Tirumala temple is open from 3:00 AM to 11:00 PM. The main darshan (Sarvadarsanam) is free and operates continuously. Special darshans like VIP darshan, sudarsanam, and pushkarini are available at additional costs. It's advisable to book slots in advance during peak seasons.",
  },
  {
    question: "How to reach Tirupati?",
    answer: "Tirupati is well-connected by air, rail, and road. The nearest airport is Tirupati Airport (TIR) with flights to major cities. Tirupati railway station connects to Chennai, Bangalore, Hyderabad, and other cities. Interstate buses and taxis are also available from nearby cities.",
  },
  {
    question: "Where can I stay in Tirupati?",
    answer: "Tirupati offers accommodation options for all budgets. Near Tirumala, TTD Guest Houses and several hotels are available. In Tirupati city, options range from budget lodges to luxury hotels. It's recommended to book in advance, especially during weekends and festivals.",
  },
  {
    question: "What are the must-visit places in Tirupati?",
    answer: "Apart from Tirumala Temple, must-visit places include: Kapila Theertham, Talakona Waterfall, Sri Venkateswara Museum, Chandragiri Fort, Kalahasti Temple (30km), and Kanipakam Temple (75km). Each offers unique spiritual and historical experiences.",
  },
  {
    question: "How to book tickets for Tirumala darshan?",
    answer: "You can book darshan tickets through the official TTD website (ttdconline.com), mobile app, or at the booking counters in Tirupati. It's recommended to book at least 2-3 days in advance. Arunachal Pradesh pilgrims have separate booking counters.",
  },
  {
    question: "What is the dress code for Tirumala temple?",
    answer: "Traditional attire is preferred. Men should wear dhotis or formal pants with shirts. Women should wear traditional dresses like sarees or half-sarees. Avoid wearing jeans, shorts, or revealing clothes. Traditional attire is available for rent near the temple complex.",
  },
  {
    question: "Is there free food available at Tirumala?",
    answer: "Yes, TTD offers free meals (Anna Prasadam) to all devotees in multiple locations at Tirumala and Tirupati. The famous 'Laddu' prasadam is available for purchase. Free breakfast and lunch are served at various annadana kendras.",
  },
  {
    question: "How far is Talakona Waterfall from Tirupati?",
    answer: "Talakona Waterfall is approximately 55 km from Tirupati city. It's located in the Sri Venkateswara Wildlife Sanctuary. The best time to visit is during monsoon (September-November) when the waterfall flows at its fullest. The area offers trekking and nature walks.",
  },
  {
    question: "Can I visit Tirupati as a day trip?",
    answer: "Yes, Tirupati can be visited as a day trip if you're short on time. However, it's recommended to stay at least one night to experience the spiritual ambiance and visit nearby attractions. The temple darshan can take 4-8 hours depending on crowd levels.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#800000]">Frequently Asked Questions</h1>
            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>
            <p className="text-[#8B7355] mt-4 max-w-2xl mx-auto">
              Find answers to common questions about visiting Tirupati, temple timings, travel tips, and more.
            </p>
          </div>

          <AdBanner />

          <div className="space-y-6 mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-[#E0D5C5] overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#2D2D2D] group-open:text-[#FF6F00] transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-[#FF6F00] text-2xl group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[#8B7355] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <AdBanner />

          <div className="mt-12 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">Contact us through our admin panel or explore our travel blogs for more information.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/blog" className="bg-white text-[#800000] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Read Travel Blogs
              </Link>
              <Link href="/places" className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition">
                Explore Places
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}