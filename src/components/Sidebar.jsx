import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/pritam.jpg";

const navLinks = [
  { label: "Home", path: "/", emoji: "🏠" },
  { label: "Blogs", path: "/blogs", emoji: "📃" },
  { label: "Projects", path: "/projects", emoji: "🚀" },
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

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(true); // always open on desktop
    };
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button (Mobile Only) */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 1001,
            background: "red",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: isMobile ? "fixed" : "fixed",
          top: 0,
          left: open ? 0 : "-100%",
          height: "100vh",
          width: "220px",
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
        }}
      >
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "3px solid rgba(255, 0, 0, 0.3)",
            marginBottom: "0.5rem",
            objectFit: "cover",
          }}
        />

        {/* Bio */}
        <div
          style={{
            textAlign: "center",
            marginTop: "0.5rem",
            marginBottom: "1.5rem",
            fontSize: "0.9rem",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          <div>
            <strong>Full-Time Debugger, Part-Time Wizard 🧙‍♂️</strong>
          </div>
          <div>Interested in coding and stuff..</div>
        </div>

        {/* Nav Links */}
        <nav
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {navLinks.map(({ label, path, emoji }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => isMobile && setOpen(false)} // auto-close on mobile
              style={({ isActive }) => ({
                display: "block",
                padding: "10px 15px",
                marginBottom: "10px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 500,
                transition: "background-color 0.3s ease, color 0.3s ease",
                backgroundColor: isActive ? "#ffe6e6" : "transparent",
                color: isActive ? "red" : "#333",
                textAlign: "center",
              })}
            >
              {emoji} {label}
            </NavLink>
          ))}
        </nav>

        <div style={{ flexGrow: 1 }}></div>

        {/* Social Links */}
        <div
          style={{
            width: "100%",
            borderTop: "1px solid #ddd",
            paddingTop: "1rem",
          }}
        >
          {socialLinks.map(({ label, url, emoji }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "8px 15px",
                color: "#333",
                textDecoration: "none",
                fontSize: "1rem",
                borderRadius: "6px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
