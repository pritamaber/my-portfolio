---
title: "useState in React"

date: "2025-05-31"

author: "Pritam Das"

tags: ["coding", "react", "hooks", "clean-code", "best-practices"]
---

## useState

In react application we sometimes need to change a part of UI on the go , for **example** in an ecom app like amazon and flipkart when you click on add/buy button it adds the product in the cart and the cart shows the number of items in the cart , as you keep adding or removing the item it increases or decreases the cart item count.

**steItemsInCart** is a function which sets the value of the variable **itemsInCart**

## How to use useState in react

we will make a simple counter app to show how useState works .

    import { useState } from "react";
    import "./Counter.css";

    export default function Counter() {
      const [count, setCount] = useState(0);
      const [message, setMessage] = useState("");

      function handleAdd() {
        setCount((prev) => prev + 1);
        setMessage(""); // clear message when increasing
      }

      function handleSubtract() {
        setCount((prev) => {
          if (prev === 0) {
            setMessage("❗ Subtract is limited to 0");
            return prev;
          } else {
            setMessage(""); // clear message
            return prev - 1;
          }
        });
      }

      function handleReset() {
        setCount(0);
        setMessage(""); // reset message too
      }

      return (
        <div className="counter-container">
          <div className="counter-value">{count}</div>
          <div className="counter-buttons">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleReset}>Reset</button>
          </div>
          {message && <p style={{ color: "red", marginTop: "1rem" }}>{message}</p>}
        </div>
      );
    }

view the output of this code in [codesandbox](https://vrcs4f.csb.app/)
