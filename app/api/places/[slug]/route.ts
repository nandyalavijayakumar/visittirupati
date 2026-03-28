import { NextResponse } from "next/server";
import { placesData } from "@/data/places-data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const place = placesData.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!place) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(place);
}
