import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogReader from "../components/BlogReader";

/**
 * Parses markdown frontmatter from raw content.
 * Expects frontmatter wrapped between `---` delimiters at the top.
 * Returns an object with `data` (frontmatter key-value pairs) and `content` (markdown body).
 */
function parseFrontmatter(raw) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    // No frontmatter found, return raw content as-is
    return { data: {}, content: raw };
  }

  const frontmatterRaw = match[1];
  const content = match[2];

  // Parse each line as key: value pair
  const data = {};
  frontmatterRaw.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key) return;

    // Join rest in case ':' appears in value, trim, and remove quotes
    data[key.trim()] = rest
      .join(":")
      .trim()
      .replace(/^['"]|['"]$/g, "");
  });

  return { content, data };
}

// ---------- Styles ----------

const styles = {
  container: {
    margin: "1rem 5vw",
  },
  backButton: {
    margin: "1rem 5vw",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    fontSize: "1.1rem",
    background: "none",
    border: "1px solid #007acc",
    borderRadius: "5px",
    color: "#007acc",
  },
  loadingText: {
    margin: "2rem 5vw",
    fontSize: "1.2rem",
    color: "#888",
  },
  errorText: {
    margin: "2rem 5vw",
    fontSize: "1.2rem",
    color: "red",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // State for markdown content and frontmatter metadata
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    // Import all markdown files in the blogs directory as raw strings
    const files = import.meta.glob("../blogs/*.md", { as: "raw" });

    // Find markdown file matching the slug
    const matchedPath = Object.keys(files).find((path) =>
      path.endsWith(`${slug}.md`)
    );

    if (!matchedPath) {
      // If no matching blog found, show 404 content
      setContent("# 404 Not Found\nSorry, this blog post does not exist.");
      setMeta({});
      return;
    }

    // Load and parse the matched markdown file
    files[matchedPath]().then((raw) => {
      const { content, data } = parseFrontmatter(raw);
      setContent(content);
      setMeta(data);
    });
  }, [slug]);

  // Render loading state before content loads
  if (!content) {
    return <p style={styles.loadingText}>Loading blog post...</p>;
  }

  return (
    <div style={styles.container}>
      <button
        onClick={() => navigate("/blogs")}
        style={styles.backButton}
        aria-label="Go back to blog list"
      >
        ← Back to Blogs
      </button>

      {/* Pass parsed content and metadata to BlogReader for rendering */}
      <BlogReader content={content} meta={meta} />
    </div>
  );
};

export default BlogPost;
