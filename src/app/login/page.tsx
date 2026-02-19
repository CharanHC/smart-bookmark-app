"use client";

import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const handleLogin = async () => {
    // Automatically detect environment (localhost or vercel)
    const redirectUrl =
      process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
        : `${window.location.origin}/auth/callback`;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-indigo-50 font-sans selection:bg-indigo-100">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-300/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-300/20 blur-[120px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Main Card */}
        <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/60 p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] backdrop-blur-3xl ring-1 ring-slate-200/50">
          
          {/* Header Section */}
          <div className="mb-10 text-center">
             <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 shadow-xl shadow-indigo-100">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
              Secured Dashboard Access
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleLogin}
            className="group relative flex w-full items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {/* Google Icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              By signing in you agree to our terms
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-indigo-600 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> 
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}