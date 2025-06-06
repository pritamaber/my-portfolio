---
title: "useEffect in React"

date: "2025-05-31"

author: "Pritam Das"

tags: ["coding", "react", "hooks", "clean-code", "best-practices"]
---

## useEffect

`useEffect` is a React hook that lets you run **side effects** in your components — such as fetching data, starting timers, or accessing local storage.

It runs **after the component renders**, and you can control **when** it runs using a **dependency array**. If the dependency array is empty ([]), the effect runs only once after the first render — perfect for initialization.

You can also return a **cleanup function** inside the effect to cancel timers, listeners, or subscriptions.

---

## Basic Syntax

```
useEffect(() => {
  // run this effect
  return () => {
    // optional cleanup
  };
}, [dependencies]);
```
