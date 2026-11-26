"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  UserCheck,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";

type SignUpRole = "student" | "tutor";

export default function SignUpPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<SignUpRole>("student");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validatePassword = (pass: string) => {
    if (pass.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(pass)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(pass)) {
      return "Password must contain at least one lowercase letter.";
    }
    return null;
  };

  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      image?: string;
    };

    const name = values.name?.trim() || "";
    const email = values.email?.trim().toLowerCase() || "";
    const password = values.password || "";
    const image = values.image?.trim() || "";

    if (!name) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const passErr = validatePassword(password);
    if (passErr) {
      setPasswordError(passErr);
      toast.error(passErr);
      return;
    }

    setPasswordError(null);
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        ...(image ? { image } : {}),
        role,
        plan: "free",
      } as Parameters<typeof authClient.signUp.email>[0]);

      if (error) {
        toast.error(error.message || "Registration failed.");
        return;
      }

      if (data) {
        toast.success("Account created successfully! Please sign in.");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50/70 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              MentorLagbe
            </p>
            <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6">
          Sign up as a <span className="font-semibold text-slate-800">Student</span> or{" "}
          <span className="font-semibold text-slate-800">Tutor</span> with the{" "}
          <span className="font-semibold text-slate-800">Free</span> plan.
        </p>

        <form onSubmit={handleRegister} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Profile Image URL <span className="text-slate-400">(optional)</span>
            </label>
            <div className="relative">
              <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="image"
                name="image"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={() => {
                  if (passwordError) setPasswordError(null);
                }}
                placeholder="Min 6 chars, 1 uppercase & 1 lowercase"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
              />
            </div>
            {passwordError && (
              <p className="mt-1.5 text-xs text-rose-600">{passwordError}</p>
            )}
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-700 mb-1.5">
              Select Role
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-colors ${
                  role === "student"
                    ? "border-sky-600 bg-sky-50 text-sky-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Student</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("tutor")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-colors ${
                  role === "tutor"
                    ? "border-sky-600 bg-sky-50 text-sky-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Tutor</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-700 disabled:opacity-60 text-white text-sm font-medium transition-colors"
          >
            <span>{isLoading ? "Creating account..." : "Sign Up"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-sm text-slate-600 text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-sky-700 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}