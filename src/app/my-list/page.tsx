import Image from "next/image";

export default function MyList() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">

      <div className="absolute top-4 left-4">
        <Image src="/netflix.svg" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">
        My Focus
      </h1>

      <div className="max-w-5xl w-full space-y-8">

        {/* 🚀 SaaS */}
        <div className="bg-[#141414] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            🚀 Building: Intelligent Hostel Allocation System
          </h2>
          <p className="text-gray-300">
            Developing a B2B SaaS platform that intelligently assigns hostel rooms using compatibility algorithms (cosine similarity, greedy matching, and local search optimization). Focused on scalability and real-world deployment.
          </p>
        </div>

        {/* 💻 Internship Prep */}
        <div className="bg-[#141414] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            💻 Preparing for SDE Roles
          </h2>
          <p className="text-gray-300">
            Actively practicing Data Structures & Algorithms and strengthening problem-solving skills to crack top software engineering internships.
          </p>
        </div>

        {/* ☁️ Cloud */}
        <div className="bg-[#141414] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            ☁️ Learning Cloud & DevOps
          </h2>
          <p className="text-gray-300">
            Exploring AWS, Docker, and CI/CD pipelines to build and deploy scalable production-ready applications.
          </p>
        </div>

        {/* 🧠 System Design */}
        <div className="bg-[#141414] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            🧠 System Design
          </h2>
          <p className="text-gray-300">
            Learning how to design distributed systems, optimize backend performance, and build scalable architectures.
          </p>
        </div>

        {/* 🔥 Growth */}
        <div className="bg-[#141414] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            📈 Continuous Growth
          </h2>
          <p className="text-gray-300">
            Building projects, contributing to open source, and continuously improving through hands-on development and real-world problem solving.
          </p>
        </div>

      </div>
    </div>
  );
}