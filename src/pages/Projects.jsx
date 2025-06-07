import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "StudyPath AI",
    description:
      "An AI-powered career roadmap generator using OpenAI, for students exploring tech careers in India.",
    liveLink: "https://your-live-link.com/studypath",
    githubLink: "https://github.com/pritamaber/studypath-ai",
    badge: "AI Project",
    tag: "React, GPT API, Forms, PDF, Tailwind",
  },
  {
    title: "MockMate",
    description:
      "A peer-to-peer and AI mock interview platform built with MERN stack, GPT, and role-based auth.",
    liveLink: "https://your-live-link.com/mockmate",
    githubLink: "https://github.com/pritamaber/mockmate",
    badge: "Interview Prep",
    tag: "React, Context API, OpenAI, MongoDB, Auth",
  },
  {
    title: "DevQuizzer",
    description:
      "An MCQ quiz platform to prep for interviews, with score, timer, and randomized question logic.",
    liveLink: "https://your-live-link.com/devquizzer",
    githubLink: "https://github.com/pritamaber/devquizzer",
    badge: "Learning App",
    tag: "React, useState, useEffect, Timer, LocalStorage",
  },
  {
    title: "AstroExplorer",
    description:
      "A visual explorer using NASA's open APIs to browse astronomy pictures, Mars rover data, and more.",
    liveLink: "https://your-live-link.com/astroexplorer",
    githubLink: "https://github.com/pritamaber/astroexplorer",
    badge: "Space App",
    tag: "React, NASA API, Fetch, Pagination, Carousel",
  },
  {
    title: "IndiaPulse",
    description:
      "A D3-powered dashboard using Indian Govt APIs to visualize pollution, rainfall, and transport data.",
    liveLink: "https://your-live-link.com/indiapulse",
    githubLink: "https://github.com/pritamaber/indiapulse",
    badge: "Govt Data",
    tag: "React, D3.js, API Fetch, Charts, Filter",
  },
  {
    title: "InternBridge",
    description:
      "A hidden internship marketplace where startups post gigs and students apply via a clean interface.",
    liveLink: "https://your-live-link.com/internbridge",
    githubLink: "https://github.com/pritamaber/internbridge",
    badge: "Startup Idea",
    tag: "React, MongoDB, JWT, Forms, Role-based UI",
  },
  {
    title: "FinViz",
    description:
      "A financial stock charting tool with real-time candlestick visualizations using D3.js.",
    liveLink: "https://your-live-link.com/finviz",
    githubLink: "https://github.com/pritamaber/finviz",
    badge: "Finance Tool",
    tag: "React, D3.js, SVG, Stock API, useRef",
  },
  {
    title: "ByteBlog",
    description:
      "An ultra-fast blog platform using MDX, optimized for tech writers and React devs.",
    liveLink: "https://your-live-link.com/byteblog",
    githubLink: "https://github.com/pritamaber/byteblog",
    badge: "Blog Engine",
    tag: "React, MDX, Routing, Search, SEO",
  },
  {
    title: "FocusFlow",
    description:
      "A productivity tool combining Pomodoro timer, tasks, and streak tracking using Zustand.",
    liveLink: "https://your-live-link.com/focusflow",
    githubLink: "https://github.com/pritamaber/focusflow",
    badge: "Productivity",
    tag: "React, Zustand, Timers, LocalStorage",
  },
  {
    title: "CareerSwitch AI",
    description:
      "AI-powered tool suggesting learning paths and resources for career switchers in tech.",
    liveLink: "https://your-live-link.com/careerswitch",
    githubLink: "https://github.com/pritamaber/careerswitch-ai",
    badge: "Career Helper",
    tag: "React, GPT API, Forms, AI Roadmap",
  },
];
export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-roboto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing dark:text-red-300 mb-8">
        Projects 🚀🚀
      </h1>
      <hr className="mb-8 border-gray-300" />

      <div className="flex flex-col gap-6">
        <ProjectCard
          title="📘 30+ mini react projects"
          description="A daily React learning journey with 30 mini projects covering core features like useState, useEffect, Context API, Routing, and more."
          liveLink="https://projects.impritam.com"
          githubLink="https://github.com/pritamaber/react-mini-projects"
          stack={["React", "Tailwind", "JavaScript"]}
          badge="🔥🔥🔥🔥🔥"
          tag="Learning Series"
        />
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} index={idx} />
        ))}
      </div>
    </div>
  );
}
