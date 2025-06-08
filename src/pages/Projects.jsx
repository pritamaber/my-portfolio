import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectList";

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
