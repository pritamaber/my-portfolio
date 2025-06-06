---
title: "useEffect in React"
date: "2025-05-31"
author: "Pritam Das"
tags: ["coding", "react", "hooks", "clean-code", "best-practices"]
---

## useEffect

`useEffect` is a React hook used to run **side effects** in your component — like fetching data, setting up subscriptions, or working with timers.

### When does it run?

It runs **after the component renders**, and you can control when it runs by using the **dependency array**.

- `[]` → Runs once on mount (like `componentDidMount`)
- `[var]` → Runs every time `var` changes
- No array → Runs after every render

---

## Basic Syntax

```
useEffect(() => {
  // run this effect

  return () => {
    // cleanup function (optional)
  };
}, [dependencies]);
```

a simple timer app mini project - [timer app](https://projects.taglet.in/useeffect-timer)
