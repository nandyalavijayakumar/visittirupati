"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#800000] via-[#B22222] to-[#800000] backdrop-blur-sm shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FFD700]">✦</span>
            Explore Tirupati
          </Link>

          <nav className="flex gap-6">
            <Link href="/places" className="text-white hover:text-[#FFD700] transition font-medium">
              Places
            </Link>
            <Link href="/blog" className="text-white hover:text-[#FFD700] transition font-medium">
              Blog
            </Link>
            <Link href="/faq" className="text-white hover:text-[#FFD700] transition font-medium">
              FAQ
            </Link>
            <Link href="/about" className="text-white hover:text-[#FFD700] transition font-medium">
              About
            </Link>
          </nav>
        </div>
      </div>
      
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
    </div>
  );
}