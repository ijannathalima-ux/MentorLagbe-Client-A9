"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const POPULAR_TOPICS: string[] = [
  "Math",
  "Physics",
  "Programming",
  "English",
  "IELTS",
];

export default function Banner() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/tuitions?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/tuitions");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F8FA] border-b border-slate-200/80">
      {/* Subtle Dot Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] bg-size:[24px_24px] opacity-[0.06]"
      />

      {/* Ambient Sky & Teal Light Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-1/4 w-md h-112 rounded-full bg-[#0284C7]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 w-104 h-104 rounded-full bg-[#0D9488]/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0284C7]/20 text-[#0369A1] text-xs font-semibold shadow-2xs mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Modern Tuition &amp; Mentorship Platform</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.13]">
              Learn Smarter With{" "}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#0D9488] bg-clip-text text-transparent">
                Trusted Mentors
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Find structured subject batches and personal mentors tailored to your study goals. Compare learning modes, check monthly fees, and apply with clarity.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="mt-7 max-w-xl flex items-center bg-white/95 p-1.5 rounded-2xl border border-slate-200/90 shadow-md shadow-sky-950/5 focus-within:border-[#0284C7] focus-within:ring-4 focus-within:ring-[#0284C7]/12 transition"
            >
              <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject, class level, or topic..."
                className="w-full px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-sm font-semibold shadow-sm transition shrink-0 cursor-pointer"
              >
                <span>Explore</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>

            {/* Popular Topics */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-500 mr-1">
                Trending:
              </span>
              {POPULAR_TOPICS.map((topic) => (
                <Link
                  key={topic}
                  href={`/tuitions?subject=${encodeURIComponent(topic)}`}
                  className="px-3.5 py-1 rounded-full bg-white/90 hover:bg-[#E0F7FF] text-slate-700 hover:text-[#0369A1] border border-slate-200/90 hover:border-[#0284C7]/30 text-xs font-semibold transition shadow-2xs"
                >
                  {topic}
                </Link>
              ))}
            </div>

            {/* Subtle Trust Strip */}
            <div className="mt-7 pt-5 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                Curated &amp; approved listings
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                Online &amp; offline options
              </span>
            </div>
          </div>

          {/* Right Column: Elevated Overview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-sky-950/5">
              <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#0284C7]">
                    MentorLagbe Overview
                  </p>
                  <h2 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    Why Learners Choose Us
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F7FF] text-[#0369A1] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  Active Hub
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F4F8FA] hover:bg-[#E0F7FF]/55 border border-slate-200/60 hover:border-[#0284C7]/25 transition">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F7FF] text-[#0284C7] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">
                      Structured Subject Batches
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Clear class levels, learning modes, and upfront monthly fees.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F4F8FA] hover:bg-teal-50/70 border border-slate-200/60 hover:border-[#0D9488]/25 transition">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">
                      Role-Based Dashboards
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Focused workspaces tailored for students, tutors, and admins.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F4F8FA] hover:bg-sky-50/80 border border-slate-200/60 hover:border-[#0369A1]/25 transition">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0369A1] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">
                      Seamless Application Flow
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Apply to tuitions smoothly and keep track of status updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Start exploring open batches
                </span>
                <Link
                  href="/tuitions"
                  className="font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center gap-1 transition"
                >
                  <span>Browse Tuitions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}