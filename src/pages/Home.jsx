const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "2rem",
  color: "red",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
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
        I’m <strong>Pritam Das</strong>, a software engineer from India
        specializing in full-stack development
      </p>

      <p style={{ fontSize: "1.3rem" }}>
        This portfolio showcases my projects and blogs reflecting my journey and
        skills. Feel free to connect or reach out anytime!
      </p>

      <p style={{ fontSize: "1.3rem" }}>
        Contact:{" "}
        <a href="mailto:pritam.aber@gmail.com" style={{ color: "red" }}>
          pritam.aber@gmail.com
        </a>
      </p>
    </div>
  );
}
