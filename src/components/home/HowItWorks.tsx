"use client";

import { useEffect, useRef, useState } from "react";
import {
    Search,
    FileText,
    CheckCircle2,
    Sparkles,
    BookPlus,
    ShieldCheck,
    Users,
    BadgeDollarSign,
} from "lucide-react";

type FlowRole = "student" | "tutor";

const STUDENT_STEPS = [
    {
        step: "01",
        title: "Browse & Filter Tuitions",
        desc: "Search approved batches by subject, class level, monthly budget, and Online or Offline mode.",
        icon: Search,
    },
    {
        step: "02",
        title: "Review Tutor & Schedule",
        desc: "Inspect tuition details, weekly class days, mentor profile, and learning format before applying.",
        icon: FileText,
    },
    {
        step: "03",
        title: "Submit Application",
        desc: "Apply in seconds with your preferred schedule and learning note, then track status in real time.",
        icon: CheckCircle2,
    },
    {
        step: "04",
        title: "Upgrade to Student Pro",
        desc: "Unlock priority application highlighting and unlimited tuition bookmarks with Stripe ($10).",
        icon: Sparkles,
    },
];

const TUTOR_STEPS = [
    {
        step: "01",
        title: "Publish a Tuition Batch",
        desc: "Create a structured listing with subject, class level, monthly fee, and an ImgBB cover banner.",
        icon: BookPlus,
    },
    {
        step: "02",
        title: "Admin Quality Approval",
        desc: "Platform moderators verify your listing so students discover trusted, approved batches.",
        icon: ShieldCheck,
    },
    {
        step: "03",
        title: "Accept or Reject Applicants",
        desc: "Review incoming student requests, notes, and preferred schedules directly from your dashboard.",
        icon: Users,
    },
    {
        step: "04",
        title: "Scale with Tutor Pro",
        desc: "Post unlimited active tuition batches beyond the 2-post free limit via Stripe ($15).",
        icon: BadgeDollarSign,
    },
];

export default function HowItWorks() {
    const [activeRole, setActiveRole] = useState<FlowRole>("student");
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
            { threshold: 0.15 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    const steps = activeRole === "student" ? STUDENT_STEPS : TUTOR_STEPS;

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative overflow-hidden py-16 lg:py-20 bg-[#F4F8FA]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with Scroll Up Reveal */}
                <div
                    className={`text-center max-w-2xl mx-auto transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#0284C7]/20 text-[#0284C7] text-xs font-bold uppercase tracking-wider shadow-2xs">
                        Platform Workflow
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-3">
                        How MentorLagbe Works
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2">
                        Switch between Student and Tutor workflows to see how batches are published, moderated, and enrolled.
                    </p>

                    {/* Role Toggle Pill */}
                    <div className="mt-6 inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <button
                            type="button"
                            onClick={() => setActiveRole("student")}
                            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${activeRole === "student"
                                    ? "bg-[#0284C7] text-white shadow-xs"
                                    : "text-slate-600 hover:text-[#0F172A]"
                                }`}
                        >
                            For Students
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveRole("tutor")}
                            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${activeRole === "tutor"
                                    ? "bg-[#0D9488] text-white shadow-xs"
                                    : "text-slate-600 hover:text-[#0F172A]"
                                }`}
                        >
                            For Tutors
                        </button>
                    </div>
                </div>

                {/* 4-Step Cards with Staggered Bottom-to-Top Reveal */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, idx) => {
                        const IconComponent = item.icon;
                        const isTutor = activeRole === "tutor";
                        return (
                            <div
                                key={`${activeRole}-${item.step}`}
                                style={{ transitionDelay: `${idx * 110}ms` }}
                                className={`group h-full flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-6 shadow-2xs hover:-translate-y-1 hover:shadow-md transition-all duration-700 ease-out ${isTutor
                                        ? "hover:border-[#0D9488]/50"
                                        : "hover:border-[#0284C7]/50"
                                    } ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center transition ${isTutor
                                                    ? "bg-teal-50 text-[#0D9488]"
                                                    : "bg-[#E0F7FF] text-[#0284C7]"
                                                }`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <span className="text-2xl font-extrabold text-slate-200 group-hover:text-slate-300 transition">
                                            {item.step}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#0F172A]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                                    <span>Step {item.step}</span>
                                    <span
                                        className={
                                            isTutor ? "text-[#0D9488]" : "text-[#0284C7]"
                                        }
                                    >
                                        {isTutor ? "Tutor Flow" : "Student Flow"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}