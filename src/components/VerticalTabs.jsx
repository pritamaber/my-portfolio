import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Blogs", path: "/blogs" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function VerticalTabs() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        backgroundColor: "white",
        padding: "0.5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {tabs.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            margin: "10px 0",
            padding: "8px 12px",
            textDecoration: "none",
            borderRadius: "6px",
            color: isActive ? "white" : "#333",
            backgroundColor: isActive ? "red" : "transparent",
            fontWeight: 500,
            fontSize: "1rem",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            transition: "all 0.3s ease",
          })}
          onMouseEnter={(e) => {
            if (
              !e.currentTarget.style.backgroundColor ||
              e.currentTarget.style.backgroundColor === "transparent"
            ) {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            }
          }}
          onMouseLeave={(e) => {
            if (
              e.currentTarget.style.backgroundColor === "rgb(245, 245, 245)"
            ) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
