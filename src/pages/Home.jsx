const headingStyle = {
  fontSize: "2.8rem",
  marginBottom: "1.5rem",
  color: "#d32f2f",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
};

const badgeStyle = {
  display: "inline-block",
  backgroundColor: "#ffe6e6",
  color: "#c62828",
  fontWeight: 500,
  fontSize: "0.9rem",
  padding: "6px 14px",
  borderRadius: "999px",
  margin: "4px 6px",
};

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "2rem 1rem",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.7",
        color: "#333",
      }}
    >
      <h1 style={headingStyle}>🙋‍♂️ Hi, I'm Pritam</h1>

      <p style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>
        A passionate software engineer from{" "}
        <span style={{ fontWeight: "bold", color: "#d32f2f" }}>India</span>, I
        build seamless digital experiences with a blend of logic, clean design,
        and AI.
      </p>

      <p style={{ fontSize: "1.2rem", margin: "1.2rem 0 0.8rem" }}>
        🚀 Technologies I love working with:
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
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

      <p style={{ fontSize: "1.25rem", marginBottom: "1.2rem" }}>
        This portfolio is my playground of ideas — a space where I share my
        projects, experiments, and thoughts while solving real-world problems
        with code.
      </p>

      <p style={{ fontSize: "1.2rem" }}>
        📬 Contact:{" "}
        <a
          href="mailto:pritam.aber@gmail.com"
          style={{
            color: "#c62828",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          pritam.aber@gmail.com
        </a>
      </p>
    </div>
  );
}
