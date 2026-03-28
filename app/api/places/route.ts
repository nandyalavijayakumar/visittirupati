import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";

// ✅ GET (for fetching data with optional search)
export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    const places = await Place.find(query);

    return NextResponse.json(places);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching places" });
  }
}

// ✅ POST (for adding data)
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const place = await Place.create(body);

    return NextResponse.json(place);
  } catch (error) {
    return NextResponse.json({ error: "Error adding place" });
  }
}