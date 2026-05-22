"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

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
    // Simulate API call — replace with your email service (Mailchimp, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center space-x-3 py-3">
        <CheckCircle className="text-amber-400" size={22} />
        <p className={`font-medium text-sm ${variant === "footer" ? "text-white" : "text-green-800"}`}>
          You&apos;re in! Check your inbox for a welcome gift.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {loading ? "Joining..." : "Join Free"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {loading ? "Subscribing..." : "Get Free Resources"}
      </button>
    </form>
  );
}
