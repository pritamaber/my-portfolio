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
        borderRadius: "12px",
        padding: "1.2rem",
        marginBottom: "1.5rem",
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", color: "#222" }}>
        {title}
      </h3>

      <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "#555" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            backgroundColor: "#007bff",
            padding: "8px 16px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
          }}
        >
          🔗 Live
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            backgroundColor: "#24292e",
            padding: "8px 16px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#24292e";
          }}
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}
