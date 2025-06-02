export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Python",
    "GPT APIs",
    "AI/ML",
    "OpenAI",
    "Git",
    "GitHub",
    "Firebase",
    "Vercel",
    "Appwrite",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-roboto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600 font-dancing">
        🙋‍♂️ Hi, I'm Pritam
      </h1>

      <p className="text-lg md:text-xl mb-6">
        A passionate software engineer from{" "}
        <span className="font-semibold text-red-600">India 🇮🇳</span>, I build
        seamless digital experiences with a blend of logic, clean design, and
        AI.
      </p>

      <p className="text-lg font-medium mb-4">
        🚀 Technologies I love working with:
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-red-100 text-red-700 text-sm px-4 py-1 rounded-full font-semibold"
          >
            {skill}
          </span>
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
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          📬 Let's Talk
        </a>
      </div>
    </div>
  );
}
