"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Props {
  user: any;
}

export default function BookmarkForm({ user }: Props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = async () => {
    // Basic presence check
    if (!title || !url) return;

    // URL Validation Logic
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
    );

    if (!urlPattern.test(url)) {
      alert("Please enter a valid URL (e.g., https://google.com)");
      return;
    }

    const { error } = await supabase.from("bookmarks").insert([
      {
        title,
        url,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error(error);
      return;
    }

    setTitle("");
    setUrl("");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Title Input Group */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
          Bookmark Title
        </label>
        <input
          type="text"
          placeholder="e.g. Modern UI Inspiration"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* URL Input Group */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
          URL Address
        </label>
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-400 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500/10"
        />
      </div>

      {/* Add Button */}
      <button
        onClick={handleAdd}
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]"
      >
        <span>Add Bookmark</span>
        <svg 
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Help Text */}
      <p className="text-center text-[11px] text-slate-400 italic">
        Pressing add will instantly sync to your collection.
      </p>
    </div>
  );
}