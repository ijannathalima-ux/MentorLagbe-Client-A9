"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, LayoutDashboard, User, LogOut } from "lucide-react";
import Image from "next/image";

export type UserRole = "student" | "tutor" | "admin";

export interface NavbarUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: UserRole | string | null;
}

interface NavbarProps {
  user?: NavbarUser | null;
  onSignOut?: () => void | Promise<void>;
}

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar({ user = null, onSignOut = () => {} }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Browse Tuitions", href: "/tuitions" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/#how-it-works" },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const roleBadgeText: string = user?.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
    : "Student";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shadow-sm group-hover:bg-[#0369A1] transition">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0F172A]">
            Mentor<span className="text-[#0284C7]">Lagbe</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-[#0284C7] font-semibold"
                  : "text-slate-600 hover:text-[#0284C7]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth / User Controls */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#0284C7] transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#0284C7] text-white hover:bg-[#0369A1] transition shadow-sm"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg bg-[#E0F7FF] text-[#0369A1] hover:bg-[#bae6fd] transition"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>

              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full border border-slate-200 hover:border-[#0284C7]/50 bg-[#F4F8FA] transition"
                title="Update Profile"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-xs font-bold">
                    {(user.name || "U").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-medium text-slate-800 max-w-[110px] truncate">
                  {user.name || "User"}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#0284C7]/15 text-[#0369A1]">
                  {roleBadgeText}
                </span>
              </Link>

              <button
                type="button"
                onClick={() => void onSignOut()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden lg:inline">Sign Out</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-[#E0F7FF] text-[#0369A1] font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200">
            {!user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 text-sm font-medium rounded-lg border border-slate-300 text-slate-700"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 text-sm font-semibold rounded-lg bg-[#0284C7] text-white"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#F4F8FA]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-sm font-medium text-slate-800">
                      {user.name || "User"}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E0F7FF] text-[#0369A1]">
                    {roleBadgeText}
                  </span>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-2 text-sm font-medium rounded-lg bg-[#E0F7FF] text-[#0369A1]"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-2 text-sm font-medium rounded-lg border border-slate-200 text-slate-700"
                >
                  Update Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    void onSignOut();
                  }}
                  className="w-full py-2 text-sm font-medium rounded-lg text-rose-600 bg-rose-50"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}