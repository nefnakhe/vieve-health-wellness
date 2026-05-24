import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import NewsletterForm from "./NewsletterForm";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Genevieve" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Free Resources" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/media", label: "Media & Speaking" },
];

const blogLinks = [
  { href: "/blog/can-people-with-diabetes-eat-garri", label: "Can You Eat Garri With Diabetes?" },
  { href: "/blog/5-african-foods-that-affect-blood-sugar", label: "5 African Foods & Blood Sugar" },
  { href: "/blog/is-plantain-good-for-diabetes", label: "Is Plantain Good for Diabetes?" },
  { href: "/blog/common-diabetes-myths-in-african-communities", label: "Diabetes Myths Debunked" },
];

const socialLinks = [
  { href: "https://instagram.com/vievehealthwellness", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com/vievehealthwellness", label: "Facebook", Icon: FacebookIcon },
  { href: "https://youtube.com/@vievehealthwellness", label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">

      {/* ── Newsletter strip ─────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f766e 0%, #115e59 60%, #0f766e 100%)",
          boxShadow: "inset 0 -2px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='white'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          {/* Glow ring behind icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5
            bg-white/10 shadow-[0_0_30px_rgba(251,191,36,0.25)] border border-white/20">
            <Mail size={22} className="text-amber-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
            Join the Vieve Wellness Community
          </h3>
          <p className="text-teal-200 mb-7 text-sm sm:text-base leading-relaxed">
            Get culturally relevant diabetes education, wellness tips, recipes, and free
            resources delivered to your inbox.
          </p>
          <NewsletterForm variant="footer" />
        </div>
      </div>

      {/* ── Main footer ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size="sm" />
            </div>
            <p className="text-teal-500 text-sm leading-relaxed mb-6">
              Helping African and diaspora communities better understand diabetes,
              nutrition, and wellness through culturally relevant education.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={[
                    "p-2.5 rounded-full transition-all duration-200",
                    "bg-teal-800/60 border border-teal-700/50 text-teal-300",
                    "hover:bg-amber-500 hover:border-amber-400 hover:text-white",
                    "hover:shadow-[0_4px_14px_rgba(245,158,11,0.4)]",
                    "hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-400 hover:text-amber-400 text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Popular Articles
            </h4>
            <ul className="space-y-2.5">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-400 hover:text-amber-400 text-sm transition-colors leading-snug block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-amber-400" />
                </div>
                <a
                  href="mailto:hello@vievehealthwellness.com"
                  className="text-teal-400 hover:text-amber-400 text-sm transition-colors break-all"
                >
                  hello@vievehealthwellness.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-amber-400" />
                </div>
                <span className="text-teal-500 text-sm leading-relaxed">
                  Serving the African & diaspora community worldwide via telehealth
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-teal-900/70 border border-teal-800/50
              shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-teal-400 text-xs leading-relaxed">
                <strong className="text-teal-300">Disclaimer:</strong> Content on this
                website is for educational purposes only and does not constitute medical advice.
                Always consult your healthcare provider for personalized guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-teal-900/70
          flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-teal-700 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Vieve Health and Wellness. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-teal-700 hover:text-teal-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-teal-700 hover:text-teal-400 text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
