import { NextResponse } from "next/server";
import { blogsData } from "@/data/blogs-data";

export async function GET() {
  try {
    return NextResponse.json(blogsData);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}
