---
title: "🛒 Building a Cart App with Context API and useReducer in React"
date: "2025-06-11"
author: "Pritam Das"
tags: ["React", "Context API", "useReducer", "Cart App", "State Management"]
---

Managing global state in React apps can get messy as components grow. To solve this cleanly, I built a simple **Cart App** using **React Context API** and the **`useReducer`** hook.

In this blog, I’ll show you the core files that handle global state — `CartContext.js`, `CartProvider.jsx`, and `cartReducer.js`. The full source code is available on GitHub at the end.

---

## 🧠 Why Context API + useReducer?

- **Context API** helps avoid prop drilling and shares state across components.
- **useReducer** is great for managing complex state updates like adding/removing items from a cart.
- Together, they provide clean, scalable global state management.

---

## 📁 Project Structure

```bash
src/
├── context/
│   ├── CartContext.js
│   ├── CartProvider.jsx
│   └── cartReducer.js
```

`CartContext.js`

```// src/context/CartContext.js
import { createContext } from "react";
export const CartContext = createContext();
```

`cartReducer.js`

```
// src/context/cartReducer.js
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) return state;
      return [...state, action.payload];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
```

`CartProvider.jsx`
This component wraps your app and provides the cart state globally.

```
// src/context/CartProvider.jsx
import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
```

Example Usage (inside a component)

```
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};
```

You can check out the full working project with UI and all features in this GitHub repo:

👉 [View on GitHub](https://github.com/pritamaber/react-mini-projects)

[View the project live ](https://projects.impritam.com/cart-context-project)
