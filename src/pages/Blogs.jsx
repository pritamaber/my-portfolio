const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "red",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
};

export default function Blogs() {
  return (
    <div
      style={{
        padding: "2rem 5vw",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        lineHeight: "1.7",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={headingStyle}>📃 Blog Posts</h1>
      <hr
        style={{ margin: "0 auto 2rem", width: "60%", borderColor: "#ccc" }}
      />

      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "1rem" }}>
        I'm cooking up some insightful articles on:
      </p>

      <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
        <li>🛠️ Web development best practices</li>
        <li>💡 JavaScript, React, and Next.js tips</li>
        <li>🤖 Using AI to supercharge your dev workflow</li>
        <li>📈 Real-world startup project breakdowns</li>
      </ul>

      <p style={{ fontSize: "1.15rem", marginTop: "2rem", color: "#888" }}>
        Articles will be published soon. Stay tuned! 🚀
      </p>
    </div>
  );
}
