import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/pritam-av.jpg";

const navLinks = [
  { label: "Home", path: "/", emoji: "🏠" },
  { label: "Blogs", path: "/blogs", emoji: "📃" },
  {
    label: "Projects",
    path: "https://projects.impritam.com",
    emoji: "🚀",
    external: true,
  },
  { label: "Contact", path: "/contacts", emoji: "☎️" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pritam-das-0a00b5178/",
    emoji: "🔗",
  },
  { label: "GitHub", url: "https://github.com/pritamaber", emoji: "💻" },
  {
    label: "Leetcode",
    url: "https://leetcode.com/u/pritamaber2/",
    emoji: "🧑‍💻",
  },
];

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[1000] bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          📱 Mobile Support Coming Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          This site is currently optimized for desktop screens
          <br />
        </p>
        <a
          href="https://projects.impritam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline dark:text-blue-400 font-medium"
        >
          see my projects here
        </a>
      </div>
    );
  }

  // Desktop Sidebar
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-56 
      bg-white dark:bg-gray-900 
      border-r border-transparent dark:border-transparent shadow-none
      px-4 py-6 flex flex-col z-[1000]"
    >
      <img
        src={profilePic}
        alt="Pritam Das"
        className="w-28 h-28 rounded-full border-4 border-red-200 object-cover mx-auto"
      />

      {/* Availability */}
      <div className="text-center mt-3">
        <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
          Available
        </span>
      </div>

      {/* Bio */}
      <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300 px-2 leading-6">
        <div className="font-semibold mb-1">⚡ Code. Debug. Repeat.</div>
        Tech enthusiast, problem solver, lifelong learner
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2">
        {navLinks.map(({ label, path, emoji, external }) =>
          external ? (
            <a
              key={path}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 transition"
            >
              {emoji} {label}
            </a>
          ) : (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block text-center py-2 px-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold dark:bg-red-800 dark:text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
                }`
              }
            >
              {emoji} {label}
            </NavLink>
          )
        )}
      </nav>

      <div className="flex-grow" />

      {/* Social Links */}
      <div className="mt-6 pt-4 flex flex-col gap-2 relative before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gray-300 before:dark:bg-gray-700/40 before:content-['']">
        {socialLinks.map(({ label, url, emoji }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {emoji} {label}
          </a>
        ))}
      </div>
    </aside>
  );
}
