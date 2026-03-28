import Link from "next/link";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="card-traditional">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="font-semibold text-lg text-[#2D2D2D]">{blog.title}</h2>
        <p className="text-[#8B7355] text-sm mt-2 line-clamp-2">
          {blog.description}
        </p>

        <Link href={`/blog/${blog.slug}`}>
          <button className="mt-4 w-full bg-gradient-to-r from-[#800000] to-[#B22222] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}