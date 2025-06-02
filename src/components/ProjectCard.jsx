import React, { useState } from "react";

export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
}) {
  const [isLiveHovered, setLiveHovered] = useState(false);
  const [isGithubHovered, setGithubHovered] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-base text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLiveHovered(true)}
          onMouseLeave={() => setLiveHovered(false)}
          className={`px-4 py-2 rounded-md font-medium transition ${
            isLiveHovered ? "bg-blue-800" : "bg-blue-600"
          } text-white`}
        >
          🔗 Live
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setGithubHovered(true)}
          onMouseLeave={() => setGithubHovered(false)}
          className={`px-4 py-2 rounded-md font-medium transition ${
            isGithubHovered ? "bg-gray-900" : "bg-gray-800"
          } text-white`}
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}
