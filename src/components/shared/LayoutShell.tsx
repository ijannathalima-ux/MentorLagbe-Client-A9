"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function LayoutShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith("/dashboard");

    return (
        <>
            {!isDashboard && <Navbar />}
            <div className="flex-1">{children}</div>
            {!isDashboard && <Footer />}
        </>
    );
}