import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  await connectDB();

  const place = await Place.findOne({ slug: { $regex: slug, $options: "i" } });

  if (!place) {
    return NextResponse.json({ error: "Not found" });
  }

  return NextResponse.json(place);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();
    const body = await req.json();

    const place = await Place.findByIdAndUpdate(
      slug,
      body,
      { new: true }
    );

    if (!place) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(place);
  } catch (error) {
    return NextResponse.json({ error: "Error updating place" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const place = await Place.findByIdAndDelete(slug);

    if (!place) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting place" }, { status: 500 });
  }
}