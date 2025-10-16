import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart, cart }) {
  if (!products.length)
    return <p style={{ fontSize: "16px", color: "#777" }}>No products found.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          cart={cart}
        />
      ))}
    </div>
  );
}
