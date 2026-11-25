"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    Calculator,
    Atom,
    Code2,
    Languages,
    ArrowUpRight,
    Star,
    Quote,
} from "lucide-react";

const TOP_SUBJECTS = [
    {
        name: "Mathematics",
        slug: "Mathematics",
        batches: "24+ Active Batches",
        focus: "SSC, HSC, Algebra, Calculus & Olympiad",
        icon: Calculator,
        badgeClass: "bg-[#E0F7FF] text-[#0369A1]",
        iconBoxClass: "bg-[#E0F7FF] text-[#0284C7]",
    },
    {
        name: "Physics",
        slug: "Physics",
        batches: "18+ Active Batches",
        focus: "Mechanics, Electromagnetism & Concept Labs",
        icon: Atom,
        badgeClass: "bg-teal-50 text-[#0D9488]",
        iconBoxClass: "bg-teal-50 text-[#0D9488]",
    },
    {
        name: "Programming",
        slug: "Programming",
        batches: "20+ Active Batches",
        focus: "JavaScript, TypeScript, React, Next.js & Problem Solving",
        icon: Code2,
        badgeClass: "bg-[#E0F7FF] text-[#0369A1]",
        iconBoxClass: "bg-[#E0F7FF] text-[#0284C7]",
    },
    {
        name: "IELTS & English",
        slug: "IELTS",
        batches: "15+ Active Batches",
        focus: "Speaking Mock, Writing Task 1 & 2, Reading & Listening",
        icon: Languages,
        badgeClass: "bg-teal-50 text-[#0D9488]",
        iconBoxClass: "bg-teal-50 text-[#0D9488]",
    },
];

const PLATFORM_STATS = [
    { label: "Verified Mentors", value: "180+" },
    { label: "Approved Tuitions", value: "120+" },
    { label: "Active Learners", value: "650+" },
    { label: "Avg. Tutor Rating", value: "4.9 / 5" },
];

const TESTIMONIALS = [
    {
        name: "Nadia Rahman",
        role: "HSC Science Student",
        quote:
            "Finding a structured Physics and Math batch with clear schedules was effortless. My application status updated right on my dashboard.",
        rating: 5,
    },
    {
        name: "Tanvir Ahmed",
        role: "Programming Mentor (Tutor Pro)",
        quote:
            "Managing student applications is clean and organized. Upgrading to Tutor Pro let me run more active coding batches smoothly.",
        rating: 5,
    },
    {
        name: "Mahmudul Hasan",
        role: "IELTS Aspirant (Student Pro)",
        quote:
            "Filtering Online batches by subject and monthly fee saved me so much time. The whole booking flow feels focused and reliable.",
        rating: 5,
    },
];

export default function SubjectsAndTestimonials() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white border-t border-slate-200/80 py-16 lg:py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Part 1: Top Subjects */}
                <div
                    className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E0F7FF] text-[#0369A1] text-xs font-bold uppercase tracking-wider">
                                Popular Categories
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
                                Explore Top Subjects &amp; Mentorship Tracks
                            </h2>
                        </div>

                        <Link
                            href="/tuitions"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F4F8FA] hover:bg-[#E0F7FF] text-[#0369A1] border border-slate-200 text-sm font-semibold transition self-start sm:self-auto"
                        >
                            <span>All Subjects</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TOP_SUBJECTS.map((subject, idx) => {
                            const IconComponent = subject.icon;
                            return (
                                <Link
                                    key={subject.name}
                                    href={`/tuitions?subject=${encodeURIComponent(subject.slug)}`}
                                    style={{ transitionDelay: `${idx * 90}ms` }}
                                    className={`group h-full flex flex-col justify-between rounded-2xl bg-[#F4F8FA] border border-slate-200/90 p-6 hover:bg-white hover:border-[#0284C7]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-700 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div
                                                className={`w-11 h-11 rounded-xl flex items-center justify-center ${subject.iconBoxClass}`}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-semibold ${subject.badgeClass}`}
                                            >
                                                {subject.batches}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0284C7] transition">
                                            {subject.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                                            {subject.focus}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-[#0369A1]">
                                        <span>Browse Batches</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Part 2: Platform Statistics Bar */}
                <div
                    className={`mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {PLATFORM_STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl bg-[#F4F8FA] border border-slate-200/80 p-5 text-center"
                        >
                            <p className="text-2xl sm:text-3xl font-extrabold text-[#0284C7]">
                                {stat.value}
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Part 3: Testimonials */}
                <div
                    className={`mt-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
                            Community Feedback
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
                            Trusted by Students &amp; Mentors
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((item) => (
                            <div
                                key={item.name}
                                className="h-full flex flex-col justify-between rounded-2xl bg-[#F4F8FA] border border-slate-200/90 p-6 shadow-2xs"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-400" />
                                            ))}
                                        </div>
                                        <Quote className="w-5 h-5 text-slate-300" />
                                    </div>

                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-200/70">
                                    <p className="text-sm font-bold text-[#0F172A]">{item.name}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}