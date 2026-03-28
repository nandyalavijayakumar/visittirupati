"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PlaceCard from "@/components/PlaceCard";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import { placesData } from "@/data/places-data";

function PlacesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const filteredPlaces = placesData.filter((place) => {
    const matchesSearch = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !category || place.category === category;
    
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setCategory("");
    router.push("/places");
  };

  const hasFilters = searchQuery || category;

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#800000]">Explore Places</h1>
            <p className="text-[#8B7355] mt-2">
              Discover temples, waterfalls, and natural wonders in Tirupati
            </p>
            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 mb-8 border border-[#E0D5C5]">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-[#E0D5C5] p-3 rounded-lg outline-none focus:border-[#FF6F00]"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-[#E0D5C5] p-3 rounded-lg md:w-40 outline-none focus:border-[#FF6F00]"
              >
                <option value="">All Categories</option>
                <option value="Temple">Temple</option>
                <option value="Waterfall">Waterfall</option>
                <option value="Nature">Nature</option>
                <option value="Park">Park</option>
                <option value="Historical">Historical</option>
              </select>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-red-500 hover:text-red-700 px-4 font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <AdBanner />

          {filteredPlaces.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-[#E0D5C5]">
              <p className="text-[#8B7355] text-lg">No places found.</p>
              {hasFilters && (
                <button onClick={clearFilters} className="text-[#FF6F00] mt-2 hover:underline font-medium">
                  Clear filters
                </button>
              )}
            </div>
          )}

          <AdBanner />
        </div>
      </div>
    </div>
  );
}

export default function PlacesPage() {
  return (
    <Suspense fallback={
      <div>
        <Header />
        <div className="min-h-screen pt-20 px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-12">
              <div className="text-xl text-[#8B7355]">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    }>
      <PlacesContent />
    </Suspense>
  );
}
