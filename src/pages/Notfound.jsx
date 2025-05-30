import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "crimson" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Homepage
      </Link>
    </div>
  );
}
