import Link from "next/link";
import { Compass, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8FA] min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#0284C7]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-[#0D9488]/10 blur-3xl"
      />

      <div className="relative max-w-lg w-full text-center bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-sky-950/5">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E0F7FF] text-[#0284C7] flex items-center justify-center mb-5">
          <Compass className="w-7 h-7" />
        </div>

        <p className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          The page or tuition route you are looking for might have been moved, removed, or never existed.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/tuitions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F4F8FA] hover:bg-[#E0F7FF] text-[#0369A1] border border-slate-200 text-sm font-semibold transition"
          >
            <Search className="w-4 h-4" />
            <span>Browse Tuitions</span>
          </Link>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0284C7] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go to Dashboard</span>
          </Link>
        </div>
      </div>
    </section>
  );
}