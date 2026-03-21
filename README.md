# Claros Analytics — Dashboard Application

A responsive dashboard built with **React**, **Redux Toolkit**, and **TypeScript**, consuming the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) public API.

---

## Features

- **Sidebar navigation** with Home, Users, and Posts pages
- **Live API data** fetched from JSONPlaceholder (users & posts)
- **Search / filter** on all table columns
- **Pagination** with configurable page size (5 / 10 / 20)
- **Error handling** with user-friendly messages
- **Redux Toolkit** for global state management
- **TypeScript** throughout for type safety
- **Unit tests** with Jest & React Testing Library

---

## Tech Stack

| Layer | Tech |
|---|---|
| UI | React 18 + TypeScript |
| State | Redux Toolkit + React-Redux |
| Routing | React Router v6 |
| Styling | Pure CSS with CSS variables |
| Testing | Jest + React Testing Library |
| API | JSONPlaceholder (free public API) |

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/claros-dashboard.git
cd claros-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## Available Scripts

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run unit tests
```

---

## Project Structure

```
src/
├── __tests__/
│   ├── usersSlice.test.ts
│   └── postsSlice.test.ts
├── components/
│   ├── Sidebar.tsx
│   ├── DataTable.tsx
├── hooks/
│   └── redux.ts
├── pages/
│   ├── Home.tsx
│   ├── UsersPage.tsx
│   └── PostsPage.tsx
├── store/
│   ├── index.ts
│   ├── usersSlice.ts
│   └── postsSlice.ts
├── App.tsx
└── index.tsx
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Drag and drop the /build folder to netlify.com/drop
```

---

## API Reference

Data is fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

- `GET /users` — 10 user records
- `GET /posts` — 50 post records

---

## Author

**Shristi** — Full-Stack Developer Assignment
Submitted to: Claros Analytics
