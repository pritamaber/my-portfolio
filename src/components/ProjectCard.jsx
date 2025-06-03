export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
  stack = [],
  badge,
  tag,
  link, // fallback for liveLink
  index, // optional project index
}) {
  // Optional: Derive stack from tag if stack not passed explicitly
  const derivedStack =
    stack.length > 0
      ? stack
      : tag
      ? tag.split(",").map((tech) => tech.trim())
      : [];

  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all bg-white">
      {/* Title + Badge */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-red-600">
          {index !== undefined ? `#${index + 1} - ` : ""}
          {title}
        </h2>
        {badge && (
          <span className="text-sm px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
            {badge}
          </span>
        )}
      </div>

      {/* Tag */}
      {tag && (
        <p className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2">
          🚀 {tag}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-gray-700 mb-3">{description}</p>

      {/* Tech Stack */}
      {derivedStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {derivedStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 text-sm">
        {(liveLink || link) && (
          <a
            href={liveLink || link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            🔗 Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            💻 GitHub
          </a>
        )}
      </div>
    </div>
  );
}
