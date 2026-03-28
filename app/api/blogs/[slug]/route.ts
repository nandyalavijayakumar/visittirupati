import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  await connectDB();

  const blog = await Blog.findOne({ slug: { $regex: slug, $options: "i" } });

  if (!blog) {
    return NextResponse.json({ error: "Not found" });
  }

  return NextResponse.json(blog);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();
    const body = await req.json();

    const blog = await Blog.findByIdAndUpdate(
      slug,
      body,
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const blog = await Blog.findByIdAndDelete(slug);

    if (!blog) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting blog" }, { status: 500 });
  }
}