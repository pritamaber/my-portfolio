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
];

export default function Sidebar() {
  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
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
          border: "3px solid rgba(255, 0, 0, 0.3)", // faded red border
          marginBottom: "0.5rem",
          objectFit: "cover",
        }}
      />

      {/* Cursive Signature */}
      <p
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "1.8rem",
          color: "red",
          transform: "rotate(-10deg)", // tilt 30deg counter-clockwise
          marginTop: "0.2rem",
        }}
      >
        Pritam..😎😎
      </p>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full viewport height
        }}
      >
        <nav
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          {navLinks.map(({ label, path, emoji }) => (
            <NavLink
              key={path}
              to={path}
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
      </div>

      {/* Spacer */}
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
  );
}
