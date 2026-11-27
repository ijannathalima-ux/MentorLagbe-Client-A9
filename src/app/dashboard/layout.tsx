"use client";

import { ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    PlusCircle,
    ShieldCheck,
    User,
    LogOut,
    GraduationCap,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user as
        | { name?: string | null; email?: string | null; role?: string | null }
        | undefined;
    const role = user?.role || "student";

    useEffect(() => {
        if (!isPending && !session?.user) {
            router.replace("/sign-in");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 text-sm font-medium text-slate-600">
                Loading workspace...
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    const handleSignOut = async () => {
        await authClient.signOut();
        router.replace("/sign-in");
    };

    const navItems =
        role === "student"
            ? [
                { label: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
                { label: "Browse Tuitions", href: "/tuitions", icon: BookOpen },
                { label: "My Applications", href: "/dashboard/student#applications", icon: FileText },
            ]
            : role === "tutor"
                ? [
                    { label: "Dashboard", href: "/dashboard/tutor", icon: LayoutDashboard },
                    { label: "Post a Tuition", href: "/dashboard/tutor#post-tuition", icon: PlusCircle },
                    { label: "Browse Tuitions", href: "/tuitions", icon: BookOpen },
                ]
                : [
                    { label: "Dashboard", href: "/dashboard/admin", icon: ShieldCheck },
                    { label: "Browse Tuitions", href: "/tuitions", icon: BookOpen },
                ];

    const initials = (user?.name || "U")
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col lg:flex-row">
            {/* Left Sidebar (Clean Light + Sky Accent) */}
            <aside className="w-full lg:w-64 lg:min-h-screen shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
                <div>
                    {/* Brand Header */}
                    <div className="h-16 px-5 border-b border-slate-200/80 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
                            <GraduationCap className="w-4 h-4" />
                        </div>
                        <span className="text-base font-bold tracking-tight text-slate-900">
                            Mentor<span className="text-[#0284C7]">Lagbe</span>
                        </span>
                    </div>

                    {/* User Summary */}
                    <div className="p-4 border-b border-slate-200/70 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0369A1] font-bold text-sm flex items-center justify-center border border-sky-200 shrink-0">
                            {initials}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate">
                                {user?.name || "User"}
                            </p>
                            <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-sky-50 text-[#0284C7] border border-sky-200/80 capitalize">
                                {role}
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="px-3 pt-5 pb-2">
                        <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            Navigation
                        </p>
                        <nav className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const cleanHref = item.href.split("#")[0];
                                const isActive = pathname === cleanHref && !item.href.includes("#");

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${isActive
                                                ? "bg-[#0284C7] text-white shadow-xs"
                                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                            }`}
                                    >
                                        <Icon className="w-4 h-4 shrink-0" />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}

                            <Link
                                href="/dashboard/profile"
                                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${pathname === "/dashboard/profile"
                                        ? "bg-[#0284C7] text-white shadow-xs"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                    }`}
                            >
                                <User className="w-4 h-4 shrink-0" />
                                <span>Profile</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Sign Out */}
                <div className="p-3 border-t border-slate-200/80">
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Right Main Content */}
            <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-slate-50">
                {/* Top Bar */}
                <header className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between gap-4 sticky top-0 z-10">
                    <h2 className="text-sm sm:text-base font-semibold text-slate-800 capitalize">
                        {role} Dashboard
                    </h2>

                    <div className="flex items-center gap-2.5">
                        <span className="hidden sm:inline text-sm font-medium text-slate-700">
                            {user?.name || "User"}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0369A1] font-bold text-xs flex items-center justify-center border border-sky-200">
                            {initials}
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="p-5 sm:p-7 flex-1">{children}</main>
            </div>
        </div>
    );
}