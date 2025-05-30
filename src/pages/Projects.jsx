import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "StudyPath AI",
    description:
      "An AI-powered career roadmap generator for Indian students using GPT, built with React and minimal API cost.",
    liveLink: "https://your-live-link.com/studypath",
    githubLink: "https://github.com/pritamaber/studypath-ai",
  },
  {
    title: "NoticeBoard",
    description:
      "A platform for employees serving notice period to list openings and help job seekers get referrals.",
    liveLink: "https://your-live-link.com/noticeboard",
    githubLink: "https://github.com/pritamaber/noticeboard",
  },
  {
    title: "MockMate",
    description:
      "A peer-to-peer and AI-driven mock interview platform built using MERN stack and OpenAI APIs.",
    liveLink: "https://your-live-link.com/mockmate",
    githubLink: "https://github.com/pritamaber/mockmate",
  },
  {
    title: "QuickTasks",
    description:
      "A minimalist todo and project management app with JWT auth and localStorage sync.",
    liveLink: "https://your-live-link.com/quicktasks",
    githubLink: "https://github.com/pritamaber/quicktasks",
  },
  {
    title: "InternBridge",
    description:
      "Hidden internship marketplace connecting startups with students for short-term gigs.",
    liveLink: "https://your-live-link.com/internbridge",
    githubLink: "https://github.com/pritamaber/internbridge",
  },
  {
    title: "DevQuizzer",
    description:
      "A coding MCQ quiz app to prep for tech interviews, with timer and score breakdown.",
    liveLink: "https://your-live-link.com/devquizzer",
    githubLink: "https://github.com/pritamaber/devquizzer",
  },
  {
    title: "InterviewReplay",
    description:
      "Share and browse real interview experiences for top companies, sorted by role and company.",
    liveLink: "https://your-live-link.com/interviewreplay",
    githubLink: "https://github.com/pritamaber/interviewreplay",
  },
  {
    title: "ByteBlog",
    description:
      "A simple, fast markdown blogging engine with MDX support for devs.",
    liveLink: "https://your-live-link.com/byteblog",
    githubLink: "https://github.com/pritamaber/byteblog",
  },
  {
    title: "CareerSwitch AI",
    description:
      "A reskill-to-placement AI tool recommending tech tracks and learning resources for career changers.",
    liveLink: "https://your-live-link.com/careerswitch",
    githubLink: "https://github.com/pritamaber/careerswitch-ai",
  },
  {
    title: "FocusFlow",
    description:
      "A Pomodoro + task manager web app built with React and Zustand for managing study sessions.",
    liveLink: "https://your-live-link.com/focusflow",
    githubLink: "https://github.com/pritamaber/focusflow",
  },
];

const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "2rem",
  color: "red",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
};

export default function Projects() {
  return (
    <div
      style={{
        padding: "2rem 5vw",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        lineHeight: "1.7",
        maxWidth: "700px", // add max width for centered content
        margin: "0 auto", // center horizontally
      }}
    >
      <h1 style={headingStyle}>Projects 🚀🚀</h1>
      <hr />
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
}
