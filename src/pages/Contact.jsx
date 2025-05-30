export default function Contact() {
  const styles = {
    container: {
      padding: "2rem 5vw",
      fontFamily: "'Roboto', sans-serif",
      color: "#333",
      lineHeight: 1.7,
      maxWidth: 700,
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
      color: "red",
      fontFamily: "'Dancing Script', cursive",
      lineHeight: 1.2,
    },
    hr: {
      marginBottom: "2rem",
      borderColor: "#ccc",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    infoText: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
    },
    emailLink: {
      color: "red",
      textDecoration: "none",
    },
    phoneLink: {
      color: "#333",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>☎️ Contact Me</h1>
      <hr style={styles.hr} />

      <section style={styles.card}>
        <p style={styles.infoText}>
          <strong>Name:</strong> Pritam Das
        </p>
        <p style={styles.infoText}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:pritam.aber@gmail.com"
            style={styles.emailLink}
            rel="noopener noreferrer"
          >
            pritam.aber@gmail.com
          </a>
        </p>
        <p style={styles.infoText}>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+916291616198"
            style={styles.phoneLink}
            rel="noopener noreferrer"
          >
            +91 62916 16198
          </a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Location:</strong> Kolkata, India 🇮🇳
        </p>
      </section>
    </div>
  );
}
