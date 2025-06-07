import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

          const match = content.match(/---\s*title:\s*["']?(.*?)["']?\s*\n/);
          const title = match ? match[1] : slug;

          return { slug, title };
        })
      );

      setBlogs(blogData.reverse()); // 👈 Ensures oldest at top, latest at bottom
    };

    loadBlogs();
  }, []);

  const filteredBlogs = blogs.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-roboto text-gray-800 dark:text-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing dark:text-red-300 mb-6">
          React fundamental blogs 🚀 📝
        </h1>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-red-600 focus:border-red-800 px-4 py-2 rounded-lg text-base outline-none transition w-full md:w-[250px] bg-white dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          aria-label="Search blogs"
        />
      </div>

      <hr className="mb-8 border-gray-300 dark:border-gray-700" />

      <p className="text-lg mb-8 leading-relaxed text-gray-800 dark:text-gray-300">
        I'm documenting my React learning journey through a series of hands-on
        mini projects and blog posts — each focused on mastering a core
        fundamental of React.
        <br />
        You can explore the complete collection of mini projects on{" "}
        <a
          href="https://github.com/pritamaber/react-mini-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold"
        >
          GitHub ↗
        </a>{" "}
        and live previews on{" "}
        <a
          href="https://projects.impritam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold"
        >
          Projects ↗
        </a>
        .
      </p>

      <ul className="list-none space-y-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(({ slug, title }, index) => (
            <li key={slug}>
              <Link
                to={`/blog/${slug}`}
                className="text-red-600 font-medium text-lg hover:underline dark:text-red-400 dark:hover:text-red-300"
              >
                {index + 1}. {title}
              </Link>
            </li>
          ))
        ) : (
          <li className="italic text-gray-500 dark:text-gray-400">
            No blogs found.
          </li>
        )}
      </ul>
    </div>
  );
}
