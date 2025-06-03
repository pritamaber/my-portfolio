import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 font-roboto text-gray-800 dark:text-gray-200">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4 font-dancing"
      >
        🚫 404 – Page Not Found
      </motion.h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md text-center">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-block px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200 font-semibold transition"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  );
}
