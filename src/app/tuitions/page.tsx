"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  MapPin,
  UserCheck,
  ArrowRight,
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
  status?: string;
  isActive?: boolean;
}

const FALLBACK_TUITIONS: TuitionItem[] = [
  {
    _id: "1",
    title: "Higher Math & Calculus Batch",
    subject: "Mathematics",
    classLevel: "HSC / Class 11–12",
    mode: "Online",
    location: "Live Zoom / Interactive Board",
    monthlyFee: 3500,
    tutorName: "Rafiqul Islam",
  },
  {
    _id: "2",
    title: "Physics Concept & Numericals",
    subject: "Physics",
    classLevel: "SSC / Class 9–10",
    mode: "Offline",
    location: "Dhanmondi, Dhaka",
    monthlyFee: 4000,
    tutorName: "Farhana Yasmin",
  },
  {
    _id: "3",
    title: "Full-Stack Web & Problem Solving",
    subject: "Programming",
    classLevel: "University / Bootcamp",
    mode: "Online",
    location: "Online Mentorship",
    monthlyFee: 5000,
    tutorName: "Tanvir Ahmed",
  },
  {
    _id: "4",
    title: "IELTS Academic Band 7+ Prep",
    subject: "IELTS",
    classLevel: "IELTS / Higher Ed",
    mode: "Online",
    location: "Live Speaking & Writing",
    monthlyFee: 4500,
    tutorName: "Nusrat Jahan",
  },
  {
    _id: "5",
    title: "Organic Chemistry & Lab Guide",
    subject: "Chemistry",
    classLevel: "HSC / Admission",
    mode: "Offline",
    location: "Chattogram (GEC Circle)",
    monthlyFee: 3800,
    tutorName: "Sabbir Hossain",
  },
  {
    _id: "6",
    title: "English Grammar & Spoken Foundation",
    subject: "English",
    classLevel: "Class 6–8",
    mode: "Online",
    location: "Small Group Batch",
    monthlyFee: 2500,
    tutorName: "Maliha Chowdhury",
  },
];

export default function AllTuitionsPage() {
  const [tuitions, setTuitions] = useState<TuitionItem[]>(FALLBACK_TUITIONS);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchAllTuitions() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tuitions`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch tuitions");
        }

        const data = await res.json();
        const list: TuitionItem[] = Array.isArray(data)
          ? data
          : Array.isArray(data?.tuitions)
          ? data.tuitions
          : Array.isArray(data?.data)
          ? data.data
          : [];

        if (isMounted && list.length > 0) {
          setTuitions(list);
        }
      } catch {
        // Keep fallback listings when the API is unavailable or returns empty
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
    <section className="min-h-screen bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700 mb-2">
            Complete Directory
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            All Tuitions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Browse all available tuitions and mentorship batches in one place.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-60 rounded-2xl bg-white border border-slate-200/70 p-6 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {tuitions.map((tuition) => {
              const isOnline = tuition.mode === "Online";

              return (
                <article
                  key={tuition._id}
                  className="group h-full flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-sky-300 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-medium">
                        <BookOpen className="w-3.5 h-3.5" />
                        {tuition.subject}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${
                          isOnline
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

                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-sky-800 transition-colors line-clamp-2">
                      {tuition.title}
                    </h2>

                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{tuition.classLevel}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{tuition.tutorName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-lg font-bold text-slate-900">
                        ৳{Number(tuition.monthlyFee || 0).toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500"> / month</span>
                    </div>

                    <Link
                      href={`/tuitions/${tuition._id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 group-hover:bg-sky-700 text-white text-xs sm:text-sm font-medium transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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