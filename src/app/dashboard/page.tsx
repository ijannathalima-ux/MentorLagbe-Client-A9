"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const role = (session?.user as { role?: string } | undefined)?.role;

    useEffect(() => {
        if (isPending) return;

        if (!session?.user) {
            router.replace("/sign-in");
            return;
        }

        if (role === "admin") {
            router.replace("/dashboard/admin");
        } else if (role === "tutor") {
            router.replace("/dashboard/tutor");
        } else {
            router.replace("/dashboard/student");
        }
    }, [session, isPending, role, router]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center text-sm text-slate-600">
            Redirecting to your dashboard...
        </div>
    );
}