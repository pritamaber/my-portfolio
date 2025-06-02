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

export default function BlogReader({ content, meta = {} }) {
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
    <article className="prose prose-lg max-w-3xl mx-auto font-roboto text-gray-800 prose-code:before:content-none prose-code:after:content-none">
      {/* Title */}
      {meta.title && (
        <h1 className="text-4xl text-red-600 font-dancing mb-2">
          {meta.title}
        </h1>
      )}

      {/* Meta Info */}
      {(meta.author || meta.date) && (
        <div className="text-sm text-gray-500 mb-6">
          {meta.author && <span>By {meta.author}</span>}
          {meta.author && meta.date && <span> • </span>}
          {meta.date && (
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          )}
          <span> • {readingTime} min read</span>
        </div>
      )}

      {/* Markdown Content */}
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl text-blue-600 border-b pb-1 mt-8 mb-4"
              {...props}
            />
          ),
          code({ inline, className, children, ...props }) {
            const codeText = String(children).trim();
            if (inline) {
              return (
                <code
                  className="bg-gray-100 px-1.5 py-0.5 rounded text-sm"
                  {...props}
                >
                  {codeText}
                </code>
              );
            }

            return (
              <div className="relative mb-6">
                <button
                  onClick={() => handleCopy(codeText)}
                  className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs rounded hover:bg-gray-700 transition"
                  aria-label="Copy code to clipboard"
                >
                  Copy
                </button>
                <pre className="overflow-x-auto rounded-lg p-4 bg-gray-900 text-white">
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
}
