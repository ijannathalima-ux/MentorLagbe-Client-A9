import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookSquare, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer className="bg-white border-t border-slate-200 text-slate-600 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Tagline */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shadow-sm">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#0F172A]">
                                Mentor<span className="text-[#0284C7]">Lagbe</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-600">
                            Connecting learners with verified tutors, structured subject batches, and guided 1-on-1 mentorship.
                        </p>
                        <div className="flex items-center gap-3 pt-1">
                            {/* Social Links Icons */}
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#F4F8FA] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#E0F7FF] hover:text-[#0284C7]">
                                <FaFacebookSquare size={18} />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#F4F8FA] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#E0F7FF] hover:text-[#0284C7]">
                                <FaInstagramSquare size={18} />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#F4F8FA] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#E0F7FF] hover:text-[#0284C7]">
                                <IoLogoLinkedin size={18} />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#F4F8FA] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#E0F7FF] hover:text-[#0284C7]">
                                <FaXTwitter size={18} />
                            </a>
                            <a href="https://google.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#F4F8FA] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#E0F7FF] hover:text-[#0284C7]">
                                <FaGoogle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="hover:text-[#0284C7] transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/tuitions" className="hover:text-[#0284C7] transition">
                                    Browse Tuitions
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-[#0284C7] transition">
                                    Pricing Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/#how-it-works" className="hover:text-[#0284C7] transition">
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Account & Portals */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
                            Portals
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/sign-in" className="hover:text-[#0284C7] transition">
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link href="/sign-up" className="hover:text-[#0284C7] transition">
                                    Create Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-[#0284C7] transition">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/profile" className="hover:text-[#0284C7] transition">
                                    Update Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                                <span>Chattogram, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                                <a href="mailto:support@mentorlagbe.com" className="hover:text-[#0284C7] transition">
                                    support@mentorlagbe.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                                <span>+880 1800-000000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; 2026 MentorLagbe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}