import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/pritam.jpg";

const navLinks = [
  { label: "Home", path: "/", emoji: "🏠" },
  { label: "Blogs", path: "/blogs", emoji: "📃" },
  { label: "Projects", path: "/projects", emoji: "🚀" },
  { label: "Contact", path: "/contacts", emoji: "☎️" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pritam-das-0a00b5178/",
    emoji: "🔗",
  },
  { label: "GitHub", url: "https://github.com/pritamaber", emoji: "💻" },
  {
    label: "Leetcode",
    url: "https://leetcode.com/u/pritamaber2/",
    emoji: "🧑‍💻",
  },
];

const styles = {
  toggleButton: {
    position: "fixed",
    top: 10,
    left: 10,
    zIndex: 1001,
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: 5,
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  sidebar: (open, isMobile) => ({
    position: "fixed",
    top: 0,
    left: open ? 0 : "-100%",
    height: "100vh",
    width: 220,
    borderRight: "1px solid #ddd",
    padding: "2rem 1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    fontFamily: "'Open Sans', sans-serif",
    zIndex: 1000,
    transition: "left 0.3s ease-in-out",
  }),
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "3px solid rgba(255, 0, 0, 0.3)",
    marginBottom: 8,
    objectFit: "cover",
  },
  bio: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
    color: "#555",
    lineHeight: 1.6,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  navLink: (isActive) => ({
    display: "block",
    padding: "10px 15px",
    marginBottom: 10,
    borderRadius: 8,
    textDecoration: "none",
    fontSize: "1.05rem",
    fontWeight: 500,
    transition: "background-color 0.3s ease, color 0.3s ease",
    backgroundColor: isActive ? "#ffe6e6" : "transparent",
    color: isActive ? "red" : "#333",
    textAlign: "center",
  }),
  socialContainer: {
    width: "100%",
    borderTop: "1px solid #ddd",
    paddingTop: "1rem",
  },
  socialLink: (hovered) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "8px 15px",
    color: "#333",
    textDecoration: "none",
    fontSize: "1rem",
    borderRadius: 6,
    transition: "background-color 0.3s ease",
    backgroundColor: hovered ? "#f0f0f0" : "transparent",
  }),
};

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(window.innerWidth >= 768);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile); // Open sidebar by default on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button (Mobile Only) */}
      {isMobile && (
        <button
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          onClick={() => setOpen((o) => !o)}
          style={styles.toggleButton}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside style={styles.sidebar(open, isMobile)}>
        {/* Profile Image */}
        <img src={profilePic} alt="Profile" style={styles.profilePic} />

        {/* Availability Tag with Pulsing Dot */}
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#28a745",
                animation: "pulse 1.5s infinite ease-in-out",
              }}
            />
            Available
          </span>
        </div>

        {/* Bio */}
        <div style={styles.bio}>
          <div style={{ marginTop: "1rem" }}>
            <strong>Code. Debug. Repeat. 🚀</strong>
          </div>
          <div>React lover, problem solver, lifelong learner.</div>
          <hr />
        </div>

        {/* Nav Links */}
        <nav style={styles.nav}>
          {navLinks.map(({ label, path, emoji }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => isMobile && setOpen(false)}
              style={({ isActive }) => styles.navLink(isActive)}
            >
              {emoji} {label}
            </NavLink>
          ))}
        </nav>

        <div style={{ flexGrow: 1 }} />

        {/* Social Links */}
        <div style={styles.socialContainer}>
          {socialLinks.map(({ label, url, emoji }) => {
            const isHovered = hoveredSocial === label;
            return (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink(isHovered)}
                onMouseEnter={() => setHoveredSocial(label)}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label={`Visit ${label}`}
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        {/* Add animation keyframes */}
        <style>
          {`
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.6); opacity: 0.4; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}
        </style>
      </aside>
    </>
  );
}
