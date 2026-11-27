"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  MapPin,
  UserCheck,
  ArrowRight,
  SearchX,
  RefreshCw,
  Wallet,
} from "lucide-react";

export interface TuitionItem {
  _id: string;
  title: string;
  subject: string;
  classLevel: string;
  mode: "Online" | "Offline";
  location?: string;
  monthlyFee: number;
  tutorName: string;
  approvalStatus?: string;
  isActive?: boolean;
}

export default function AllTuitionsPage() {
  const [tuitions, setTuitions] = useState<TuitionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function fetchAllTuitions() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tuitions`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch tuitions");
        }

        const data = await res.json();

        const list: TuitionItem[] = Array.isArray(data?.tuitions)
          ? data.tuitions
          : [];

        if (isMounted) {
          setTuitions(list);
        }
      } catch {
        if (isMounted) {
          setError("Unable to load tuitions. Please try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchAllTuitions();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 mb-3">
              Explore Opportunities
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Find Your Perfect{" "}
              <span className="text-sky-700">Tuition</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Discover quality tutoring opportunities and connect with
              experienced mentors to achieve your learning goals.
            </p>
          </div>

          {!loading && !error && (
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm w-fit">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-sky-700" />
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  {tuitions.length}
                </p>
                <p className="text-xs text-slate-500">
                  Available Tuitions
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 animate-pulse"
              >
                <div className="h-7 w-24 bg-slate-100 rounded-lg mb-5" />
                <div className="h-6 w-4/5 bg-slate-100 rounded mb-3" />
                <div className="h-4 w-2/3 bg-slate-100 rounded mb-8" />
                <div className="h-4 w-full bg-slate-100 rounded mb-3" />
                <div className="h-4 w-3/4 bg-slate-100 rounded mb-8" />
                <div className="h-10 w-full bg-slate-100 rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="bg-white border border-red-100 rounded-2xl p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-6 h-6 text-red-500" />
            </div>

            <h2 className="text-lg font-semibold text-slate-900">
              Something went wrong
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-sky-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && tuitions.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 sm:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-5">
              <SearchX className="w-8 h-8 text-sky-700" />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              No Tuitions Available
            </h2>

            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              There are currently no approved and active tuitions.
              Please check back later.
            </p>
          </div>
        )}

        {/* Tuition Cards */}
        {!loading && !error && tuitions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {tuitions.map((tuition) => {
              const isOnline = tuition.mode === "Online";

              return (
                <article
                  key={tuition._id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300"
                >
                  <div>
                    {/* Card Top */}
                    <div className="p-6 pb-5">
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold">
                          <BookOpen className="w-3.5 h-3.5" />
                          {tuition.subject}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${isOnline
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                            }`}
                        >
                          {isOnline ? (
                            <Laptop className="w-3.5 h-3.5" />
                          ) : (
                            <MapPin className="w-3.5 h-3.5" />
                          )}
                          {tuition.mode}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {tuition.title}
                      </h2>

                      <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-4 h-4 text-sky-700" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] text-slate-400 font-medium">
                              Class Level
                            </p>
                            <p className="font-medium text-slate-700 truncate">
                              {tuition.classLevel}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                            <UserCheck className="w-4 h-4 text-sky-700" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] text-slate-400 font-medium">
                              Tutor
                            </p>
                            <p className="font-medium text-slate-700 truncate">
                              {tuition.tutorName}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-sky-700" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] text-slate-400 font-medium">
                              Location
                            </p>
                            <p className="font-medium text-slate-700 truncate">
                              {tuition.location || "Not specified"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 mb-1">
                        Monthly Fee
                      </p>

                      <div className="flex items-center gap-1">
                        <Wallet className="w-4 h-4 text-sky-700" />
                        <span className="text-xl font-bold text-slate-900">
                          BDT {Number(tuition.monthlyFee || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/tuitions/${tuition._id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 group-hover:bg-sky-700 text-white text-sm font-semibold shadow-sm transition-all duration-200"
                    >
                      Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
