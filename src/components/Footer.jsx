import React from "react";

const Footer = () => {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {year} <strong style={styles.name}>Pritam</strong> • Last updated:{" "}
        {month} {year}
      </p>
    </footer>
  );
};

const sidebarWidth = 220;

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: sidebarWidth, // push footer right by sidebar width
    width: `calc(100vw - ${sidebarWidth}px)`, // reduce footer width
    padding: "1rem",
    backgroundColor: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #e0e0e0",
    boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.05)",
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#444",
    fontFamily: "Segoe UI, Roboto, sans-serif",
    letterSpacing: "0.3px",
  },
  name: {
    color: "#d43f3a",
    fontWeight: "600",
  },
};
export default Footer;
