import type { Metadata } from "next";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Best Places to Visit in Tirupati - Temples, Waterfalls & Nature",
  description: "Discover the best places to visit in Tirupati - from ancient temples to beautiful waterfalls. Complete travel guide with timings, directions, and visitor tips.",
  keywords: ["places to visit in Tirupati", "Tirupati tourism", "Tirupati temples", "Tirupati waterfalls", "Tirupati travel guide", "Tirupati sightseeing"],
};

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}