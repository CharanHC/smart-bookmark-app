"use client";

import { supabase } from "@/lib/supabaseClient";
import type { Bookmark } from "@/types/bookmark";

interface Props {
  bookmark: Bookmark;
}

export default function BookmarkItem({ bookmark }: Props) {
  const handleDelete = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", bookmark.id)
      .eq("user_id", user.id);

    if (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="group relative mb-4 flex items-center justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-500/5">
      
      {/* Bookmark Info Left Side */}
      <div className="flex items-center gap-4 truncate">
        {/* Decorative Icon Box */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>

        <div className="flex flex-col truncate">
          <a 
            href={bookmark.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors truncate"
          >
            {bookmark.title}
          </a>
          <span className="text-xs font-medium text-slate-400 truncate">
            {bookmark.url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>

      {/* Actions Right Side */}
      <div className="flex items-center gap-2 pl-4">
        {/* Visit Button */}
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex h-8 items-center justify-center rounded-lg px-3 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all"
        >
          Visit
        </a>

        {/* Delete Button */}
        <button 
          onClick={handleDelete}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-all hover:bg-red-50 hover:text-red-500 active:scale-90"
          aria-label="Delete bookmark"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}