import { useState } from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Blogs", path: "/blogs" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 100,
    backgroundColor: "white",
    padding: "0.5rem",
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  tab: (isActive, isHovered) => ({
    margin: "10px 0",
    padding: "8px 12px",
    textDecoration: "none",
    borderRadius: 6,
    color: isActive ? "white" : "#333",
    backgroundColor: isActive ? "red" : isHovered ? "#f5f5f5" : "transparent",
    fontWeight: 500,
    fontSize: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    transition: "all 0.3s ease",
  }),
};

export default function VerticalTabs() {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <nav style={styles.nav}>
      {tabs.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          style={({ isActive }) => styles.tab(isActive, hoveredTab === path)}
          onMouseEnter={() => setHoveredTab(path)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
