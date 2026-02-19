"use client";

import BookmarkItem from "./BookmarkItem";
import type { Bookmark } from "@/types/bookmark";

interface Props {
  bookmarks: Bookmark[];
}

export default function BookmarkList({ bookmarks }: Props) {
  if (bookmarks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        {/* Modern Empty State Icon */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">No bookmarks yet</h3>
        <p className="mt-1 text-sm text-slate-500">
          Start building your collection by adding your first link above.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Decorative vertical line for a "timeline" or "feed" feel */}
      <div className="absolute left-[1.15rem] top-2 h-[calc(100%-16px)] w-[2px] bg-slate-50 hidden sm:block"></div>
      
      <div className="flex flex-col gap-1">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="relative z-10">
            <BookmarkItem bookmark={bookmark} />
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 px-2">
        <p className="text-xs font-medium text-slate-400">
          Showing {bookmarks.length} {bookmarks.length === 1 ? 'item' : 'items'}
        </p>
        <div className="h-1.5 w-24 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
}