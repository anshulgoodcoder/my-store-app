## Getting Started

I created this project using Next.js with the create-next-app command.
It’s a small web app built as part of the Ourshopee Frontend Screening assignment.

The app fetches products from an API, displays them on a product listing page, and lets users add or remove items from the cart. 
**The cart data is persisted using localStorage so users don’t lose their items even after a page refresh.**

## Component structure

The project follows a clean and modular structure:
Main Page: app/page.js → Handles product listing logic and data fetching.
Cart Page: cart/page.js → Displays cart items, quantities, and total price.

**Components**:
Header.js – Top bar with title and cart link
SearchFilterBar.js – For Search and category filter
ProductGrid.js – Product grid layout
ProductCard.js – Individual product details and Add to Cart button
CartItem.js – Handles each item inside the cart
Loader.js – Simple loading state component

This structure keeps the app organized, easy to scale, and simple to maintain.

## Logic

I’m using localStorage to persist the cart data.
When the user adds an item, it’s stored locally, so even after a refresh, the data stays intact.

A parent state (in the main component) is used to manage the cart and product data, which is then passed down to child components for proper synchronization and updates.

For better UX, I’ve also handled:
Loading states while fetching products
Search and category filter functionality
Dynamic quantity management for cart items

## Tech Stack

Framework: Next.js (App Router)
Styling: Inline CSS (for simplicity)
State Management: React’s built-in state hooks
Persistence: Browser localStorage
API: Fake Store API
Deployment: Netlify
Version Control: GitHub (public repository)

## Features Implemented

Product listing with image, title, and price
Add to Cart and Remove from Cart functionality
Quantity increment/decrement
Local storage persistence
Search bar for product filtering
Category filter
Deployed live on Netlify

## Deploy on Netlify

For deployment, I pushed the project to a public GitHub repository, then connected it to Netlify.