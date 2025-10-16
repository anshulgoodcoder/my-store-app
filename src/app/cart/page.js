"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if(isLoaded){
    localStorage.setItem("cart", JSON.stringify(cart));
    }

  }, [cart, isLoaded]);

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      style={{
        padding: "40px",
        background: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "28px", marginBottom: "20px" }}
      >
        🛒 Your Cart
      </h1>

      <Link href="/" style={{ color: "#0070f3", fontWeight: "bold" ,cursor:'pointer'}}>
        <button style={{cursor:'pointer' , fontSize:'24px'}}>Back</button>
      </Link>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>Your cart is empty</p>
      ) : (
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
          <hr style={{ margin: "20px 0" }} />
          <h2 style={{ textAlign: "right" }}>Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}
