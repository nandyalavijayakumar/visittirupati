import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdBanner from "@/components/AdBanner";
import PlaceCard from "@/components/PlaceCard";
import BlogCard from "@/components/BlogCard";
import { placesData } from "@/data/places-data";
import { blogs } from "@/data/blogs";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Welcome Section */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold text-center text-[#5D4037] mb-8">
            Welcome to Explore Tirupati
          </h1>

          <div className="space-y-5 text-gray-700 text-lg leading-8">
            <p>
              Tirupati, located in the Chittoor district of Andhra Pradesh, is
              one of India's most sacred pilgrimage destinations. Every year,
              millions of devotees from across the world visit the famous
              Tirumala Venkateswara Temple to seek the blessings of Lord
              Venkateswara. The city is not only known for its spiritual
              significance but also for its rich culture, beautiful landscapes,
              waterfalls, wildlife, and historical attractions.
            </p>

            <p>
              Whether you are planning a spiritual journey, a family vacation,
              or a weekend getaway, Tirupati offers something for everyone.
              Explore ancient temples, breathtaking waterfalls, lush green
              forests, trekking trails, wildlife sanctuaries, and nearby
              tourist attractions that make your trip memorable.
            </p>

            <p>
              Explore Tirupati is your complete travel companion. We provide
              detailed information about temples, darshan timings, tourist
              places, waterfalls, travel guides, accommodation, transportation,
              local food, festivals, and useful travel tips to help you plan
              your visit with ease.
            </p>

            <p>
              Discover the most popular attractions including Tirumala Temple,
              Talakona Waterfalls, Kapila Theertham, Sri Padmavathi Ammavari
              Temple, Sri Venkateswara National Park, Chandragiri Fort,
              Silathoranam, Deer Park, Akasa Ganga, Papavinasam, and many more
              hidden gems around Tirupati.
            </p>

            <p>
              Browse our travel blogs for expert recommendations, itinerary
              ideas, best places to visit, local experiences, and essential
              travel information to make your Tirupati trip enjoyable and
              hassle-free.
            </p>
          </div>
        </section>

        <AdBanner />

        {/* Popular Places */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl">Popular Places</h2>

            <div className="divider-ornament">
              <span>❀</span>
            </div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore the most famous temples, waterfalls, parks, and tourist
              attractions in Tirupati. Each destination offers a unique
              experience for pilgrims, nature lovers, and travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {placesData.slice(0, 6).map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/places"
              className="inline-block bg-gradient-to-r from-[#FF6F00] to-[#E65100] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Places →
            </a>
          </div>
        </section>

        <AdBanner />

        {/* Blogs */}
        <section className="max-w-6xl mx-auto px-6 py-12 bg-[#F5F5DC]/50 rounded-xl my-6">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl">
              Travel Guides & Blogs
            </h2>

            <div className="divider-ornament">
              <span>❀</span>
            </div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Read detailed travel guides, temple information, pilgrimage
              tips, sightseeing recommendations, and the latest travel blogs
              to plan your perfect Tirupati trip.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-block text-[#FF6F00] font-semibold hover:text-[#E65100] transition"
            >
              Read All Blogs →
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                What is Tirupati famous for?
              </h3>
              <p className="mt-2 text-gray-700">
                Tirupati is famous for the Tirumala Venkateswara Temple, one of
                the world's most visited Hindu pilgrimage sites.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What are the best places to visit in Tirupati?
              </h3>
              <p className="mt-2 text-gray-700">
                Popular attractions include Tirumala Temple, Talakona
                Waterfalls, Kapila Theertham, Chandragiri Fort, Akasa Ganga,
                Papavinasam, Sri Venkateswara National Park, and many more.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What is the best time to visit Tirupati?
              </h3>
              <p className="mt-2 text-gray-700">
                The ideal time to visit Tirupati is between September and
                February when the weather is pleasant for temple visits and
                sightseeing.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}