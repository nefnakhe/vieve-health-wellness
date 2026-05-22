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

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Newsletter Strip */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              Join the Vieve Wellness Community
            </h3>
            <p className="text-green-200 mb-6 text-sm">
              Get culturally relevant diabetes education, wellness tips, recipes, and free resources delivered to your inbox.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size="sm" />
            </div>
            <p className="text-green-300 text-sm italic mb-4">
              Where Diabetes Education Meets Empowerment
            </p>
            <p className="text-green-400 text-sm leading-relaxed mb-6">
              Helping African and diaspora communities better understand diabetes,
              nutrition, and wellness through culturally relevant education.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/vievehealthwellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-green-800 hover:bg-green-700 rounded-full transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/vievehealthwellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-green-800 hover:bg-green-700 rounded-full transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com/@vievehealthwellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 bg-green-800 hover:bg-green-700 rounded-full transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Popular Articles
            </h4>
            <ul className="space-y-3">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-400 hover:text-amber-400 text-sm transition-colors leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@vievehealthwellness.com"
                  className="text-green-400 hover:text-amber-400 text-sm transition-colors"
                >
                  info@vievehealthwellness.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-green-400 text-sm">
                  Serving the African & diaspora community worldwide via telehealth
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-900 rounded-xl">
              <p className="text-green-300 text-xs leading-relaxed">
                <strong className="text-green-200">Disclaimer:</strong> Content on this
                website is for educational purposes only and does not constitute medical
                advice. Always consult your healthcare provider for personalized medical guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-900 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-green-600 text-xs">
            © {new Date().getFullYear()} Vieve Health & Wellness. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-green-600 hover:text-green-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-green-600 hover:text-green-400 text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
