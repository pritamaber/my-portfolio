---
title: "Cards and Props in React"
date: "2025-06-07"
author: "Pritam Das"
tags: ["coding", "react", "cards", "clean-code", "best-practices"]
---

## Cards in React

In many apps, you need to display repeated blocks of structured content — like product info, profiles, or data from APIs. These are best handled using **card components**.

Instead of writing the same JSX again and again, we create one reusable card and pass different data to it using **props**.

---

## Example: Product Cards (Simple Ecom App)

In this example, we fetch a list of products from an API and display them using a reusable `ProductCard.jsx` component.

---

### 1. ProductCard.jsx

```
export default function ProductCard({ title, price, thumbnail }) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white dark:bg-gray-800 text-center">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover mb-3"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">₹{price}</p>
    </div>
  );
}
```

This component is **reused** for every product by passing different props like `title`, `price`, and `thumbnail`.

👉 Try it live: [cards app](https://projects.impritam.com/simple-ecom)
