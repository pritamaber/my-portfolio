import React, { useState } from "react";

const styles = {
  card: {
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
  },
  title: {
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
    color: "#222",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "#555",
  },
  linksWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  linkBase: {
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    color: "white",
    cursor: "pointer",
    userSelect: "none",
  },
  liveLink: {
    backgroundColor: "#007bff",
  },
  liveLinkHover: {
    backgroundColor: "#0056b3",
  },
  githubLink: {
    backgroundColor: "#24292e",
  },
  githubLinkHover: {
    backgroundColor: "#000",
  },
};

export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
}) {
  const [isLiveHovered, setLiveHovered] = useState(false);
  const [isGithubHovered, setGithubHovered] = useState(false);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <div style={styles.linksWrapper}>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit live project: ${title}`}
          style={{
            ...styles.linkBase,
            ...(isLiveHovered ? styles.liveLinkHover : styles.liveLink),
          }}
          onMouseEnter={() => setLiveHovered(true)}
          onMouseLeave={() => setLiveHovered(false)}
        >
          🔗 Live
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit GitHub repository: ${title}`}
          style={{
            ...styles.linkBase,
            ...(isGithubHovered ? styles.githubLinkHover : styles.githubLink),
          }}
          onMouseEnter={() => setGithubHovered(true)}
          onMouseLeave={() => setGithubHovered(false)}
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}
