import React from "react";

const Footer = () => {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <footer
      className="fixed bottom-0 left-0 w-full md:left-56 md:w-[calc(100vw-14rem)]
             p-4 bg-white text-center z-[1000]
             dark:bg-gray-900
             border-t border-transparent dark:border-transparent shadow-none"
    >
      <p className="text-sm text-gray-700 dark:text-gray-400 font-roboto tracking-wide m-0">
        © {year}{" "}
        <strong className="text-red-600 dark:text-red-400 font-semibold">
          Pritam
        </strong>{" "}
        • Last updated: {month} {year}
      </p>
    </footer>
  );
};

export default Footer;
