---
title: "Cards and Props in React"
date: "2025-05-31"
author: "Pritam Das"
tags: ["coding", "react", "cards", "clean-code", "best-practices"]
---

## Cards in React

In many apps, you need to display repeated blocks of structured content — like product info, profiles, or data from APIs. These are best handled using **card components**.

Instead of writing the same JSX again and again, we create one reusable card and pass different data to it using **props**.

---

## Example: NASA Photo Card App

In this example, we fetch a photo of the day from NASA’s public API and show it using a reusable `PhotoCard.jsx` component.

---

### 1. PhotoCard.jsx

```
export default function PhotoCard({ title, date, image, explanation }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={image} alt={title} />
      <p>{explanation}</p>
    </div>
  );
}
```
