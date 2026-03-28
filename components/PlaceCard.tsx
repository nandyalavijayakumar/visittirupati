import Link from "next/link";

interface Place {
  _id: string;
  name: string;
  location: string;
  image: string;
  slug: string;
}

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <div className="card-traditional">
      <div className="relative overflow-hidden">
        <img src={place.image} alt={place.name} className="w-full h-52 object-cover" />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FF6F00] to-transparent px-3 py-1">
          <span className="text-white text-xs font-medium">Explore</span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg text-[#2D2D2D]">{place.name}</h2>
        <p className="text-[#8B7355] text-sm mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {place.location}
        </p>

        <Link href={`/places/${place.slug}`}>
          <button className="mt-4 w-full bg-gradient-to-r from-[#FF6F00] to-[#E65100] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
}