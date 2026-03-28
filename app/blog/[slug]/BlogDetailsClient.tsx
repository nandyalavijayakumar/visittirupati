"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import AdBanner from "@/components/AdBanner";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  images?: string[];
  description: string;
  content: string;
}

interface Props {
  slug: string;
}

export default function BlogDetailsClient({ slug }: Props) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        
        if (data.error) {
          setError(true);
        } else {
          setBlog(data);
        }
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-xl text-[#8B7355]">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div>
        <Header />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-xl text-red-500">Blog not found</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bg-[#F5F5DC]/50 min-h-screen pt-16">
        <ImageCarousel 
          images={blog.images && blog.images.length > 0 ? blog.images : [blog.image]} 
          title={blog.title}
        />

        <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-10">
          <div className="bg-white p-5 rounded-xl shadow mb-4 border border-[#E0D5C5]">
            <h1 className="text-2xl font-bold text-[#800000]">
              {blog.title}
            </h1>
          </div>
        </div>

        <AdBanner />

        <div className="max-w-3xl mx-auto p-6">
          <div className="bg-white mt-6 p-6 rounded-xl shadow border border-[#E0D5C5]">
            {blog.description && (
              <p className="text-[#8B7355] mb-6 pb-4 border-b border-[#E0D5C5]">
                {blog.description}
              </p>
            )}

            <div className="prose max-w-none">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-[#2D2D2D]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <AdBanner />
      </div>
    </div>
  );
}