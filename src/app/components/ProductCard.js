"use client";
import React from "react";
import "../globals.css";

export default function ProductCard({ product, onAddToCart, cart }) {
  const existing = cart.find((p) => p.id === product.id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        background: "white",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          margin: "0 auto 10px",
        }}
      />
      <div style={{ height: "130px", overflow: "hidden " }}>
        <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
          {product.title}
        </h3>
        <p style={{ fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
          ${product.price}
        </p>
      </div>

      <button onClick={() => onAddToCart(product)} className="cart-btn">
        Add to Cart{" "}
        {!!existing?.quantity ? `(Added :${existing.quantity} items)` : ""}
      </button>
    </div>
  );
}
