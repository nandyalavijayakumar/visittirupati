"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdBanner from "@/components/AdBanner";
import PlaceCard from "@/components/PlaceCard";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const [places, setPlaces] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div>
      <Header />
      <Hero />

      <AdBanner />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="section-title text-2xl">
            Popular Places
          </h2>
          <div className="divider-ornament">
            <span>❀</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {places.map((place) => (
            <PlaceCard key={place._id} place={place} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/places" className="inline-block bg-gradient-to-r from-[#FF6F00] to-[#E65100] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Places →
          </a>
        </div>
      </div>

      <AdBanner />

      <div className="max-w-6xl mx-auto px-6 py-12 bg-[#F5F5DC]/50 rounded-xl my-6">
        <div className="text-center mb-8">
          <h2 className="section-title text-2xl">
            Travel Guides & Blogs
          </h2>
          <div className="divider-ornament">
            <span>❀</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/blog" className="inline-block text-[#FF6F00] font-semibold hover:text-[#E65100] transition">
            Read All Blogs →
          </a>
        </div>
      </div>
    </div>
  );
}