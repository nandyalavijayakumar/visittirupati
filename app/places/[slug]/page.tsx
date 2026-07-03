import { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";
import PlaceDetailsClient from "./PlaceDetailsClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    await connectDB();

    const place = await Place.findOne({ slug }).lean();

    if (!place) {
      return {
        title: "Place Not Found | Explore Tirupati",
        description: "The requested tourist place could not be found.",
      };
    }

    const placeAny = place as any;

    const description =
      placeAny.description?.length > 160
        ? `${placeAny.description.substring(0, 157)}...`
        : placeAny.description ||
          `${placeAny.name} travel guide, timings, location, entry fee, history, photos and visitor information.`;

    return {
      metadataBase: new URL("https://visittirupati.online"),

      title: `${placeAny.name} - Travel Guide, Timings & Visitor Information | Explore Tirupati`,

      description,

      keywords: [
        placeAny.name,
        `${placeAny.name} Tirupati`,
        `${placeAny.name} timings`,
        `${placeAny.name} location`,
        `${placeAny.name} entry fee`,
        "Tirupati tourist places",
        "Places to visit in Tirupati",
        "Tirupati travel guide",
        "Andhra Pradesh tourism",
      ],

      authors: [
        {
          name: "Explore Tirupati",
        },
      ],

      creator: "Explore Tirupati",

      publisher: "Explore Tirupati",

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },

      alternates: {
        canonical: `https://visittirupati.online/places/${slug}`,
      },

      openGraph: {
        title: `${placeAny.name} | Explore Tirupati`,
        description,
        url: `https://visittirupati.online/places/${slug}`,
        siteName: "Explore Tirupati",
        locale: "en_US",
        type: "article",

        images: [
          {
            url: placeAny.image,
            width: 1200,
            height: 630,
            alt: placeAny.name,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: `${placeAny.name} | Explore Tirupati`,
        description,
        images: [placeAny.image],
      },
    };
  } catch (error) {
    console.error(error);

    return {
      title: "Explore Tirupati Places",
      description:
        "Explore the best tourist places in Tirupati including temples, waterfalls, parks and historical attractions.",
    };
  }
}

export default async function PlaceDetails({
  params,
}: Props) {
  const { slug } = await params;

  return <PlaceDetailsClient slug={slug} />;
}