import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const styles = {
  container: {
    padding: "2rem 5vw",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.8,
  },
  title: {
    fontSize: "2.5rem",
    color: "crimson",
    fontFamily: "'Dancing Script', cursive",
    marginBottom: "0.3rem",
  },
  meta: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "2rem",
  },
  heading2: {
    fontSize: "1.8rem",
    color: "#007acc",
    borderBottom: "1px solid #ccc",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  inlineCode: {
    backgroundColor: "#f4f4f4",
    padding: "2px 5px",
    borderRadius: "4px",
    fontSize: "0.95rem",
  },
  codeBlockWrapper: {
    position: "relative",
    marginBottom: "2rem",
  },
  copyButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "4px 8px",
    background: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.8rem",
  },
};

const BlogReader = ({ content, meta = {} }) => {
  const readingTime = calculateReadingTime(content);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Copied to clipboard!");
    } catch {
      alert("Failed to copy!");
    }
  };

  return (
    <article style={styles.container}>
      {/* Move metadata outside markdown content */}
      <h1 style={styles.title}>{meta.title}</h1>
      {(meta.author || meta.date) && (
        <div style={styles.meta}>
          {meta.author && <span>By {meta.author}</span>}
          {meta.author && meta.date && <span> | </span>}
          {meta.date && (
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          )}
          <span> | {readingTime} min read</span>
        </div>
      )}

      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: ({ node, ...props }) => <h2 style={styles.heading2} {...props} />,
          code({ inline, className, children, ...props }) {
            const codeText = String(children).trim();
            if (inline) {
              return (
                <code style={styles.inlineCode} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <div style={styles.codeBlockWrapper}>
                <button
                  onClick={() => handleCopy(codeText)}
                  style={styles.copyButton}
                  aria-label="Copy code to clipboard"
                >
                  Copy
                </button>
                <pre>
                  <code className={className} {...props}>
                    {codeText}
                  </code>
                </pre>
              </div>
            );
          },
        }}
      />
    </article>
  );
};

export default BlogReader;
