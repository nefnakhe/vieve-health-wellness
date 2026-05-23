import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  ChevronRight,
  Download,
  Apple,
  Activity,
  Scale,
  UtensilsCrossed,
  Calendar,
  Sprout,
  HomeIcon,
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
                  Consultation
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
        className="relative overflow-hidden py-24 sm:py-32"
        style={{ background: "linear-gradient(160deg, #042f2e 0%, #0f766e 55%, #115e59 100%)" }}
      >
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Amber accent glow top-right */}
        <div className="absolute -top-20 right-0 w-[480px] h-[480px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)" }} />
        {/* Teal glow bottom-left */}
        <div className="absolute bottom-0 -left-20 w-80 h-80 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.2) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — large editorial statement */}
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.25em] mb-6">
                Our Mission
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                Health education{" "}
                <em className="not-italic text-amber-400">built for us.</em>
              </h2>
              <p className="text-teal-200 text-lg leading-relaxed max-w-lg mb-10">
                Many diabetes resources were never designed with African and diaspora communities
                in mind. At Vieve, we start with your table, your traditions, and your life —
                then build education around them.
              </p>
              <div className="h-px bg-gradient-to-r from-teal-500/60 via-amber-400/40 to-transparent mb-10" />
              <p className="text-white text-xl font-semibold leading-relaxed">
                Practical. Empowering.{" "}
                <span className="text-amber-300">Culturally relevant.</span>
              </p>
            </div>

            {/* Right — four statement lines */}
            <div className="space-y-px">
              {[
                { label: "Our Foods",        body: "From jollof rice to eba to plantain — education that begins at your table, not a lab.",   num: "01" },
                { label: "Our Culture",      body: "The celebrations, traditions, and family values that define how our communities eat.",     num: "02" },
                { label: "Our Lifestyles",   body: "Practical, real-world guidance designed for African and diaspora life — not a textbook.", num: "03" },
                { label: "Our Experiences",  body: "No judgment. No elimination lists. Just honest, grounded, empowering guidance.",          num: "04" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-5 py-6 border-b border-white/10 hover:border-amber-400/40 transition-all duration-300 cursor-default"
                >
                  <span className="text-xs font-bold text-teal-500 group-hover:text-amber-400 mt-1 transition-colors duration-300 shrink-0 w-6">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-amber-300 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-teal-300 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-teal-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300 mt-1.5 shrink-0"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT WE TEACH ─────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        {/* Faint teal wash behind content */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,118,110,0.04) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                Education Topics
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-950 leading-tight">
                What We Teach
              </h2>
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm sm:text-right">
              Eight areas of practical, culturally grounded education — all under one roof.
            </p>
          </div>

          {/* Two-column feature list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 mb-14">
            {whatWeTeach.map((item, i) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 py-7 border-b border-gray-100 hover:border-teal-200 transition-colors duration-300"
              >
                {/* Large index number */}
                <span
                  className="text-5xl font-black leading-none shrink-0 select-none transition-colors duration-300"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px",
                    WebkitTextStrokeColor: i % 2 === 0 ? "rgba(15,118,110,0.2)" : "rgba(245,158,11,0.2)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <item.icon
                      size={16}
                      className="text-teal-600 group-hover:text-amber-500 transition-colors duration-300 shrink-0"
                    />
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-teal-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-[26px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/work-with-me"
              className={[
                "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white",
                "bg-gradient-to-br from-teal-600 to-teal-800",
                "shadow-[0_4px_14px_rgba(15,118,110,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                "hover:from-teal-500 hover:to-teal-700 hover:shadow-[0_8px_22px_rgba(15,118,110,0.45)] hover:-translate-y-0.5",
                "active:translate-y-0 transition-all duration-200",
              ].join(" ")}
            >
              Explore All Programs <ChevronRight size={15} />
            </Link>
            <Link
              href="/blog"
              className="text-teal-700 hover:text-teal-900 font-semibold text-sm underline underline-offset-4 decoration-teal-200 hover:decoration-teal-500 transition-all duration-200"
            >
              Or browse our free articles →
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
              Book a Consultation with Dr. Genevieve
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
