import { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogDetailsClient from "./BlogDetailsClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug }).lean();
    
    if (!blog) {
      return {
        title: "Blog Not Found | Explore Tirupati",
      };
    }

    const blogAny = blog as any;
    return {
      title: blogAny.title,
      description: blogAny.description?.slice(0, 160),
      openGraph: {
        title: `${blogAny.title} | Explore Tirupati`,
        description: blogAny.description?.slice(0, 160),
        images: [blogAny.image],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${blogAny.title} | Explore Tirupati`,
        description: blogAny.description?.slice(0, 160),
        images: [blogAny.image],
      },
    };
  } catch (error) {
    return {
      title: "Explore Tirupati Blog",
    };
  }
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailsClient slug={slug} />;
}