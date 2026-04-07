import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  title: string;
  description: string;
  link: string;
  platform: string;
}

function BlogItem({ title, description, link, platform }: BlogItemProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg mb-6 last:mb-0 hover:shadow-red-600 transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-400 text-lg mb-4">{platform}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
        Read More
      </Link>
    </div>
  );
}

export default function Blogs() {
  const blogPosts = [
    {
      title: "Designing Scalable Backend Systems with Node.js",
      description:
        "Explaining how to design scalable backend architectures using Node.js, Express, and job queues like BullMQ. Covers handling concurrent requests, async workflows, and performance optimization.",
      link: "#",
      platform: "Technical Writing",
    },
    {
      title: "Building Real-Time Applications with WebSockets",
      description:
        "A deep dive into implementing real-time communication using Socket.io, covering event-driven architecture, scalability challenges, and optimizing low-latency communication.",
      link: "#",
      platform: "Technical Writing",
    },
  ];

  const openSourceContributions = [
    {
      title: "Open Source Contributions",
      description:
        "Actively contributing to open-source projects by improving backend performance, fixing issues, and collaborating with developers. Focused on learning large-scale codebases and real-world engineering practices.",
      link: "https://github.com/Bitsnbytes14",
    },
  ];

  const speakingEngagements = [
    {
      title: "Community & Leadership",
      description:
        "Led technical sessions and collaborated with student communities like GDSC and FOSS Club, mentoring peers and organizing development-focused events.",
      link: "https://www.linkedin.com/in/mohammad-ahmad141004",
      platform: "Community",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">
        Blogs & Contributions
      </h1>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">
          Technical Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">
          Open Source
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openSourceContributions.map((contribution, index) => (
            <BlogItem
              key={index}
              title={contribution.title}
              description={contribution.description}
              link={contribution.link}
              platform="GitHub"
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-6 text-red-600 text-center">
          Leadership & Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakingEngagements.map((engagement, index) => (
            <BlogItem
              key={index}
              title={engagement.title}
              description={engagement.description}
              link={engagement.link}
              platform={engagement.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
}