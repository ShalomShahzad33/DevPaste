# 🚀 DevPaste

A modern full-stack paste sharing application built with **React, Supabase, Zustand, TanStack Query, and TailwindCSS**.

---

# 📁 Folder Structure

DevPaste follows a scalable feature-based architecture focused on modularity, abstraction, and maintainability.  
Each feature manages its own API logic, hooks, pages, types, and state, making the codebase easier to scale and organize.

## ✨ Features

- 🔐 Authentication
  - Email login
  - GitHub OAuth
- 📝 Paste Management
  - Create, read, update, delete pastes
  - Individual paste pages
- 🔒 Security
  - Row Level Security (RLS) per user
  - Protected routes
- ⚡ Performance
  - Server-state caching with TanStack Query
  - Optimized API calls
- 🧠 State Management
  - Global auth state with Zustand
- 🎨 UI/UX
  - Modern dark theme (Slate + Blue)
  - Responsive design
- 💻 Code Support
  - Syntax highlighting via Prism.js (JavaScript support)
- 🚀 Deployment
  Hosted on Vercel

---

## 🧱 Tech Stack

- ⚛️ React + TypeScript
- 🔥 Supabase (Auth + Database)
- 🧠 Zustand (State Management)
- ⚡ TanStack Query (Server State)
- 🌐 React Router DOM
- 🎨 TailwindCSS
- ✨ Prism.js

---

```bash
src/
│
├── features/
│   │
│   ├── auth/
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── types/
│   │   └── authListener.ts
│   │
│   └── pastes/
│       ├── api/
│       ├── hooks/
│       ├── pages/
│       └── types/
│
├── pages/
├── routes/
├── utils/
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## 🚀 Live Demo

[Check out the Live App Here](https://shalomdevpaste.vercel.app/)

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/devpaste.git
cd devpaste
npm install
npm run dev
```

---

## 🔧 Environment Variables

create `.env` file

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## 📄 License

[MIT License](https://choosealicense.com/licenses/mit/)

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.
