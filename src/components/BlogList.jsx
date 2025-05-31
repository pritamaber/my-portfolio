import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "0", // Remove bottom margin so heading & search align tightly
  color: "red",
  fontFamily: "'Dancing Script', cursive",
  lineHeight: 1.2,
};

const containerStyle = {
  padding: "2rem 5vw",
  fontFamily: "'Roboto', sans-serif",
  color: "#333",
  lineHeight: "1.7",
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "left",
};

const headerWrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
};

const searchInputStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "2px solid red",
  borderRadius: "8px",
  outline: "none",
  transition: "border-color 0.3s ease",
  width: "200px",
};

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const files = import.meta.glob("/src/blogs/*.md", { as: "raw" });

    const loadBlogs = async () => {
      const blogData = await Promise.all(
        Object.entries(files).map(async ([path, loader]) => {
          const slug = path.split("/").pop().replace(".md", "");
          const content = await loader();

          // Simple regex to extract title from frontmatter
          const match = content.match(/---\s*title:\s*["']?(.*?)["']?\s*\n/);
          const title = match ? match[1] : slug;

          return { slug, title };
        })
      );

      setBlogs(blogData);
    };

    loadBlogs();
  }, []);
  const filteredBlogs = blogs.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <div style={headerWrapperStyle}>
        <h1 style={headingStyle}>Blog 📝 📝</h1>
        <input
          type="search"
          placeholder="Search blogs..."
          style={searchInputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "#b30000")}
          onBlur={(e) => (e.target.style.borderColor = "red")}
          aria-label="Search blogs"
        />
      </div>

      <hr style={{ marginBottom: "2rem", borderColor: "#ccc" }} />

      <p>
        This blog is a curated collection of React concepts—from basics to
        advanced topics—featuring practical techniques and mini projects to help
        you master each feature.
      </p>

      <hr style={{ marginBottom: "2rem", borderColor: "#ccc" }} />

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "600px",
          margin: "0",
        }}
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(({ slug, title }, index) => (
            <li key={slug} style={{ marginBottom: "1.2rem" }}>
              <Link
                to={`/blog/${slug}`}
                style={{
                  color: "red",
                  fontWeight: "500",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                {index + 1}. {title}
              </Link>
            </li>
          ))
        ) : (
          <li style={{ fontStyle: "italic", color: "#666" }}>
            No blogs found.
          </li>
        )}
      </ul>
    </div>
  );
}
