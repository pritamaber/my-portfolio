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
      }}
    >
      {tabs.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            margin: "10px 0",
            textDecoration: "none",
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
            fontSize: "1.1rem",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          })}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
