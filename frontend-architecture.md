Create this file:

```bash id="44h9ub"
docs/frontend-architecture.md
```

And add the following content:

````md id="y6itlo"
# Frontend Architecture Guide

## 🧠 Core Principle

```text
Feature-first architecture
```

Each feature behaves like a mini application.

Examples:
- market
- chart
- order
- strategy

---

# 📂 Folder Responsibilities

## 📦 core/

Application setup layer.

Responsible for:
- app initialization
- routing
- providers

### ✅ Add
- App.tsx
- main.tsx
- router/
- providers/

### ❌ Don't Add
- business logic
- feature components
- feature stores
- API logic

---

## 📦 features/

Business functionality layer.

Each feature owns:
- components
- hooks
- store
- services
- types

Example:

```bash
features/
  market/
  chart/
  order/
```

### ✅ Add
- feature UI
- feature hooks
- feature state
- feature-specific logic

### ❌ Don't Add
- reusable global UI
- app routing
- global state

---

## 📦 services/

External communication layer.

Responsible for:
- API calls
- WebSocket
- eventBus

### ✅ Add
- api/
- websocket/
- eventBus/

### ❌ Don't Add
- React components
- UI logic
- Zustand stores

---

## 📦 components/ui/

Reusable UI components.

Examples:
- Button
- Input
- Modal
- Card

### Rules
- reusable
- no business logic

---

## 📦 components/layout/

Layout-related components.

Examples:
- Navbar
- Sidebar
- MainLayout

Example:

```tsx
<>
  <Sidebar />
  <Navbar />
  <main>{children}</main>
</>
```

---

## 📦 store/

Global application state only.

### ✅ Add
- authStore
- themeStore
- appStore

### ❌ Don't Add
- market prices
- chart data
- feature-specific state

---

## 📦 hooks/

Reusable global hooks.

Examples:
- useDebounce
- useLocalStorage

---

## 📦 utils/

Pure helper functions.

Examples:
- formatCurrency()
- calculatePnL()

### Rules
- no React code
- no API calls

---

# 🔄 Application Flow

## Standard Flow

```text
UI
 ↓
Hook
 ↓
Store / API
 ↓
Service
 ↓
Response
 ↓
Store Update
 ↓
UI Re-render
```

---

## Real-Time Flow

```text
WebSocket
 ↓
handlers.ts
 ↓
eventBus.emit()
 ↓
marketStore update
 ↓
Watchlist + Chart update
```

---

# 🧠 State Rules

## 🌍 Global State
Use only for:
- auth
- theme
- sidebar
- notifications

---

## 📦 Feature State
Keep close to feature.

Example:

```bash
features/
  market/store/
```

---

# ❌ Never Do This

```bash
store/
  everythingStore.ts
```

---

# 🏆 Goal

Architecture should provide:

- scalability
- clean ownership
- maintainability
- low coupling
- high cohesion
````
