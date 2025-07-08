# 📘 Frontend Mini Projects · React + Redux Monorepo 🚀

This repo is a **monorepo** structure that contains mini projects I made during my development process as a Frontend Developer. The projects are developed with modern technologies, step by step learning and application logic.

This repository contains a structured collection of mini frontend projects designed to reinforce key concepts in React and Redux Toolkit through hands-on exercises.

Each project in this monorepo is isolated and represents a specific learning goal, ranging from basic state handling with `useState`, to building more complex global state flows with Redux Toolkit, localStorage persistence, and component refactoring.

---

## 📅 Weekly Curriculum Overview

### 🔹 Week 1 – Fundamentals (React State + Redux Basics)

- Build counter components using `useState` and `useReducer`
- Create a Redux slice with empty cart state
- Add, remove, and clear items from Redux state
- Calculate total quantity and amount using derived state

### 🔹 Week 2 – Applied Redux Toolkit (Mini Cart Project)

- Display product list using static array
- Add products to cart via dispatched actions
- Create a reusable cart component using `useSelector`
- Manage quantity with increment/decrement actions
- Store cart in `localStorage`
- Update totals using `useEffect`

### 🔹 Week 3 – Advanced Logic & State Validation

- Merge items by ID instead of duplicating
- Automatically remove item if quantity is zero
- Calculate total price per item
- Handle stock limits with validation and alerts
- Make carts user-specific (`userId` scoped)
- Begin refactoring code: slices, components, and utils

### 🔹 Week 4 – UX Enhancements & Developer Practice

- Implement quantity selectors with dropdowns
- Conditionally display "In Cart" state
- Create a `checkout` flow with logging
- Add "Undo remove" functionality
- Support multi-select and total calculation with checkboxes
- Add favorites list (independent from cart)
- Extract reusable functions to `utils/`

---

## 🧠 Topics Covered

- React fundamentals: components, state, props
- `useState` vs `useReducer` patterns
- Redux Toolkit: `createSlice`, `configureStore`
- React Redux integration: `useSelector`, `useDispatch`
- Derived state calculation in reducers
- Modular monorepo folder structure
- Tailwind CSS for rapid UI styling
- Action-based state management with reducers
- Component-driven UI development

---

## 🔜 Planned Topics

- Persistent Redux state with `localStorage`
- Quantity control system with dropdown and increment/decrement logic
- Stock limitation and alert messaging
- Reversible actions (Undo last removed item)
- UX: conditionally rendered “In Cart” badges
- Component refactoring and clean architecture
- Utility abstraction: `calculateTotal()`, `updateLocalStorage()`
- Checkout state logging and cleanup
- Additional domain-based apps (e.g. film list, food ordering)
- React Router for route-based navigation
- 🔜 Context API (optional alternative to Redux for lightweight global state)

🗂 Projects in This Monorepo

---

projects/
├── count/                   → Week 1 · Counter using useState
├── reducerCount/           → Week 1 · Counter using useReducer
├── cartSlice/              → Week 1–2 · Redux-powered shopping cart core
│
├── books-project/          → Week 1 Mini Project · Book list manager (Redux)
├── task-manager/           → Week 2 Mini Project · Task/to-do manager
├── film-watchlist/         → Week 3 Mini Project · Film watchlist (planned)
├── food-order-cart/        → Week 4 Mini Project · Food order cart (planned)
│
├── advanced-cart/          → Week 3 · Cart logic enhancements (stock limits, quantities)
├── checkout-flow/          → Week 4 · Checkout, undo, and favorites logic
└── utils-refactor/         → Week 4 · Refactoring functions & architecture


🛠 How to Run a Project
Each project is self-contained under the projects/ directory.

cd projects/task-manager
npm install
npm run dev


🏗 Tech Stack
 - React 18+

 - Redux Redux-Toolkit

 - Javascript

 - Tailwind CSS

 - Vite

 🔖 License
 - MIT


