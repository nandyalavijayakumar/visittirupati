import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";
import Blog from "@/models/Blog";
import { placesData } from "@/data/places-data";
import { blogsData } from "@/data/blogs-data";

export async function POST() {
  try {
    await connectDB();

    await Place.deleteMany({});
    await Blog.deleteMany({});

    const insertedPlaces = await Place.insertMany(placesData);
    const insertedBlogs = await Blog.insertMany(blogsData);

    return NextResponse.json({
      success: true,
      message: `Import completed successfully!`,
      placesCount: insertedPlaces.length,
      blogsCount: insertedBlogs.length,
      total: insertedPlaces.length + insertedBlogs.length,
    });
  } catch (error) {
    console.error("Import error:", error);
    return NextResponse.json(
      { success: false, error: "Import failed" },
      { status: 500 }
    );
  }
}