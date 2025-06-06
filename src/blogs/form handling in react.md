---
title: "Form Handling in React"
date: "2025-06-06"
author: "Pritam Das"
tags: ["coding", "react", "forms", "clean-code", "best-practices"]
---

## Form Handling in React

In most applications, forms are used to collect user input — such as login details, feedback, search queries, etc. React makes form handling easy using the `useState` hook and controlled components.

Let’s build a simple feedback form to understand how form handling works in React.

---

## What We’ll Build

A basic form with:

- Name input
- Email input
- Message textarea
- Submit button

---

## FeedbackForm.jsx

```
import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

a simple form handling mini project - [Form App](https://projects.taglet.in/form-handling)
