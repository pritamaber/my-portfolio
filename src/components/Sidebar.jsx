import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/pritam-av.jpg";

const navLinks = [
  { label: "Home", path: "/", emoji: "🏠" },
  { label: "Blogs", path: "/blogs", emoji: "📃" },
  { label: "Projects", path: "/projects", emoji: "🚀" },
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
  const [open, setOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="fixed top-4 left-4 z-[1001] bg-red-600 text-white px-4 py-2 rounded-md shadow-md text-xl"
        >
          ☰
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-56 bg-white border-r border-gray-200 px-4 py-6 flex flex-col z-[1000] transition-all duration-300 ${
          open ? "left-0" : "-left-full"
        }`}
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
        <div className="text-center mt-4 text-sm text-gray-600 px-2 leading-6">
          <div className="font-semibold mb-1">⚡ Code. Debug. Repeat.</div>
          Tech enthusiast, problem solver, lifelong learner
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-2">
          {navLinks.map(({ label, path, emoji }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => isMobile && setOpen(false)}
              className={({ isActive }) =>
                `block text-center py-2 px-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {emoji} {label}
            </NavLink>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Social Links */}
        <div className="border-t pt-4 flex flex-col gap-2">
          {socialLinks.map(({ label, url, emoji }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition"
            >
              {emoji} {label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
