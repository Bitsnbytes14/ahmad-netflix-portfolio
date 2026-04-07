import Image from "next/image";

export default function Movies() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">

      <div className="absolute top-4 left-4">
        <Image src="/netflix.svg" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">
        Explore My World
      </h1>

      <div className="max-w-5xl w-full space-y-12">

        {/* 🚀 Featured SaaS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            🚀 Featured Project
          </h2>
          <div className="bg-[#141414] p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-2">
              Intelligent Hostel Room Allocation (B2B SaaS)
            </h3>
            <p className="text-gray-300 mb-2">
              Building a scalable hostel allocation system that intelligently assigns students based on compatibility using cosine similarity, greedy matching, and local search optimization.
            </p>
            <p className="text-gray-400">
              Achieves ~0.95–0.98 compatibility score with ~98% allocation coverage — outperforming traditional methods like random allocation and clustering.
            </p>
          </div>
        </div>

        {/* 🔥 Backend Systems */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            🔥 Backend Systems I’ve Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#141414] p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">Scalable Job Queues</h3>
              <p className="text-gray-300">
                Designed distributed job processing using Redis + BullMQ for parallel execution and performance optimization.
              </p>
            </div>

            <div className="bg-[#141414] p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">Real-Time Systems</h3>
              <p className="text-gray-300">
                Built WebSocket-based communication systems enabling low-latency real-time messaging.
              </p>
            </div>

            <div className="bg-[#141414] p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">AI Integrations</h3>
              <p className="text-gray-300">
                Integrated AI systems like Gemini API and ML models for intelligent automation and predictions.
              </p>
            </div>

            <div className="bg-[#141414] p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600">Authentication Systems</h3>
              <p className="text-gray-300">
                Implemented secure authentication using JWT and role-based access control.
              </p>
            </div>
          </div>
        </div>

        {/* 🧠 Learning */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            🧠 Currently Learning
          </h2>
          <div className="bg-[#141414] p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>System Design & Scalable Architectures</li>
              <li>Distributed Systems & Queue Processing</li>
              <li>Cloud (AWS, Docker, CI/CD)</li>
              <li>Advanced DSA for high-performance engineering roles</li>
            </ul>
          </div>
        </div>

        {/* 📈 Growth */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            📈 Building in Public
          </h2>
          <div className="bg-[#141414] p-6 rounded-lg">
            <p className="text-gray-300">
              Actively building projects, contributing to open source, and continuously improving problem-solving skills through DSA and real-world system design.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}