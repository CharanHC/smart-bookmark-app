"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import BookmarkForm from "@/components/BookmarkForm";
import BookmarkList from "@/components/BookmarkList";
import Navbar from "@/components/Navbar"; // Ensure Navbar is imported
import type { Bookmark } from "@/types/bookmark";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    setUser(user);
    fetchBookmarks(user.id);
    subscribeToRealtime(user.id);
  }

  async function fetchBookmarks(userId: string) {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (data) setBookmarks(data);
    setLoading(false);
  }

  function subscribeToRealtime(userId: string) {
    supabase
      .channel("realtime-bookmarks")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => {
          fetchBookmarks(userId);
        }
      )
      .subscribe();
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-12 w-12 animate-ping rounded-full bg-indigo-100 opacity-60"></div>
          <div className="relative h-10 w-10 animate-spin rounded-full border-2 border-indigo-100 border-t-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Navbar Integration 
          Adding the Navbar here ensures the Logout button is always 
          visible at the top of the screen.
      */}
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500 font-medium">
              Manage your curated collection of digital resources.
            </p>
          </div>
          
          {/* User Pill - Clean & Minimal */}
          {user?.email && (
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {user.email}
            </div>
          )}
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Form Section */}
          <section className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-lg font-bold text-slate-900">Create Bookmark</h2>
              <BookmarkForm user={user} />
            </div>
          </section>

          {/* List Section */}
          <section className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Your Collection</h2>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {bookmarks.length} Total
                </span>
              </div>
              <BookmarkList bookmarks={bookmarks} />
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}