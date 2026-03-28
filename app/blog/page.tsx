import Link from "next/link";
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20 px-6 pb-12 bg-[#F5F5DC]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#800000]">Travel Blogs</h1>
            <p className="text-[#8B7355] mt-2">
              Read travel guides and tips for exploring Tirupati
            </p>
            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>
          </div>

          <AdBanner />

          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog: any) => (
                <Link key={blog._id} href={`/blog/${blog.slug}`}>
                  <div className="card-traditional cursor-pointer">
                    <img
                      src={blog.image || "https://via.placeholder.com/400x300?text=Blog"}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-4">
                      <h2 className="font-semibold text-lg text-[#2D2D2D]">
                        {blog.title}
                      </h2>

                      <p className="text-[#8B7355] text-sm mt-2 line-clamp-2">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-[#E0D5C5]">
              <p className="text-[#8B7355] text-lg">No blogs found.</p>
              <p className="text-[#8B7355] mt-2">Add blogs from the admin panel.</p>
            </div>
          )}

          <AdBanner />
        </div>
      </div>
    </div>
  );
}