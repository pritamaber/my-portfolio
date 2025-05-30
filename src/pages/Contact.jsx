export default function Contact() {
  return (
    <div
      style={{
        padding: "2rem 5vw",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        lineHeight: "1.7",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "red",
          fontFamily: "'Dancing Script', cursive",
          lineHeight: 1.2,
        }}
      >
        ☎️ Contact Me
      </h1>
      <hr style={{ marginBottom: "2rem", borderColor: "#ccc" }} />

      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong>Name:</strong> Pritam Das
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:pritam.aber@gmail.com" style={{ color: "red" }}>
            pritam.aber@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:6291616198"
            style={{ color: "#333", textDecoration: "none" }}
          >
            +91 62916 16198
          </a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Location:</strong> Kolkata, India 🇮🇳
        </p>
      </div>
    </div>
  );
}
