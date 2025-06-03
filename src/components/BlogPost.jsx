import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogReader from "../components/BlogReader";

function parseFrontmatter(raw) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: raw };
  }

  const frontmatterRaw = match[1];
  const content = match[2];
  const data = {};

  frontmatterRaw.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key) return;

    data[key.trim()] = rest
      .join(":")
      .trim()
      .replace(/^['"]|['"]$/g, "");
  });

  return { content, data };
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const files = import.meta.glob("../blogs/*.md", { as: "raw" });

    const matchedPath = Object.keys(files).find((path) =>
      path.endsWith(`${slug}.md`)
    );

    if (!matchedPath) {
      setContent("# 404 Not Found\nSorry, this blog post does not exist.");
      setMeta({});
      return;
    }

    files[matchedPath]().then((raw) => {
      const { content, data } = parseFrontmatter(raw);
      setContent(content);
      setMeta(data);
    });
  }, [slug]);

  if (!content) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 text-lg mt-10">
        Loading blog post...
      </p>
    );
  }

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto font-roboto text-gray-800 dark:text-gray-200">
      <button
        onClick={() => navigate("/blogs")}
        className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md mb-6 hover:bg-blue-50 transition dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20"
        aria-label="Go back to blog list"
      >
        ← Back to Blogs
      </button>

      <BlogReader content={content} meta={meta} />
    </div>
  );
}
