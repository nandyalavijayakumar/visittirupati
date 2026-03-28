"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import AdBanner from "@/components/AdBanner";

interface Place {
  _id: string;
  name: string;
  slug: string;
  location: string;
  image: string;
  images?: string[];
  description: string;
  history?: string;
  timings?: string;
  entryFee?: string;
  bestTime?: string;
  category?: string;
}

interface Props {
  slug: string;
}

export default function PlaceDetailsClient({ slug }: Props) {
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch(`/api/places/${slug}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setPlace(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    if (slug) {
      fetchPlace();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-xl text-[#8B7355]">Loading...</div>
      </div>
    );
  }

  if (error || !place) {
    return (
      <div>
        <Header />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-xl text-red-500">Place not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bg-[#F5F5DC]/50 min-h-screen pt-16">
        <ImageCarousel 
          images={place.images && place.images.length > 0 ? place.images : [place.image]} 
          title={place.name}
        />

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
          <div className="bg-white p-5 rounded-xl shadow mb-4 border border-[#E0D5C5]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h1 className="text-3xl font-bold text-[#800000]">{place.name}</h1>
                <p className="text-[#8B7355]">{place.location}</p>
              </div>
              {place.category && (
                <span className="bg-gradient-to-r from-[#FF6F00] to-[#E65100] text-white px-4 py-1 rounded-full text-sm self-start">
                  {place.category}
                </span>
              )}
            </div>
          </div>
        </div>

        <AdBanner />

        <div className="p-6 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-xl shadow mb-6 border border-[#E0D5C5]">
            <h2 className="text-xl font-bold text-[#800000] mb-2">About</h2>
            <p className="text-[#2D2D2D]">{place.description}</p>
          </div>

          {place.history && (
            <div className="bg-white p-5 rounded-xl shadow mb-6 border border-[#E0D5C5]">
              <h2 className="text-xl font-bold text-[#800000] mb-2">History</h2>
              <p className="text-[#2D2D2D]">{place.history}</p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow border border-[#E0D5C5]">
              <h3 className="font-semibold text-[#FF6F00] mb-1">Timings</h3>
              <p className="text-[#8B7355]">{place.timings || "Not available"}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow border border-[#E0D5C5]">
              <h3 className="font-semibold text-[#FF6F00] mb-1">Entry Fee</h3>
              <p className="text-[#8B7355]">{place.entryFee || "Not available"}</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow border border-[#E0D5C5]">
              <h3 className="font-semibold text-[#FF6F00] mb-1">Best Time</h3>
              <p className="text-[#8B7355]">{place.bestTime || "Not available"}</p>
            </div>
          </div>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}