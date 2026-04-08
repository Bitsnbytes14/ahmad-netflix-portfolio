import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">About Me</h1>

      <div className="max-w-4xl text-lg leading-relaxed text-center mb-12">
        <p className="mb-4">
          Hi, I'm Mohammad Ahmad — a backend-focused Full Stack Developer who builds scalable, production-ready systems using Node.js, Express, and modern cloud technologies. I specialize in designing efficient APIs, handling real-time systems, and architecting applications that perform reliably under scale.
        </p>
        <p className="mb-4">
          I have built impactful projects such as an automated code grading platform with parallel execution pipelines, a real-time chat application using WebSockets, and an AI-powered resume builder that improves ATS optimization. My work focuses on solving real-world problems with performance, scalability, and clean system design at the core.
        </p>
        <p>
          Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving skills and prepare for high-performance engineering roles. I am also exploring cloud and DevOps practices to build and deploy systems end-to-end.
        </p>
      </div>

      {/* 🔥 FINAL TECH STACK SECTION */}
      <div className="w-full max-w-5xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">
          Tech Stack & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "JavaScript",
            "Python",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "Git",
            "Docker",
            "Firebase",
            "MongoDB",
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#141414] p-5 rounded-xl 
              hover:shadow-red-600 transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
            >
              {/* 🔥 Gradient Circle */}
              <div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 
                flex items-center justify-center text-lg font-bold text-white mb-3 
                group-hover:scale-110 transition-transform duration-300"
              >
                {tech[0]}
              </div>

              {/* Name */}
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/mohammad-ahmad141004"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </Link>

        <Link
          href="https://github.com/Bitsnbytes14"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}