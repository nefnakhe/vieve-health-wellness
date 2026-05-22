"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

interface Props {
  variant?: "default" | "footer" | "inline";
}

export default function NewsletterForm({ variant = "default" }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-3 py-3">
        <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
          <CheckCircle className="text-amber-400" size={18} />
        </div>
        <p className={`font-semibold text-sm ${variant === "footer" ? "text-white" : "text-teal-800"}`}>
          You&apos;re in! Check your inbox for a welcome gift.
        </p>
      </div>
    );
  }

  /* ── Footer / dark-background variant ─────────────────────────── */
  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={[
              "w-full pl-9 pr-4 py-3 rounded-full text-sm text-white",
              "bg-white/10 border-2 border-white/40",
              "placeholder-white/50",
              "hover:bg-white/20 hover:border-white/70",
              "focus:bg-white/20 focus:border-amber-400 focus:outline-none",
              "transition-all duration-200",
              "shadow-[inset_0_1px_3px_rgba(0,0,0,0.25)]",
            ].join(" ")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={[
            "flex items-center justify-center gap-2",
            "px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap",
            "bg-gradient-to-br from-amber-400 to-amber-600",
            "text-white shadow-lg shadow-amber-900/40",
            "hover:from-amber-300 hover:to-amber-500 hover:shadow-xl hover:shadow-amber-900/50 hover:-translate-y-0.5",
            "active:translate-y-0 active:shadow-md",
            "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none",
            "transition-all duration-200",
          ].join(" ")}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Joining…
            </span>
          ) : (
            <>Join Free <ArrowRight size={14} /></>
          )}
        </button>
      </form>
    );
  }

  /* ── Default / light-background variant ───────────────────────── */
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Mail
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={[
            "w-full pl-10 pr-4 py-3.5 rounded-full text-sm",
            "bg-white border-2 border-gray-200",
            "text-gray-900 placeholder-gray-400",
            "hover:border-teal-300 hover:shadow-md hover:shadow-teal-100",
            "focus:border-teal-600 focus:outline-none focus:shadow-lg focus:shadow-teal-100",
            "transition-all duration-200",
            "shadow-sm",
          ].join(" ")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={[
          "flex items-center justify-center gap-2",
          "px-6 py-3.5 rounded-full text-sm font-bold whitespace-nowrap",
          "bg-gradient-to-br from-teal-600 to-teal-800",
          "text-white shadow-lg shadow-teal-900/30",
          "hover:from-teal-500 hover:to-teal-700 hover:shadow-xl hover:shadow-teal-900/40 hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-md",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none",
          "transition-all duration-200",
        ].join(" ")}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Subscribing…
          </span>
        ) : (
          <>Get Free Resources <ArrowRight size={14} /></>
        )}
      </button>
    </form>
  );
}
