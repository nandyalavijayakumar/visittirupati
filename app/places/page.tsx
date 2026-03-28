"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PlaceCard from "@/components/PlaceCard";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

interface Place {
  _id: string;
  name: string;
  slug: string;
  location: string;
  image: string;
  description: string;
  category?: string;
}

function PlacesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const fetchPlaces = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (category) params.set("category", category);
    
    const res = await fetch(`/api/places?${params.toString()}`);
    const data = await res.json();
    setPlaces(data);
    setLoading(false);
  }, [searchQuery, category]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchPlaces();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [fetchPlaces]);

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

          {loading ? (
            <div className="text-center py-12">
              <div className="text-xl text-[#8B7355]">Searching...</div>
            </div>
          ) : places.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place) => (
                <PlaceCard key={place._id} place={place} />
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