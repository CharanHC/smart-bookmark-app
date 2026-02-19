"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo Section */}
        <div className="flex items-center gap-2.5 transition-opacity hover:opacity-90 cursor-pointer" onClick={() => router.push("/")}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-indigo-200 shadow-lg">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Smart<span className="text-indigo-600">Bookmark</span>
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 shadow-sm"
          >
            {/* Visual indicator on hover */}
            <span className="relative z-10">Logout</span>
            <svg 
              className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
}