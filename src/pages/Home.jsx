const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "2rem",
  color: "red",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
};

const badgeStyle = {
  display: "inline-block",
  backgroundColor: "#ffe6e6",
  color: "red",
  fontWeight: 500,
  fontSize: "0.95rem",
  padding: "6px 12px",
  borderRadius: "20px",
  margin: "5px",
};

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.75",
        color: "#333",
      }}
    >
      <h1 style={headingStyle}>🙋‍♂️ Hi,</h1>
      <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
        I'm <strong>Pritam Das</strong> — a software engineer from{" "}
        <span style={{ fontWeight: "bold", color: "#d32f2f" }}>India </span>,
        crafting seamless web experiences with a mix of logic, design, and AI.
      </p>

      <p style={{ fontSize: "1.2rem", margin: "1rem 0 0.5rem" }}>
        🚀 My expertise includes:
      </p>

      <div style={{ marginBottom: "1rem" }}>
        {[
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
          "appwrite",
        ].map((skill) => (
          <span key={skill} style={badgeStyle}>
            {skill}
          </span>
        ))}
      </div>

      <p style={{ fontSize: "1.3rem", marginTop: "1.5rem" }}>
        This portfolio showcases my journey through code, side-projects, and
        blogs — all aimed at solving real-world problems and having fun while at
        it.
      </p>

      <p style={{ fontSize: "1.3rem" }}>
        📬 Reach me at:{" "}
        <a href="mailto:pritam.aber@gmail.com" style={{ color: "red" }}>
          pritam.aber@gmail.com
        </a>
      </p>
    </div>
  );
}
