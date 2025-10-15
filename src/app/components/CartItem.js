"use client";
import React from "react";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        padding: "12px 0",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
        <div>
          <h4 style={{ fontSize: "16px", marginBottom: "4px" }}>{item.title}</h4>
          <p style={{ color: "#555" }}>${item.price}</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={onDecrease} style={btnStyle}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease} style={btnStyle}>+</button>
        <button onClick={onRemove} style={removeBtnStyle}>🗑</button>
      </div>
    </div>
  );
}

const btnStyle = {
  border: "1px solid #0070f3",
  background: "white",
  color: "#0070f3",
  borderRadius: "4px",
  padding: "4px 8px",
  cursor: "pointer",
};

const removeBtnStyle = {
  border: "none",
  background: "none",
  cursor: "pointer",
  color: "red",
  fontSize: "18px",
};
