const styles = {
  container: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: "'Roboto', sans-serif",
    lineHeight: 1.7,
    color: "#333",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "1.5rem",
    color: "#d32f2f",
    fontFamily: "'Dancing Script', cursive",
    lineHeight: 1.2,
  },
  paragraphLarge: {
    fontSize: "1.3rem",
    marginBottom: "1.2rem",
  },
  paragraphMedium: {
    fontSize: "1.2rem",
  },
  paragraphMediumMargin: {
    fontSize: "1.2rem",
    margin: "1.2rem 0 0.8rem",
  },
  paragraphMediumBottom: {
    fontSize: "1.25rem",
    marginBottom: "1.2rem",
  },
  badgeContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: "1.5rem",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#ffe6e6",
    color: "#c62828",
    fontWeight: 500,
    fontSize: "0.9rem",
    padding: "6px 14px",
    borderRadius: "999px",
    margin: "4px 6px",
  },
  contactLink: {
    color: "#c62828",
    fontWeight: "bold",
    textDecoration: "none",
  },
  boldRedText: {
    fontWeight: "bold",
    color: "#d32f2f",
  },
};

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
    "appwrite",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🙋‍♂️ Hi, I'm Pritam</h1>

      <p style={styles.paragraphLarge}>
        A passionate software engineer from{" "}
        <span style={styles.boldRedText}>India</span>, I build seamless digital
        experiences with a blend of logic, clean design, and AI.
      </p>

      <p style={styles.paragraphMediumMargin}>
        🚀 Technologies I love working with:
      </p>

      <div style={styles.badgeContainer}>
        {skills.map((skill) => (
          <span key={skill} style={styles.badge}>
            {skill}
          </span>
        ))}
      </div>

      <p style={styles.paragraphMediumBottom}>
        This portfolio is my playground of ideas — a space where I share my
        projects, experiments, and thoughts while solving real-world problems
        with code.
      </p>

      <p style={styles.paragraphMedium}>
        📬 Contact:{" "}
        <a href="mailto:pritam.aber@gmail.com" style={styles.contactLink}>
          pritam.aber@gmail.com
        </a>
      </p>
    </div>
  );
}
