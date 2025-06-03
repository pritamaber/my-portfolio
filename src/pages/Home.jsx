import { motion } from "framer-motion";

const skillGroups = {
  Frontend: [
    { name: "React", rating: 5 },
    { name: "JavaScript", rating: 5 },
    { name: "Next.js", rating: 4 },
    { name: "TypeScript", rating: 3 },
  ],
  Backend: [
    { name: "Node.js", rating: 4 },
    { name: "Express", rating: 4 },
    { name: "REST APIs", rating: 5 },
    { name: "MongoDB", rating: 4 },
    { name: "Firebase", rating: 4 },
    { name: "Appwrite", rating: 4 },
  ],
  Tools: [
    { name: "Git", rating: 5 },
    { name: "GitHub", rating: 5 },
    { name: "Vercel", rating: 4 },
    { name: "OpenAI / GPT", rating: 4 },
  ],
  "CS Fundamentals": [
    { name: "Data Structures", rating: 5 },
    { name: "System Design", rating: 3 },
    { name: "Python", rating: 3 },
    { name: "AI/ML", rating: 3 },
  ],
};

const SkillBadge = ({ name, rating }) => (
  <span
    className="bg-red-50 text-red-700 border border-red-200 text-xs sm:text-sm px-3 py-1 rounded-full font-medium dark:bg-red-900 dark:text-red-200 dark:border-red-700"
    title={`⭐ ${rating}/5`}
  >
    {name}
  </span>
);

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-roboto text-gray-800 dark:text-gray-200">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-red-600 font-dancing dark:text-red-300 mb-6"
      >
        🙋‍♂️ Hi, I'm Pritam
      </motion.h1>

      <p className="text-lg sm:text-xl mb-6">
        A passionate software engineer from{" "}
        <span className="font-semibold text-red-600 dark:text-red-300">
          India 🇮🇳
        </span>
        , I build seamless digital experiences with a blend of logic, clean
        design, and AI.
      </p>

      <p className="text-lg font-medium mb-3">🚀 My expertise are in:</p>

      <div className="flex flex-col gap-6 mb-8">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group}>
            <p className="text-sm font-semibold text-red-500 mb-2 dark:text-red-300">
              {group}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg mb-6">
        This portfolio is my playground of ideas — a space where I share my
        projects, experiments, and thoughts while solving real-world problems
        with code.
      </p>

      <div className="mt-6">
        <a
          target="_blank"
          href="mailto:pritam.aber@gmail.com"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold transition dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200"
        >
          📬 Let's Talk
        </a>
      </div>
    </div>
  );
}
