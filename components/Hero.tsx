"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=1200&q=80",
    title: "Tirumala Temple",
    subtitle: "Visit the famous Venkateswara Temple"
  },
  {
    url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=1200&q=80",
    title: "Talakona Waterfall",
    subtitle: "Experience the highest waterfall in AP"
  },
  {
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&q=80",
    title: "Ancient Temples",
    subtitle: "Explore the rich spiritual heritage"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    title: "Scenic Nature",
    subtitle: "Discover beautiful landscapes"
  },
  {
    url: "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=1200&q=80",
    title: "Tirupati City",
    subtitle: "Explore the holy city"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[550px] overflow-hidden mt-12">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 drop-shadow-lg">
            Explore Tirupati
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-200">
            Discover temples, waterfalls & sacred sites
          </p>
        </div>

        <div className="mt-2 bg-white/95 text-gray-800 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 p-3 w-full max-w-4xl border-2 border-[#FFD700]/30">
          <div className="flex items-center gap-2 px-2">
            <svg className="w-5 h-5 text-[#FF6F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search places..."
              className="flex-1 p-2 outline-none w-full"
            />
          </div>
          <div className="w-[1px] h-8 bg-gray-300 hidden md:block" />
          <select className="p-2 outline-none w-full md:w-auto text-gray-600">
            <option value="">Category</option>
            <option value="Temple">Temple</option>
            <option value="Waterfall">Waterfall</option>
            <option value="Nature">Nature</option>
          </select>
          <button className="bg-gradient-to-r from-[#FF6F00] to-[#E65100] text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full md:w-auto">
            Search
          </button>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="/places" className="bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:from-[#E65100] hover:to-[#BF360C] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Places
          </Link>
          <Link href="/blog" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            Travel Blogs
          </Link>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#800000]/60 hover:bg-[#800000] text-white p-3 rounded-full transition z-20 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#800000]/60 hover:bg-[#800000] text-white p-3 rounded-full transition z-20 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-[#FFD700]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}