"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, Clock, Crown, FileText, ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function StudentDashboardPage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user as
        | { name?: string | null; plan?: string | null }
        | undefined;

    const currentPlan = (user?.plan || "free").toUpperCase();

    const stats = [
        {
            label: "Total Applied",
            value: "0",
            subtext: "Tuition posts applied for",
            icon: FileText,
        },
        {
            label: "Accepted",
            value: "0",
            subtext: "Approved by tutors",
            icon: CheckCircle2,
        },
        {
            label: "Pending",
            value: "0",
            subtext: "Awaiting tutor response",
            icon: Clock,
        },
        {
            label: "Current Plan",
            value: currentPlan,
            subtext: currentPlan === "PRO" ? "Priority features active" : "Upgrade for extra perks",
            icon: Crown,
        },
    ];

    return (
        <div className="space-y-6">
            {/* Top Welcome Banner */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {isPending
                            ? "Welcome back..."
                            : `Welcome back, ${user?.name || "Student"}`}
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Track your tuition applications, approval status, and learning plan.
                    </p>
                </div>

                <Link
                    href="/tuitions"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition shrink-0"
                >
                    <BookOpen className="w-4 h-4" />
                    <span>Browse Tuitions</span>
                </Link>
            </div>

            {/* 4 Required Overview Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.label}
                            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between gap-4"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {item.label}
                                </span>
                                <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center border border-sky-100">
                                    <Icon className="w-4 h-4" />
                                </div>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                                <p className="mt-1 text-xs text-slate-500">{item.subtext}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Navigation / Next Steps */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold text-slate-900">Quick Actions</h2>
                    <span className="text-xs text-slate-500">Student Tools</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link
                        href="/dashboard/student/my-applications"
                        className="group p-4 rounded-xl border border-slate-200 hover:border-sky-300 bg-slate-50/60 hover:bg-sky-50/40 transition flex items-center justify-between"
                    >
                        <div>
                            <p className="text-sm font-semibold text-slate-900">My Applications</p>
                            <p className="text-xs text-slate-500 mt-0.5">
                                View applied tuitions or cancel pending requests
                            </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0284C7] transition" />
                    </Link>

                    <Link
                        href="/pricing"
                        className="group p-4 rounded-xl border border-slate-200 hover:border-sky-300 bg-slate-50/60 hover:bg-sky-50/40 transition flex items-center justify-between"
                    >
                        <div>
                            <p className="text-sm font-semibold text-slate-900">Upgrade to Pro</p>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Explore Pro benefits and subscription options
                            </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0284C7] transition" />
                    </Link>
                </div>
            </div>
        </div>
    );
}