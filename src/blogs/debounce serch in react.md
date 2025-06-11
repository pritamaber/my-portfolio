---
title: "🔍 Debounced Search in React"

date: "2025-06-07"

author: "Pritam Das"

tags: ["react", "debounce", "hooks", "performance", "projects"]
---

## 🚀 What is Debounced Search?

When building a search input, if we make an API call **on every keystroke**, it can overload the server and slow down the app.

**Debouncing** is a technique to wait for the user to stop typing before making the request.

---

## 🧠 Concept

Instead of calling the API instantly, we wait for a small delay (like 300ms). If the user keeps typing, we cancel the previous call.

---

## 🧪 Example Use Case

In this project, I built a **GitHub Profile Finder**. It fetches user data from GitHub **only after typing stops**.---

## ⚙️ useDebounce Hook

```

import { useEffect, useState } from "react";
export default function useDebounce(value, delay = 300) {
	const [debouncedValue, setDebouncedValue] = useState(value)
	useEffect(() => {
	const handler = setTimeout(() => {
	setDebouncedValue(value);
	}, delay);
	return () => clearTimeout(handler);
	}, [value, delay]);
	return debouncedValue;
}

```

```

const debouncedSearch = useDebounce(searchTerm, 300);
	useEffect(() => {
		if (!debouncedSearch) return;
			fetch(`https://api.github.com/users/${debouncedSearch}`)
			.then((res) => res.json())
			.then((data) => setUserData(data));
		}, [debouncedSearch]);



```

🎯 Why Use It?

Improves performance
Reduces unnecessary API calls
Makes UX smoother for users

a simple github profile finder app mini project - [Github profile finder](https://projects.impritam.com/github-profile-finder)
