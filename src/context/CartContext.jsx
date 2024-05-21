import { createContext, useEffect, useState } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // How many products in the cart
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // get cart from local storage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // sync cart with local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // update total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id, amount = 1) => {
    const newItem = { ...product, amount };

    // check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + amount };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/**
 * 1. CartProvider: This is a component that wraps other components and provides 
 * the shopping cart context. Inside CartProvider, the cart state (cart) is initialized,
 *  and functions for adding, removing, and clearing cart items are defined.
 * 2. Important Functions:
 * addToCart(product, id, amount): This function adds a product to the cart. It takes three 
 * arguments: product (the product object), id (a unique identifier for the product), and amount
 *  (the quantity of products to add, with a default value of 1). If the product is already in the cart, 
 * it updates the quantity instead of adding a new item.
 * removeFromCart(id): This function removes a product from the cart based on its id.
 * clearCart(): This function completely empties the cart.
 * increaseAmount(id) and decreaseAmount(id): These functions are used to increase or decrease the quantity
 *  of a product in the shopping cart, respectively.
 */