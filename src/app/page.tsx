import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white font-sans">
      
      {/* Refined Mesh Background - Animated for a "living" feel */}
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-100/40 blur-[120px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        
        {/* Modern Glass Badge - Simplified without empty text */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-semibold text-indigo-700 tracking-wide uppercase">
            Live Now
          </span>
        </div>

        {/* Improved Heading - Tighter tracking for premium feel */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
          Your digital life, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500">
            perfectly organized.
          </span>
        </h1>

        {/* Balanced Subtext */}
        <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
          The intelligent way to save and discover your web. Smart Bookmark 
          syncs your world securely across all your devices.
        </p>

        {/* Prominent Single CTA */}
        <div className="flex flex-col items-center">
          <Link
            href="/login"
            className="group relative inline-flex items-center justify-center rounded-2xl bg-slate-900 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-[0_0_40px_8px_rgba(79,70,229,0.3)] hover:-translate-y-1 active:scale-95"
          >
            Get Started 
            <svg 
              className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Refined Tech Stack Footer */}
        <div className="mt-24 w-full">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-slate-200"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
              Powered by modern tech
            </p>
            <div className="h-[1px] w-12 bg-slate-200"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Next.js", "Supabase", "Tailwind", "Vercel"].map((tech) => (
              <span key={tech} className="text-xl font-black text-slate-300 hover:text-slate-900 transition-colors cursor-default select-none italic">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Grainy Overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}