---
title: "useState in React"

date: "2025-05-31"

author: "Pritam Das"

tags: ["coding", "react", "hooks", "clean-code", "best-practices"]
---

## useState

In react application we sometimes need to change a part of UI on the go , for **example** in an ecom app like amazon and flipkart when you click on add/buy button it adds the product in the cart and the cart shows the number of items in the cart , as you keep adding or removing the item it increases or decreases the cart item count.

## How to use useState in react

we will make a simple cart counter to show how useState works .

    import React, { useState } from 'react';
    function CartCounter() {
      // Step 1: Declare a state variable
      const [itemsInCart, setItemsInCart] = useState(0);

      // Step 2: Create a function to handle the button click
      const addToCart = () => {
        setItemsInCart(itemsInCart + 1); // Increment the count
      };

      return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
          <h2>🛒 Shopping Cart</h2>
          <p>Items in cart: {itemsInCart}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      );
    }
    export default CartCounter;

**steItemsInCart** is a function which sets the value of the variable **itemsInCart**

view the output of this code in [codesandbox](https://3gnz2j.csb.app/)
