import { NextResponse } from "next/server";
import { blogsData } from "@/data/blogs-data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const blog = blogsData.find(
    (b) => b.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
