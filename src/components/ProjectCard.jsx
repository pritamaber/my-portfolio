export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        maxWidth: "500px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "1rem", color: "blue" }}
      >
        Live
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue" }}
      >
        GitHub
      </a>
    </div>
  );
}
