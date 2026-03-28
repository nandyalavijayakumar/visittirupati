import { NextResponse } from "next/server";
import { placesData } from "@/data/places-data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    let filteredPlaces = [...placesData];

    if (search) {
      filteredPlaces = filteredPlaces.filter(
        (place) =>
          place.name.toLowerCase().includes(search.toLowerCase()) ||
          place.location.toLowerCase().includes(search.toLowerCase()) ||
          place.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filteredPlaces = filteredPlaces.filter(
        (place) => place.category === category
      );
    }

    return NextResponse.json(filteredPlaces);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching places" });
  }
}
