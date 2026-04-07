import Image from "next/image";
import Link from "next/link";

interface ExperienceItemProps {
  company: string;
  role: string;
  dates: string;
  techUsed: string[];
  achievements: string[];
  companyLink?: string;
}

function ExperienceItem({
  company,
  role,
  dates,
  techUsed,
  achievements,
  companyLink,
}: ExperienceItemProps) {
  return (
    <div className="bg-[#141414] p-6 rounded-lg shadow-lg mb-6 last:mb-0 hover:shadow-red-600 transition-shadow duration-300">
      <h3 className="text-3xl font-bold text-red-600 mb-2">
        {role} at{" "}
        {companyLink ? (
          <Link href={companyLink} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
            {company}
          </Link>
        ) : (
          company
        )}
      </h3>
      <p className="text-gray-400 text-lg mb-4">{dates}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techUsed.map((tech) => (
          <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <ul className="list-disc list-inside text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-1">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "GDSC SIT Pune",
      role: "Flutter Lead",
      dates: "Jan 2025 – Present",
      techUsed: ["Flutter", "Dart", "Git", "Community Building"],
      achievements: [
        "Led hands-on Flutter workshops and mentored 100+ students in building real-world applications.",
        "Designed structured learning paths and coordinated with organizers to execute technical sessions.",
        "Helped students publish projects on GitHub and improve practical development skills.",
      ],
      companyLink: "https://developers.google.com/community/gdsc",
    },
    {
      company: "FOSS Club, SIT Pune",
      role: "Co-Founder & Lead",
      dates: "Dec 2023 – Present",
      techUsed: ["Git", "Open Source", "Leadership", "Collaboration"],
      achievements: [
        "Co-founded and scaled an open-source community, organizing FOSSHack with 200+ participants.",
        "Collaborated with sponsors, mentors, and student teams to execute large-scale events.",
        "Mentored students in Git, open-source contributions, and real-world development workflows.",
      ],
    },
    {
      company: "SymbiTech",
      role: "Website Team Head",
      dates: "Jan 2025 – Jul 2025",
      techUsed: ["React", "Node.js", "Tailwind", "Team Leadership"],
      achievements: [
        "Led development of the college fest website, managing a team of developers and designers.",
        "Ensured scalable architecture and smooth user experience for high traffic during events.",
        "Coordinated cross-functional teams to deliver the project within deadlines.",
      ],
    },
    {
      company: "Freelance Projects",
      role: "Full Stack Developer",
      dates: "2024 – Present",
      techUsed: ["Node.js", "React", "MongoDB", "Firebase"],
      achievements: [
        "Built digital solutions for a healthcare startup and a café business, improving their online presence.",
        "Developed scalable backend systems and user-friendly interfaces tailored to client needs.",
        "Delivered end-to-end projects including deployment and maintenance.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">Experience</h1>

      <div className="max-w-4xl w-full">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}