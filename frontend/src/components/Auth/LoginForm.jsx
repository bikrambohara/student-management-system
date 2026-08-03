import React from "react";
import { FcGoogle } from "react-icons/fc";

import {
  CalendarCheck2,
  ChevronDown,
  ClipboardList,
  Eye,
  EyeOff,
  Globe2,
  GraduationCap,
  Headphones,
  LockKeyhole,
  Mail,
  Shield,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

const features = [
  {
    title: "Students",
    description: "Manage Students and records with ease.",
    icon: Users,
    iconClass: "bg-blue-600",
  },
  {
    title: "Attendance",
    description: "Track attendance and generate reports instantly.",
    icon: CalendarCheck2,
    iconClass: "bg-emerald-500",
  },
  {
    title: "Fees",
    description: "Collect fees, view payments and outstanding balances.",
    icon: WalletCards,
    iconClass: "bg-orange-500",
  },
  {
    title: "Exams",
    description: "Schedule exams, publish results and performance.",
    icon: ClipboardList,
    iconClass: "bg-violet-500",
  },
];

const LoginForm = () => {
  return (
    <main className="min-h-screen bg-[#f4f7fb] px-4 py-5 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid  min-h-[calc(100vh-76px)] w-full max-w-[1440px] overflow-hidden rounded-2xl bg-white shadow-[0_15px_55px_rgba(15,23,42,0.15)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* #left section */}
        <div className="relative hidden overflow-hidden  bg-gradient-to-br from-[#061b43] via-[#05255a] to-[#031638] px-10 py-12 text-white lg:flex lg:flex-col">
          <div className=" relative z-10 flex iteam-center gap-4">
            <img
              src="/logo.png"
              alt="Student Management System Logo"
              className="h-20 w-60 object-contain scale-300 "
            ></img>
          </div>

          {/* #introduction */}
          <div className="relative z-10 mt-5">
            <h2 className="max-w-xl text-[28px] font-bold leading-tight">
              Smart School Management,
              <span className="mt-1 block text-blue-500 font-bold text-[25px]">
                Better Education.
              </span>
            </h2>

            <p className="mt-5 text-sm font-semibold max-w-[460px] leading-6 text-slate-500 text-[16px]">
              {" "}
              A complete platform to manage students, teachers, attendance,
              exams, and fees efficiently.
            </p>
          </div>

          {/* #features cards */}

          <div className="mt-9 relative z-10 grid grid-cols-2 gap-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.07] px-3 py-6 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.11]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${feature.iconClass}`}
                  >
                    <Icon classNme="h-6 w-6 strokeWidth={2.3}"></Icon>
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* security message */}
          <div className="relative z-10 mt-auto flex items-center gap-4 pt-10">
            <div className="flex h-12 w-12 items-center justify-center shrink-0 rounded-full border-2 border-blue-500">
              <ShieldCheck className="h-8 w-8 text-blue-400" />
            </div>

            <div>
              <p className="text-sm font-medium">
                {" "}
                Secure. Reliable. Always Accessible.
              </p>
              <p className="mt-1 text-xs text-slate-400 font-semibold">
                Your data is protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>

        {/* #login section */}

        <div className="relative flex items-center justify-center px-5 py-3 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-[510px] pt-10 sm:pt-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#071936] sm:text-4xl">
                Welcome Back
              </h2>
              <p className="mt-2 text-base text-slate-500">
                Sign in to access the Admin Portal
              </p>
            </div>

            <form className="mt-7">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 " />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@school.com"
                    autoComplete="email"
                    required
                    className="h-14 w-full rounded-lg border-2 border-slate-400 bg-white pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400  focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  ></input>
                </div>
              </div>

              {/* passwords */}
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {" "}
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole className=" pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"></LockKeyhole>
                  <input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-14 w-full border-2 rounded-lg  border-slate-400 bg-white pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <button></button>
                </div>
              </div>

              {/* Remember and forgot password */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-800 text-[16px] font-semibold">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-blue-600 text-[16px]"
                  ></input>
                  Remember Me
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-red-600 transition hover:text-blue-700 hover:underline cursor-pointer text-[16px]"
                >
                  Forgot Passwprd
                </button>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="mt-7 h-14 w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-sm font-semibold text-white text-[20px] shadow-lg shadow-blue-500/20 transition hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer"
              >
                Login
              </button>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-0.5 flex-1 bg-slate-400" />
                <span className="text-sm text-slate-500">or continue with</span>
                <div className="h-0.5 flex-1 bg-slate-400" />
              </div>

              {/* Google login */}
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border-2 border-slate-400 bg-white text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
              >
                <FcGoogle size={24} />
                <span>Sign in with Google</span>
              </button>
            </form>

            {/* Support */}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
              <Headphones className="h-5 w-5 text-blue-600" />
              <button className="font-semibold text-blue-600 hover:underline">
                Need Help?
              </button>

              <span className="text-slate-500">
                {" "}
                Contact support@school.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-200 px-1 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-center">
        <p> © 2026 Student Management System (SMS). All rights reserved.</p>
        <p className="flex items-center gap-2">
          <LockKeyhole className="h-4 w-4" />
          Secure access. All your data is encrypted.
        </p>
      </footer>
    </main>
  );
};

export default LoginForm;
