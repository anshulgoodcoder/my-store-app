"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [apiLoading, setApiLoading] = useState(false);

  const fetchProductsData = async () => {
    setApiLoading(true);
    try {
      const url = "https://fakestoreapi.com/products";
      const data = await fetch(url);

      const jsonData = await data.json();
      setProducts(jsonData);
      setFilteredProducts(jsonData);
      const uniqueCategories = [
        "all",
        ...new Set(jsonData.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    } catch (e) {
      console.error("Error fetching products:", e);
    }
    setApiLoading(false);
  };

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setIsLoaded(true);
  }, []);

  // Save to localStorage after initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // Fetch products
  useEffect(() => {
    fetchProductsData();
  }, []);

  // Search + Filter logic
  useEffect(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, products]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return apiLoading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "16px", color: "#777" }}>
        Loading , Please wait for few seconds....
      </p>
    </div>
  ) : (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
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
          View Cart ({cart.length})
        </Link>
      </div>

      {/* Search + Filter Controls */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "25px",
          alignItems: "center",
        }}
      >
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: "1",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "220px",
          }}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              cart={cart}
            />
          ))
        ) : (
          <p style={{ fontSize: "16px", color: "#777" }}>
            No products found matching your search/filter.
          </p>
        )}
      </div>
    </div>
  );
}
