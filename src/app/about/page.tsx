import Link from "next/link";

import {
    GraduationCap,
    ShieldCheck,
    Users,
    BookOpen,
    CreditCard,
    CheckCircle2,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";
import HowItWorks from "@/components/home/HowItWorks";

const STAKEHOLDER_ROLES = [
    {
        role: "For Students",
        title: "Discover & Enroll With Clarity",
        description:
            "Search verified tuition batches by subject, class level, monthly budget, and Online or Offline mode. Apply with a note and monitor acceptance in real time.",
        highlights: [
            "Filter approved batches effortlessly",
            "Real-time Pending, Accepted & Rejected tracking",
            "Student Pro ($10) for priority visibility & unlimited bookmarks",
        ],
        icon: GraduationCap,
        accent: "sky",
    },
    {
        role: "For Tutors",
        title: "Showcase Batches & Manage Learners",
        description:
            "Publish structured subject batches or 1-on-1 mentorship programs with custom cover banners, review student requests, and organize active classes.",
        highlights: [
            "Post up to 2 free active tuitions right away",
            "Accept or reject student applications with ease",
            "Tutor Pro ($15) for unlimited tuition batches & Pro badge",
        ],
        icon: BookOpen,
        accent: "teal",
    },
    {
        role: "For Admins",
        title: "Moderate Quality & Platform Trust",
        description:
            "Every submitted tuition listing is reviewed before going public, keeping the learning ecosystem safe, structured, and reliable for every user.",
        highlights: [
            "Approve or reject incoming tuition listings",
            "Manage user roles across Student, Tutor & Admin",
            "Track platform-wide Stripe subscription records",
        ],
        icon: ShieldCheck,
        accent: "sky",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-[#F4F8FA] min-h-screen">
            {/* Top Hero Header */}
            <section className="relative overflow-hidden bg-white border-b border-slate-200/80 py-14 lg:py-20">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#0284C7]/10 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-[#0D9488]/10 blur-3xl"
                />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E0F7FF] text-[#0369A1] text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                        About MentorLagbe
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mt-4 leading-tight">
                        A Smarter Way to Connect{" "}
                        <span className="bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
                            Learners &amp; Mentors
                        </span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        MentorLagbe is a role-based EdTech tuition and mentorship platform built to solve a simple challenge: helping students find verified, structured academic guidance while giving qualified tutors a clean space to manage their batches.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/tuitions"
                            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition shadow-xs"
                        >
                            <span>Browse Approved Tuitions</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-[#F4F8FA] hover:bg-[#E0F7FF] text-[#0369A1] border border-slate-200 text-sm font-semibold transition"
                        >
                            <span>Explore Pro Plans</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why MentorLagbe Exists */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-2xs">
                    <div className="lg:col-span-7">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                            Our Purpose
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                            Why We Built MentorLagbe
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                            Students and parents often struggle to compare tuition options by subject, class level, schedule, and monthly fee—whether online or offline. At the same time, skilled mentors need an organized workflow to publish batches and handle student enrollments without scattered messages.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                            MentorLagbe brings both sides together in one moderated ecosystem with dedicated dashboards, transparent status updates, and optional Stripe Pro memberships.
                        </p>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <div className="p-4 rounded-2xl bg-[#F4F8FA] border border-slate-200/70 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-[#E0F7FF] text-[#0284C7] flex items-center justify-center shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#0F172A]">
                                    3 Dedicated Roles
                                </h3>
                                <p className="text-xs text-slate-600 mt-0.5">
                                    Tailored workspaces for Students, Tutors, and Platform Admins.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#F4F8FA] border border-slate-200/70 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#0F172A]">
                                    Verified Batch Moderation
                                </h3>
                                <p className="text-xs text-slate-600 mt-0.5">
                                    Only Admin-approved, active tuitions appear on public listings.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#F4F8FA] border border-slate-200/70 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0369A1] flex items-center justify-center shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#0F172A]">
                                    Stripe Pro Upgrades
                                </h3>
                                <p className="text-xs text-slate-600 mt-0.5">
                                    Seamless one-time upgrades for Student Pro and Tutor Pro tiers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Role-Based Ecosystem Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                        Platform Ecosystem
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                        Designed Around Every Stakeholder
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STAKEHOLDER_ROLES.map((item) => {
                        const IconComponent = item.icon;
                        const isTeal = item.accent === "teal";
                        return (
                            <div
                                key={item.role}
                                className="h-full flex flex-col justify-between rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xs"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${isTeal
                                                    ? "bg-teal-50 text-[#0D9488]"
                                                    : "bg-[#E0F7FF] text-[#0369A1]"
                                                }`}
                                        >
                                            {item.role}
                                        </span>
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${isTeal
                                                    ? "bg-teal-50 text-[#0D9488]"
                                                    : "bg-[#E0F7FF] text-[#0284C7]"
                                                }`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#0F172A]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <ul className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                                    {item.highlights.map((point) => (
                                        <li key={point} className="flex items-start gap-2">
                                            <CheckCircle2
                                                className={`w-4 h-4 shrink-0 mt-0.5 ${isTeal ? "text-[#0D9488]" : "text-[#0284C7]"
                                                    }`}
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>
            <HowItWorks />
        </main>
    );
}