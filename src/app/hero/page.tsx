"use client";

import Image from "next/image";
import Link from "next/link";
import TechStackCard from "../../components/TechStackCard";
import ProjectCard from "../../components/ProjectCard";
import GitHubCard from "../../components/GitHubCard";
import { useEffect, useState } from 'react';

import { 
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faDocker,
  faAws,
  faGoogle,
  faJenkins,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [githubData, setGithubData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setGithubData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  const techStack = [
    { name: "Node.js", icon: faNodeJs, color: "#3C873A" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Next.js", icon: faReact, color: "#000000" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "Docker", icon: faDocker, color: "#2496ED" },
    { name: "AWS", icon: faAws, color: "#FF9900" },
    { name: "Google Cloud", icon: faGoogle, color: "#4285F4" },
    { name: "Azure", icon: faMicrosoft, color: "#0078D4" },
    { name: "Jenkins", icon: faJenkins, color: "#D24939" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    { name: "Vercel", icon: faCloud, color: "#000000" },
  ];

  const projects = [
    {
      title: "Codemia",
      description:
        "Scalable automated coding platform supporting multi-language execution with Redis + BullMQ queues. Reduced execution latency by 50% and enabled parallel processing.",
      imageSrc: "/projects/codemia.png",
      technologies: ["Node.js", "Express", "Redis", "BullMQ", "Supabase"],
      githubLink: "https://github.com/Bitsnbytes14/Codemia",
    },
    {
      title: "AI Resume Builder",
      description:
        "AI-powered resume builder using Gemini API, improving ATS scores and reducing resume creation time by 65%. Built with scalable backend and secure file handling.",
      imageSrc: "/projects/resume.png",
      technologies: ["Node.js", "React", "MongoDB", "Gemini API"],
      githubLink: "https://github.com/Bitsnbytes14/AI-Resume-Builder",
    },
    {
      title: "SymbiConnect",
      description:
        "Real-time chat application using WebSockets with secure and scalable communication. Achieved low latency and 99% uptime.",
      imageSrc: "/projects/chat.png",
      technologies: ["MERN", "Socket.io", "JWT"],
      githubLink: "https://github.com/Bitsnbytes14/SymbiConnect",
    },
    {
      title: "Vairava",
      description:
        "AI-based ACL injury prediction system using CNN and XGBoost with 93% accuracy, enabling real-time medical insights.",
      imageSrc: "/projects/vairava.png",
      technologies: ["Python", "CNN", "XGBoost", "Streamlit"],
      githubLink: "https://github.com/Bitsnbytes14/Vairava---ACL-Graft-Predictor",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col pt-16">

      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end min-h-[70vh] px-8 py-16 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <p className="text-lg font-semibold text-red-600 mb-2 flex items-center">
            <span className="text-xs tracking-widest border border-red-600 px-2 py-0.5 rounded-sm mr-2">
              BACKEND ENGINEER
            </span>
            PORTFOLIO
          </p>

          <h1 className="text-8xl font-black leading-tight drop-shadow-lg mb-4">
            MOHAMMAD <br /> AHMAD
          </h1>

          <p className="text-xl max-w-2xl leading-relaxed drop-shadow-md">
            Backend-focused Full Stack Developer building scalable systems, real-time applications, and cloud-native architectures. I specialize in Node.js, distributed processing, and designing production-ready systems that solve real-world problems.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link href="/projects" className="flex items-center px-8 py-3 bg-white text-black text-xl font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">
            View Projects
          </Link>

          <Link href="/contact" className="flex items-center px-8 py-3 bg-gray-600 text-white text-xl font-bold rounded-md hover:bg-gray-700 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <TechStackCard key={index} name={tech.name} icon={tech.icon} color={tech.color} />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-white">GitHub</h2>
        {isLoading && <p className="text-center text-gray-400">Loading GitHub data...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {githubData && <GitHubCard data={githubData} />}
      </div>
    </div>
  );
}