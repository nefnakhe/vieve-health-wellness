import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  Star,
  ChevronRight,
  Download,
  Apple,
  Activity,
  Scale,
  UtensilsCrossed,
  Calendar,
  Sprout,
  HomeIcon,
  Clock,
} from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import BlogCard from "@/components/BlogCard";
import {
  AfricanFoodIcon,
  PortionHandIcon,
  NigerianFoodsIcon,
  CarbsChartIcon,
} from "@/components/ResourceIcons";
import { blogPosts } from "@/data/blog-posts";

const whatWeTeach = [
  {
    icon: Activity,
    title: "Diabetes Education",
    description:
      "Understanding diabetes basics, blood sugar management, medications, and building healthy long-term habits.",
  },
  {
    icon: UtensilsCrossed,
    title: "African Foods & Blood Sugar",
    description:
      "Learning how common African meals affect glucose levels and how to make smarter, satisfying choices.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description:
      "Practical, sustainable strategies for healthy weight loss and lifestyle improvement — no crash diets.",
  },
  {
    icon: Apple,
    title: "Portion Control",
    description:
      "Simple visual methods for managing portions without eliminating the cultural foods you love.",
  },
  {
    icon: Calendar,
    title: "Meal Planning",
    description:
      "Balanced meal ideas using culturally familiar foods your family will actually enjoy.",
  },
  {
    icon: Sprout,
    title: "Prediabetes Prevention",
    description:
      "Helping individuals lower their risk through practical, evidence-based lifestyle changes.",
  },
  {
    icon: HomeIcon,
    title: "Family Nutrition",
    description:
      "Encouraging healthier habits for the entire household — because wellness is a family journey.",
  },
  {
    icon: Heart,
    title: "Healthy Aging",
    description:
      "Nutrition and wellness support designed specifically for adults over 40 and older adults.",
  },
];

const testimonials = [
  {
    quote:
      "Finally, diabetes education that reflects our culture and our foods. I no longer feel like I have to choose between my health and my heritage.",
    name: "Community Member",
    location: "Houston, TX",
  },
  {
    quote:
      "Dr. Genevieve explains diabetes in a practical and empowering way. She makes you feel seen and understood, not judged.",
    name: "Wellness Community Member",
    location: "Atlanta, GA",
  },
  {
    quote:
      "I appreciate learning how to manage my blood sugar without giving up all my traditional foods. The portion guidance alone changed everything for me.",
    name: "Program Participant",
    location: "Maryland",
  },
];

const freeResources = [
  {
    title: "African Foods & Blood Sugar Guide",
    description: "A practical guide to common African foods and their impact on blood glucose.",
    Icon: AfricanFoodIcon,
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-300",
    file: "/downloads/african-foods-blood-sugar-guide.pdf",
  },
  {
    title: "Portion Control Hand Guide",
    description: "Visual portion measurement method using just your hand — no scales needed.",
    Icon: PortionHandIcon,
    iconBg: "bg-teal-500/20",
    iconColor: "text-teal-300",
    file: "/downloads/portion-control-hand-guide.pdf",
  },
  {
    title: "Diabetes-Friendly Nigerian Foods",
    description: "A curated list of Nigerian foods that support healthy blood sugar levels.",
    Icon: NigerianFoodsIcon,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-300",
    file: "/downloads/diabetes-friendly-nigerian-foods.pdf",
  },
  {
    title: "Understanding Carbohydrates",
    description: "Simple breakdown of how carbs in African meals affect your blood sugar.",
    Icon: CarbsChartIcon,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-300",
    file: "/downloads/understanding-carbohydrates.pdf",
  },
];

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div>
      {/* ── HERO SECTION ──────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #042f2e 0%, #115e59 60%, #0f766e 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh]">

            {/* ── Left: Text content ── */}
            <div className="flex flex-col justify-center py-24 lg:py-32 lg:pr-12 relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Culturally Relevant{" "}
                <span className="text-amber-400">Diabetes Education</span>{" "}
                for Africans &amp; the Diaspora
              </h1>

              <p className="text-lg sm:text-xl text-teal-200 leading-relaxed mb-10 max-w-xl">
                Helping individuals and families better understand diabetes, food,
                weight management, and healthy living through practical, culturally
                informed education.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
                <Link
                  href="/blog"
                  className={[
                    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold",
                    "bg-gradient-to-br from-amber-400 to-amber-600 text-white",
                    "shadow-[0_6px_22px_rgba(245,158,11,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]",
                    "hover:from-amber-300 hover:to-amber-500 hover:shadow-[0_10px_30px_rgba(245,158,11,0.6)] hover:-translate-y-1",
                    "active:translate-y-0 transition-all duration-200",
                  ].join(" ")}
                >
                  <BookOpen size={18} />
                  Start Learning
                </Link>
                <Link
                  href="/work-with-me"
                  className={[
                    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold",
                    "bg-white/10 backdrop-blur-sm border border-white/30 text-white",
                    "shadow-[0_4px_14px_rgba(0,0,0,0.2)]",
                    "hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_22px_rgba(0,0,0,0.3)] hover:-translate-y-0.5",
                    "active:translate-y-0 transition-all duration-200",
                  ].join(" ")}
                >
                  Book a Session
                </Link>
                <Link
                  href="/resources"
                  className={[
                    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold",
                    "border border-teal-400/50 text-teal-200",
                    "hover:bg-white/10 hover:border-teal-300 hover:text-white hover:-translate-y-0.5",
                    "active:translate-y-0 transition-all duration-200",
                  ].join(" ")}
                >
                  <Download size={18} />
                  Free Guides
                </Link>
              </div>

              {/* Social proof pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: BookOpen, text: "Evidence-based education" },
                  { icon: Heart, text: "Culturally informed" },
                  { icon: Users, text: "Community-centered" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-teal-100 text-sm bg-white/8 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                  >
                    <item.icon size={13} className="text-amber-400" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Hero image ── */}
            <div className="relative hidden lg:block">
              {/* Full-height image panel flush to section edge */}
              <div className="absolute inset-0">
                <FadeImage
                  src="/images/hero/hero-main.jpg"
                  alt="Culturally relevant diabetes education — Vieve Health and Wellness"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Left-side fade so text panel blends cleanly */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #042f2e 0%, rgba(4,47,46,0.5) 30%, transparent 65%)",
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Mobile: image behind text at reduced opacity */}
        <div className="absolute inset-0 lg:hidden">
          <FadeImage
            src="/images/hero/hero-main.jpg"
            alt="Culturally relevant diabetes education — Vieve Health and Wellness"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "rgba(4,47,46,0.78)" }} />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── WHY VIEVE EXISTS ──────────────────────────── */}
      <section
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #f0fdfa 0%, #ccfbf1 45%, #f0fdfa 100%)" }}
      >
        {/* Depth orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.1) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 60%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Label */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 text-teal-700 font-semibold text-xs uppercase tracking-widest bg-white/80 border border-teal-200 px-4 py-1.5 rounded-full shadow-[0_2px_12px_rgba(15,118,110,0.1)] backdrop-blur-sm">
              Our Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 text-center leading-tight mb-6">
            Why Vieve Health and Wellness Exists
          </h2>

          {/* Intro */}
          <p className="text-gray-600 text-lg text-center leading-relaxed max-w-3xl mx-auto mb-14">
            Many diabetes resources were not created with African and diaspora communities in mind.
            Generic health education fails to reflect the foods we grew up eating, the cultures we
            celebrate, or the real-life experiences we navigate every day.
          </p>

          {/* Four pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { title: "Our Foods",       body: "From jollof rice to eba to plantain — education that starts at your table.",      bar: "#0f766e" },
              { title: "Our Culture",     body: "The celebrations, traditions, and family values that shape how we eat and live.",  bar: "#0d9488" },
              { title: "Our Lifestyles",  body: "Practical guidance built for real African and diaspora life — not generic advice.", bar: "#0f766e" },
              { title: "Our Experiences", body: "No judgment. No elimination. Just empowering, culturally grounded education.",     bar: "#d97706" },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 border border-teal-100 shadow-[0_2px_8px_rgba(15,118,110,0.07),0_6px_24px_rgba(15,118,110,0.05)] hover:shadow-[0_8px_32px_rgba(15,118,110,0.13)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-1 rounded-full mb-4" style={{ background: p.bar }} />
                <h3 className="font-bold text-teal-900 text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Mission statement block */}
          <div
            className="relative rounded-2xl px-8 py-7 text-center overflow-hidden shadow-[0_8px_32px_rgba(15,118,110,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"
            style={{ background: "linear-gradient(120deg, #115e59 0%, #0f766e 50%, #115e59 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />
            <p className="relative text-lg sm:text-xl font-semibold text-white leading-relaxed">
              Our mission:{" "}
              <span className="text-amber-300">
                make diabetes education practical, empowering, and culturally relevant.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ── WHAT WE TEACH ─────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Education Topics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What We Teach
            </h2>
            <p className="text-gray-600 text-lg">
              Practical, culturally relevant education across every area that
              matters for your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeTeach.map((item) => (
              <div
                key={item.title}
                className={[
                  "bg-white rounded-2xl p-6 border border-gray-100 group",
                  "shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.05)]",
                  "hover:shadow-[0_6px_24px_rgba(0,0,0,0.1),0_2px_8px_rgba(15,118,110,0.08)]",
                  "hover:-translate-y-1.5 transition-all duration-300",
                ].join(" ")}
              >
                <div className={[
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  "bg-teal-50 group-hover:bg-teal-100",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_6px_rgba(15,118,110,0.12)]",
                  "transition-all duration-300",
                ].join(" ")}>
                  <item.icon size={22} className="text-teal-700 icon-glow-green" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/work-with-me"
              className={[
                "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white",
                "bg-gradient-to-br from-teal-600 to-teal-800",
                "shadow-[0_4px_14px_rgba(15,118,110,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                "hover:from-teal-500 hover:to-teal-700 hover:shadow-[0_8px_22px_rgba(15,118,110,0.45)] hover:-translate-y-0.5",
                "active:translate-y-0 transition-all duration-200",
              ].join(" ")}
            >
              Explore Our Programs <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET DR. GENEVIEVE ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image stack */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-lg">
                    <FadeImage
                      src="/images/team/dr-genevieve-headshot.jpg"
                      alt="Dr. Genevieve Ufongene, DNP, FNP-C"
                      fill
                      className="object-cover object-top opacity-0 transition-opacity duration-700"
                    />
                  </div>
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg">
                    <FadeImage
                      src="/images/team/dr-genevieve-community.jpg"
                      alt="Dr. Genevieve at a community health event"
                      fill
                      className="object-cover opacity-0 transition-opacity duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 shadow-lg">
                    <FadeImage
                      src="/images/team/dr-genevieve-workshop.jpg"
                      alt="Dr. Genevieve presenting at an education workshop"
                      fill
                      className="object-cover opacity-0 transition-opacity duration-700"
                    />
                  </div>
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950 shadow-lg">
                    <FadeImage
                      src="/images/team/dr-genevieve-ada-conference.jpg"
                      alt="Dr. Genevieve at the ADA Scientific Sessions"
                      fill
                      className="object-cover opacity-0 transition-opacity duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Credential badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-teal-800 text-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap">
                <span className="font-bold text-sm">DNP, FNP-C</span>
                <span className="text-teal-300 text-sm ml-2">Board Certified</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Meet the Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Meet Dr. Genevieve
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Dr. Genevieve Ufongene, DNP, FNP-C is a Family Nurse Practitioner
                passionate about culturally relevant diabetes education for African and
                diaspora communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Through Vieve Health & Wellness, she combines evidence-based education
                with practical lifestyle guidance that reflects real foods, real cultures,
                and real lives. Her mission is to bridge the gap between traditional
                diabetes education and culturally familiar nutrition practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                A regular attendee of the ADA Scientific Sessions and an active voice in
                community health, Dr. Genevieve brings both clinical expertise and deep
                cultural understanding to every interaction.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Specialization", value: "Diabetes Education" },
                  { label: "Community Focus", value: "African & Diaspora" },
                  { label: "Credential", value: "DNP, FNP-C" },
                  { label: "Conferences", value: "ADA Scientific Sessions" },
                ].map((item) => (
                  <div key={item.label} className="bg-teal-50 border border-teal-100 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(15,118,110,0.08)]">
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-teal-900 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className={[
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white",
                  "bg-gradient-to-br from-teal-600 to-teal-800",
                  "shadow-[0_4px_14px_rgba(15,118,110,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                  "hover:from-teal-500 hover:to-teal-700 hover:shadow-[0_8px_22px_rgba(15,118,110,0.45)] hover:-translate-y-0.5",
                  "active:translate-y-0 transition-all duration-200",
                ].join(" ")}
              >
                Read Full Story <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE RESOURCES ────────────────────────────── */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Free Downloads
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Free Educational Resources
            </h2>
            <p className="text-teal-300 text-lg">
              Practical guides created specifically for African and diaspora
              communities — completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {freeResources.map((resource) => (
              <div
                key={resource.title}
                className={[
                  "rounded-2xl p-6 group transition-all duration-300",
                  "bg-teal-800/50 backdrop-blur-sm border border-teal-700/60",
                  "shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
                  "hover:bg-teal-800/80 hover:border-teal-600 hover:-translate-y-1",
                  "hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]",
                ].join(" ")}
              >
                <div className={[
                  `w-14 h-14 ${resource.iconBg} rounded-2xl flex items-center justify-center mb-4`,
                  "shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]",
                ].join(" ")}>
                  <resource.Icon className={`w-8 h-8 ${resource.iconColor}`} />
                </div>
                <h3 className="font-bold text-white mb-2 text-base leading-snug">
                  {resource.title}
                </h3>
                <p className="text-teal-300 text-sm leading-relaxed mb-5">
                  {resource.description}
                </p>
                <Link
                  href="/resources"
                  className={[
                    "inline-flex items-center gap-1.5 text-sm font-semibold",
                    "text-amber-400 hover:text-amber-200",
                    "transition-all duration-200 hover:gap-2.5",
                  ].join(" ")}
                >
                  <Download size={13} />
                  Download Free
                </Link>
              </div>
            ))}
          </div>

          {/* Email signup */}
          <div className={[
            "rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto",
            "bg-teal-800/40 border border-teal-600/40",
            "shadow-[0_0_60px_rgba(15,118,110,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
            "backdrop-blur-sm",
          ].join(" ")}>
            <h3 className="text-2xl font-bold text-white mb-3">
              Join the Vieve Wellness Community
            </h3>
            <p className="text-teal-300 mb-7">
              Get culturally relevant diabetes education, wellness tips, recipes, and free
              resources delivered to your inbox.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Educational Content
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Latest Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900 transition-colors"
            >
              View all articles <ChevronRight size={16} />
            </Link>
          </div>

          {/* Featured post */}
          <div className="mb-8">
            <BlogCard post={featuredPost} featured />
          </div>

          {/* Recent posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Community Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What the Community Says
            </h2>
            <p className="text-gray-600 text-lg">
              Real experiences from people who found education that finally made sense for their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={[
                "bg-white rounded-2xl p-8 border border-amber-100",
                "shadow-[0_2px_8px_rgba(0,0,0,0.06),0_6px_20px_rgba(245,158,11,0.06)]",
                "hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] hover:-translate-y-1",
                "transition-all duration-300",
              ].join(" ")}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section
        className="py-20 text-white text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f766e 0%, #115e59 50%, #042f2e 100%)" }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-teal-300 text-lg mb-10 leading-relaxed">
            Whether you&apos;re newly diagnosed, managing long-term diabetes, or simply
            looking to live healthier — you deserve education that speaks your language
            and honors your culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-me"
              className={[
                "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold",
                "bg-gradient-to-br from-amber-400 to-amber-600 text-white",
                "shadow-[0_6px_24px_rgba(245,158,11,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]",
                "hover:from-amber-300 hover:to-amber-500 hover:shadow-[0_10px_32px_rgba(245,158,11,0.6)] hover:-translate-y-1",
                "active:translate-y-0 transition-all duration-200",
              ].join(" ")}
            >
              Book a Session with Dr. Genevieve
            </Link>
            <Link
              href="/resources"
              className={[
                "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold",
                "bg-white/10 border border-white/30 text-white",
                "shadow-[0_4px_14px_rgba(0,0,0,0.2)]",
                "hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_22px_rgba(0,0,0,0.3)] hover:-translate-y-0.5",
                "active:translate-y-0 transition-all duration-200",
              ].join(" ")}
            >
              <Download size={18} />
              Get Free Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
