"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Don't render footer on the landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 sm:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Mohammad Ahmad. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Backend-focused developer building scalable systems with Node.js, cloud, and real-time architectures.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Resume
          </Link>

          <Link
            href="https://github.com/Bitsnbytes14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </Link>

          <Link
            href="/blogs"
            className="hover:text-white transition-colors duration-300"
          >
            Insights
          </Link>
        </div>

      </div>
    </footer>
  );
}