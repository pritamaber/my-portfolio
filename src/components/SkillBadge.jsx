import { motion } from "framer-motion";

export default function SkillBadge({ name, rating }) {
  const filledStars = "\u2605".repeat(rating);
  const emptyStars = "\u2606".repeat(5 - rating);
  const tooltip = `${rating}/5 - ${
    rating >= 4 ? "Confident" : rating >= 3 ? "Intermediate" : "Learning"
  }`;

  return (
    <motion.span
      title={tooltip}
      className="flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 text-sm px-3 py-1 rounded-full font-medium dark:bg-red-900 dark:text-red-200 dark:border-red-700"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {name}
      <span className="text-yellow-500 text-xs">
        {filledStars}
        {emptyStars}
      </span>
    </motion.span>
  );
}
