import { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";
import PlaceDetailsClient from "./PlaceDetailsClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    await connectDB();
    const place = await Place.findOne({ slug }).lean();
    
    if (!place) {
      return {
        title: "Place Not Found | Explore Tirupati",
      };
    }

    const placeAny = place as any;
    return {
      title: placeAny.name,
      description: placeAny.description?.slice(0, 160),
      openGraph: {
        title: `${placeAny.name} | Explore Tirupati`,
        description: placeAny.description?.slice(0, 160),
        images: [placeAny.image],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${placeAny.name} | Explore Tirupati`,
        description: placeAny.description?.slice(0, 160),
        images: [placeAny.image],
      },
    };
  } catch (error) {
    return {
      title: "Explore Tirupati Places",
    };
  }
}

export default async function PlaceDetails({ params }: Props) {
  const { slug } = await params;
  return <PlaceDetailsClient slug={slug} />;
}