import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// ✅ GET (VERY IMPORTANT)
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find();

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

// ✅ POST
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const slug = body.title
      .toLowerCase()
      .replace(/\s+/g, "-");

    const blog = await Blog.create({
      ...body,
      slug,
    });

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding blog" },
      { status: 500 }
    );
  }
}