"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50">
      
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">

          <Image src="/netflix.png" alt="Netflix Logo" width={80} height={25} />

          <Link href="/hero" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            Home
          </Link>

          <Link href="/projects" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            Projects
          </Link>

          <Link href="/experience" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            Experience
          </Link>

          <Link href="/movies" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            Explore
          </Link>

          <Link href="/my-list" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            My Focus
          </Link>

          <Link href="/about" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            About
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-white text-sm md:text-lg font-semibold whitespace-nowrap">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-2">
          <button className="text-white hover:text-gray-300 transition-colors duration-300">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}