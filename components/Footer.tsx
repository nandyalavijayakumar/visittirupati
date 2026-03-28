import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">Explore Tirupati</h3>
            <p className="text-gray-400 text-sm">
              Your ultimate guide to discovering the sacred city of Tirupati, 
              its temples, waterfalls, and natural beauty.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF6F00]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/places" className="text-gray-400 hover:text-[#FFD700] transition">Places</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#FFD700] transition">Travel Blogs</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#FFD700] transition">About Us</Link></li>
              <li><Link href="/admin" className="text-gray-400 hover:text-[#FFD700] transition">Admin</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF6F00]">Contact</h4>
            <p className="text-gray-400 text-sm">
              Have questions or suggestions?<br />
              Reach out through our admin panel.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Explore Tirupati. All rights reserved.
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <div className="flex justify-center items-center gap-2 text-gray-500 text-xs">
            <span>Advertisement</span>
          </div>
          <div className="bg-gray-800 p-2 rounded mt-2 min-h-[90px] flex items-center justify-center">
            <span className="text-gray-600 text-sm">Google AdSense - Header</span>
          </div>
        </div>
      </div>
    </footer>
  );
}