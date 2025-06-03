import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false); // default false

  useEffect(() => {
    // ✅ Safe: Only runs in browser
    const userPref = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = userPref === "dark" || (!userPref && prefersDark);
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="fixed bottom-4 right-4 z-[1002] p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition dark:bg-white dark:text-gray-800"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
