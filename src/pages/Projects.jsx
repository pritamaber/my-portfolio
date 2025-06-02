import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "StudyPath AI",
    description:
      "An AI-powered career roadmap generator for Indian students using GPT, built with React and minimal API cost.",
    liveLink: "https://your-live-link.com/studypath",
    githubLink: "https://github.com/pritamaber/studypath-ai",
    badge: "AI Project",
    tag: "GPT + React",
  },
  {
    title: "NoticeBoard",
    description:
      "A platform for employees serving notice period to list openings and help job seekers get referrals.",
    liveLink: "https://your-live-link.com/noticeboard",
    githubLink: "https://github.com/pritamaber/noticeboard",
    badge: "Referral Tool",
    tag: "HR + SaaS",
  },
  {
    title: "MockMate",
    description:
      "A peer-to-peer and AI-driven mock interview platform built using MERN stack and OpenAI APIs.",
    liveLink: "https://your-live-link.com/mockmate",
    githubLink: "https://github.com/pritamaber/mockmate",
    badge: "Interview Prep",
    tag: "AI + MERN",
  },
  {
    title: "QuickTasks",
    description:
      "A minimalist todo and project management app with JWT auth and localStorage sync.",
    liveLink: "https://your-live-link.com/quicktasks",
    githubLink: "https://github.com/pritamaber/quicktasks",
    badge: "Mini App",
    tag: "JWT + UX",
  },
  {
    title: "InternBridge",
    description:
      "Hidden internship marketplace connecting startups with students for short-term gigs.",
    liveLink: "https://your-live-link.com/internbridge",
    githubLink: "https://github.com/pritamaber/internbridge",
    badge: "Startup Idea",
    tag: "Internships",
  },
  {
    title: "DevQuizzer",
    description:
      "A coding MCQ quiz app to prep for tech interviews, with timer and score breakdown.",
    liveLink: "https://your-live-link.com/devquizzer",
    githubLink: "https://github.com/pritamaber/devquizzer",
    badge: "Learning App",
    tag: "Quiz + Timer",
  },
  {
    title: "InterviewReplay",
    description:
      "Share and browse real interview experiences for top companies, sorted by role and company.",
    liveLink: "https://your-live-link.com/interviewreplay",
    githubLink: "https://github.com/pritamaber/interviewreplay",
    badge: "Real Stories",
    tag: "DSA + Reviews",
  },
  {
    title: "ByteBlog",
    description:
      "A simple, fast markdown blogging engine with MDX support for devs.",
    liveLink: "https://your-live-link.com/byteblog",
    githubLink: "https://github.com/pritamaber/byteblog",
    badge: "Blog Engine",
    tag: "MDX + DevTool",
  },
  {
    title: "CareerSwitch AI",
    description:
      "A reskill-to-placement AI tool recommending tech tracks and learning resources for career changers.",
    liveLink: "https://your-live-link.com/careerswitch",
    githubLink: "https://github.com/pritamaber/careerswitch-ai",
    badge: "Career Helper",
    tag: "AI + Upskill",
  },
  {
    title: "FocusFlow",
    description:
      "A Pomodoro + task manager web app built with React and Zustand for managing study sessions.",
    liveLink: "https://your-live-link.com/focusflow",
    githubLink: "https://github.com/pritamaber/focusflow",
    badge: "Productivity",
    tag: "Pomodoro + Zustand",
  },
];
export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-roboto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing mb-8">
        Projects 🚀🚀
      </h1>
      <hr className="mb-8 border-gray-300" />

      <div className="flex flex-col gap-6">
        <ProjectCard
          title="📘 30-Day React Fundamentals"
          description="A daily React learning journey with 30 mini projects covering core features like useState, useEffect, Context API, Routing, and more."
          link="https://github.com/pritamaber/react-fundamental-projects"
          stack={["React", "Tailwind", "JavaScript"]}
          badge="🔥🔥🔥🔥🔥"
          tag="Learning Series"
        />
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
