"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface Place {
  _id: string;
  name: string;
  slug: string;
  location: string;
  image: string;
  description: string;
  history?: string;
  timings?: string;
  entryFee?: string;
  bestTime?: string;
  category?: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  description?: string;
  content: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "places" | "blogs">("dashboard");
  
  const [placeForm, setPlaceForm] = useState<Partial<Place>>({});
  const [blogForm, setBlogForm] = useState<Partial<Blog>>({});
  const [editingPlace, setEditingPlace] = useState<Place | null>(null);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [showPlaceModal, setShowPlaceModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleLogout = () => {
    document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  const checkAuth = () => {
    const token = document.cookie.includes("admin_token=authenticated");
    if (!token) {
      router.push("/admin/login");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const [placesRes, blogsRes] = await Promise.all([
      fetch("/api/places"),
      fetch("/api/blogs"),
    ]);
    const placesData = await placesRes.json();
    const blogsData = await blogsRes.json();
    setPlaces(placesData);
    setBlogs(blogsData);
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
    fetchData();
  }, [router]);

  const uploadImage = async (file: File): Promise<string | null> => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      return data.secure_url || null;
    } catch {
      setUploading(false);
      return null;
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "place" | "blog") => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const url = await uploadImage(file);
    if (url) {
      if (type === "place") {
        setPlaceForm({ ...placeForm, image: url });
      } else {
        setBlogForm({ ...blogForm, image: url });
      }
    }
  };

  const addPlace = async () => {
    if (!placeForm.name || !placeForm.location || !placeForm.image) {
      alert("Please fill in required fields");
      return;
    }

    const slug = placeForm.name?.toLowerCase().replace(/\s+/g, "-");
    
    await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...placeForm, slug }),
    });

    setPlaceForm({});
    setShowPlaceModal(false);
    fetchData();
  };

  const updatePlace = async () => {
    if (!editingPlace) return;

    await fetch(`/api/places/${editingPlace._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingPlace),
    });

    setEditingPlace(null);
    fetchData();
  };

  const deletePlace = async (id: string) => {
    if (!confirm("Delete this place?")) return;
    await fetch(`/api/places/${id}`, { method: "DELETE" });
    fetchData();
  };

  const addBlog = async () => {
    if (!blogForm.title || !blogForm.image || !blogForm.content) {
      alert("Please fill in required fields");
      return;
    }

    const slug = blogForm.title?.toLowerCase().replace(/\s+/g, "-");
    
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...blogForm, slug }),
    });

    setBlogForm({});
    setShowBlogModal(false);
    fetchData();
  };

  const updateBlog = async () => {
    if (!editingBlog) return;

    await fetch(`/api/blogs/${editingBlog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingBlog),
    });

    setEditingBlog(null);
    fetchData();
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Delete this blog?")) return;
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-5">
        <h1 className="text-xl font-bold mb-6 text-green-700">Admin Panel</h1>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "dashboard" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("places")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "places" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Places
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === "blogs" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Blogs
            </button>
          </li>
        </ul>
        <div className="mt-auto pt-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <h2 className="text-2xl font-bold">
            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "places" && "Manage Places"}
            {activeTab === "blogs" && "Manage Blogs"}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <span className="text-green-700 font-medium">Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-gray-500">Total Places</h3>
                <p className="text-3xl font-bold text-green-700">{places.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-gray-500">Total Blogs</h3>
                <p className="text-3xl font-bold text-green-700">{blogs.length}</p>
              </div>
            </div>

            {/* RECENT PLACES */}
            <div className="bg-white rounded-xl shadow mb-8">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Places</h3>
                <button
                  onClick={() => setActiveTab("places")}
                  className="text-green-700 text-sm hover:underline"
                >
                  View All
                </button>
              </div>
              {places.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-sm">Image</th>
                        <th className="p-3 text-left text-sm">Name</th>
                        <th className="p-3 text-left text-sm">Location</th>
                        <th className="p-3 text-left text-sm">Category</th>
                        <th className="p-3 text-left text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {places.slice(0, 5).map((place) => (
                        <tr key={place._id} className="border-t hover:bg-gray-50">
                          <td className="p-3">
                            <img src={place.image} alt={place.name} className="w-12 h-12 object-cover rounded" />
                          </td>
                          <td className="p-3 font-medium">{place.name}</td>
                          <td className="p-3 text-gray-600">{place.location}</td>
                          <td className="p-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              {place.category || "General"}
                            </span>
                          </td>
                          <td className="p-3 space-x-2">
                            <button
                              onClick={() => setEditingPlace(place)}
                              className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deletePlace(place._id)}
                              className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">No places yet</div>
              )}
            </div>

            {/* RECENT BLOGS */}
            <div className="bg-white rounded-xl shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Blogs</h3>
                <button
                  onClick={() => setActiveTab("blogs")}
                  className="text-green-700 text-sm hover:underline"
                >
                  View All
                </button>
              </div>
              {blogs.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-sm">Image</th>
                        <th className="p-3 text-left text-sm">Title</th>
                        <th className="p-3 text-left text-sm">Description</th>
                        <th className="p-3 text-left text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.slice(0, 5).map((blog) => (
                        <tr key={blog._id} className="border-t hover:bg-gray-50">
                          <td className="p-3">
                            <img src={blog.image} alt={blog.title} className="w-12 h-12 object-cover rounded" />
                          </td>
                          <td className="p-3 font-medium">{blog.title}</td>
                          <td className="p-3 text-gray-600 text-sm">{blog.description?.slice(0, 50)}...</td>
                          <td className="p-3 space-x-2">
                            <button
                              onClick={() => setEditingBlog(blog)}
                              className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteBlog(blog._id)}
                              className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">No blogs yet</div>
              )}
            </div>
          </div>
        )}

        {/* PLACES */}
        {activeTab === "places" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Places</h2>
              <button
                onClick={() => {
                  setPlaceForm({});
                  setShowPlaceModal(true);
                }}
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              >
                + Add Place
              </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-left">Image</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Category</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {places.map((place) => (
                    <tr key={place._id} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <img src={place.image} alt={place.name} className="w-16 h-16 object-cover rounded" />
                      </td>
                      <td className="p-4 font-medium">{place.name}</td>
                      <td className="p-4 text-gray-600">{place.location}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                          {place.category || "General"}
                        </span>
                      </td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => {
                            setEditingPlace(place);
                          }}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deletePlace(place._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {places.length === 0 && (
                <div className="p-8 text-center text-gray-500">No places yet</div>
              )}
            </div>
          </div>
        )}

        {/* BLOGS */}
        {activeTab === "blogs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Blogs</h2>
              <button
                onClick={() => {
                  setBlogForm({});
                  setShowBlogModal(true);
                }}
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              >
                + Add Blog
              </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-left">Image</th>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <img src={blog.image} alt={blog.title} className="w-16 h-16 object-cover rounded" />
                      </td>
                      <td className="p-4 font-medium">{blog.title}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                          }}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBlog(blog._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {blogs.length === 0 && (
                <div className="p-8 text-center text-gray-500">No blogs yet</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ADD PLACE MODAL */}
      {showPlaceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Add New Place</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  value={placeForm.name || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, name: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <input
                  type="text"
                  value={placeForm.location || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, location: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={placeForm.category || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, category: e.target.value })}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select category</option>
                  <option value="Temple">Temple</option>
                  <option value="Waterfall">Waterfall</option>
                  <option value="Nature">Nature</option>
                  <option value="Park">Park</option>
                  <option value="Historical">Historical</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Image *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "place")}
                  className="w-full border p-2 rounded"
                />
                {placeForm.image && (
                  <img src={placeForm.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                )}
                {uploading && <p className="text-sm text-blue-500 mt-1">Uploading...</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea
                  value={placeForm.description || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, description: e.target.value })}
                  className="w-full border p-2 rounded h-24"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">History</label>
                <textarea
                  value={placeForm.history || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, history: e.target.value })}
                  className="w-full border p-2 rounded h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Timings</label>
                <input
                  type="text"
                  value={placeForm.timings || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, timings: e.target.value })}
                  className="w-full border p-2 rounded"
                  placeholder="e.g., 6:00 AM - 6:00 PM"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Entry Fee</label>
                <input
                  type="text"
                  value={placeForm.entryFee || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, entryFee: e.target.value })}
                  className="w-full border p-2 rounded"
                  placeholder="e.g., Free / ₹50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Best Time to Visit</label>
                <input
                  type="text"
                  value={placeForm.bestTime || ""}
                  onChange={(e) => setPlaceForm({ ...placeForm, bestTime: e.target.value })}
                  className="w-full border p-2 rounded"
                  placeholder="e.g., October - March"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowPlaceModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addPlace}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Add Place
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PLACE MODAL */}
      {editingPlace && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Place</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  value={editingPlace.name}
                  onChange={(e) => setEditingPlace({ ...editingPlace, name: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <input
                  type="text"
                  value={editingPlace.location}
                  onChange={(e) => setEditingPlace({ ...editingPlace, location: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={editingPlace.category || ""}
                  onChange={(e) => setEditingPlace({ ...editingPlace, category: e.target.value })}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select category</option>
                  <option value="Temple">Temple</option>
                  <option value="Waterfall">Waterfall</option>
                  <option value="Nature">Nature</option>
                  <option value="Park">Park</option>
                  <option value="Historical">Historical</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingPlace.image}
                  onChange={(e) => setEditingPlace({ ...editingPlace, image: e.target.value })}
                  className="w-full border p-2 rounded"
                />
                <img src={editingPlace.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea
                  value={editingPlace.description}
                  onChange={(e) => setEditingPlace({ ...editingPlace, description: e.target.value })}
                  className="w-full border p-2 rounded h-24"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">History</label>
                <textarea
                  value={editingPlace.history || ""}
                  onChange={(e) => setEditingPlace({ ...editingPlace, history: e.target.value })}
                  className="w-full border p-2 rounded h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Timings</label>
                <input
                  type="text"
                  value={editingPlace.timings || ""}
                  onChange={(e) => setEditingPlace({ ...editingPlace, timings: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Entry Fee</label>
                <input
                  type="text"
                  value={editingPlace.entryFee || ""}
                  onChange={(e) => setEditingPlace({ ...editingPlace, entryFee: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Best Time to Visit</label>
                <input
                  type="text"
                  value={editingPlace.bestTime || ""}
                  onChange={(e) => setEditingPlace({ ...editingPlace, bestTime: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setEditingPlace(null)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={updatePlace}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD BLOG MODAL */}
      {showBlogModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Add New Blog</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input
                  type="text"
                  value={blogForm.title || ""}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "blog")}
                  className="w-full border p-2 rounded"
                />
                {blogForm.image && (
                  <img src={blogForm.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                )}
                {uploading && <p className="text-sm text-blue-500 mt-1">Uploading...</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  value={blogForm.description || ""}
                  onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content *</label>
                <textarea
                  value={blogForm.content || ""}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full border p-2 rounded h-40"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowBlogModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addBlog}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT BLOG MODAL */}
      {editingBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Blog</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input
                  type="text"
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingBlog.image}
                  onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                  className="w-full border p-2 rounded"
                />
                <img src={editingBlog.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  value={editingBlog.description || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, description: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content *</label>
                <textarea
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full border p-2 rounded h-40"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setEditingBlog(null)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={updateBlog}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
