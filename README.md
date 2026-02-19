# 🚀 Smart Bookmark App

A production-ready real-time bookmark manager built using Next.js and Supabase.  
This application demonstrates secure authentication, database-level access control, real-time synchronization, and cloud deployment.

---

## 🌐 Live Demo

https://smart-bookmark-app-three-mauve.vercel.app/

---

## ✨ Features

- 🔐 Google OAuth Authentication
- 🔒 Private user bookmarks using Row Level Security (RLS)
- ⚡ Real-time updates across multiple browser tabs
- ➕ Add bookmarks (Title + URL)
- 🗑 Secure delete functionality
- 🌍 Deployed on Vercel

---

## 🛠 Tech Stack

- Next.js (App Router)
- Supabase
  - Authentication
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Realtime Subscriptions
- Tailwind CSS
- Vercel Deployment

---

## 🧠 Technical Highlights

- Implemented database-level security using RLS policies
- Configured secure OAuth redirect handling for local and production environments
- Built real-time synchronization using Supabase `postgres_changes`
- Implemented URL validation to maintain data integrity
- Managed environment variables for secure deployment

---

## 🚧 Challenges Faced

- RLS policy blocking delete operations
- OAuth redirect mismatch between localhost and production
- Real-time subscription configuration
- Cross-tab synchronization handling

All issues were resolved through structured debugging and correct Supabase configuration.

---

## 💻 How to Run Locally

1. Clone the repository:
   git clone https://github.com/CharanHC/smart-bookmark-app.git

2. Navigate into the project folder:
   cd smart-bookmark-app

3. Create a `.env.local` file and add:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Install dependencies:
   npm install

5. Run the development server:
   npm run dev

---

## 📌 Project Status

- Authentication: ✅ Working
- Database Security (RLS): ✅ Implemented
- Real-time Sync: ✅ Working
- Production Deployment: ✅ Completed
- Assignment Requirements: ✅ Fully Met

---

## 🎯 Summary

This project demonstrates full-stack development skills including secure authentication, database-level access control, real-time architecture, and production deployment best practices.
