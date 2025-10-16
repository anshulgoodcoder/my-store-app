import React from "react";
import Link from "next/link";

export default function Header({ cartCount }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <h1 style={{ fontSize: "28px" }}>🛍️ Product Listing</h1>
      <Link href="/cart" style={{ color: "#0070f3", fontWeight: "bold" }}>
        View Cart ({cartCount})
      </Link>
    </div>
  );
}
