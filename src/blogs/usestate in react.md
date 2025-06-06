---
title: "useEffect in React"

date: "2025-05-31"

author: "Pritam Das"

tags: ["codings", "react", "hooks", "clean-code", "best-practices"]
---

## useEffect

<p>`useEffect` is a React hook that lets you run <strong>side effects</strong> in your components — such as fetching data, starting timers, or accessing local storage.</p>

<p>It runs <strong>after the component renders</strong>, and you can control <strong>when</strong> it runs using a <em>dependency array</em>. If the dependency array is empty (<code>[]</code>), the effect runs only once after the first render — perfect for initialization.</p>

<p>You can also return a <strong>cleanup function</strong> inside the effect to cancel timers, listeners, or subscriptions.</p>

---

## Basic Syntax

```js
useEffect(() => {
  // run this effect
  return () => {
    // optional cleanup
  };
}, [dependencies]);
```

a simple counter app project - [counter app](https://projects.taglet.in/usestate-counter)
