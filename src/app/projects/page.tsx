import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Codemia",
      description:
        "Automated coding assessment platform with multi-language execution (C/C++/Java/Python/JS). Built scalable backend using Redis + BullMQ, reducing execution latency by 50% and enabling parallel processing.",
      imageSrc: "/projects/codemia.jpeg",
      technologies: ["Node.js", "Express", "Redis", "BullMQ", "Supabase", "React"],
      githubLink: "https://github.com/Bitsnbytes14/Codemia",
    },
    {
      title: "AI Resume Builder",
      description:
        "AI-powered resume builder using Gemini API that improves ATS scores and reduces resume creation time by 65%. Built with scalable backend and secure file handling.",
      imageSrc: "/projects/ai_resume.png",
      technologies: ["Node.js", "React", "MongoDB", "Gemini API", "Multer"],
      githubLink: "https://github.com/Bitsnbytes14/AI-Resume-Builder",
    },
    {
      title: "Vairava (ACL Prediction System)",
      description:
        "AI-based medical diagnostic system using CNN and XGBoost achieving 93% accuracy for ACL rupture detection and graft size prediction.",
      imageSrc: "/projects/vairava.png",
      technologies: ["Python", "CNN", "XGBoost", "Streamlit"],
      githubLink: "https://github.com/Bitsnbytes14/Vairava---ACL-Graft-Predictor",
    },
    {
      title: "SymbiConnect",
      description:
        "Real-time chat application using WebSockets with secure messaging and low-latency communication. Achieved ~99% uptime with scalable architecture.",
      imageSrc: "/projects/chat.png",
      technologies: ["MERN", "Socket.io", "JWT", "MongoDB"],
      githubLink: "https://github.com/Bitsnbytes14/SymbiConnect",
    },
    {
      title: "Event Ticket Management System",
      description:
        "Full-stack desktop application automating event booking and payments, reducing manual effort by 75%. Includes admin and customer dashboards.",
      imageSrc: "/projects/event.png",
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      githubLink: "https://github.com/Bitsnbytes14/Event-Management-Ticket-System",
    },
    {
      title: "Business Insights Dashboard",
      description:
        "Interactive Power BI dashboard for financial analytics and reporting. Tracks KPIs like funding, growth trends, and category performance.",
      imageSrc: "/projects/Dashboard.png",
      technologies: ["Power BI", "Excel", "Data Analysis"],
      githubLink: "https://github.com/Bitsnbytes14/business-insights-dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}