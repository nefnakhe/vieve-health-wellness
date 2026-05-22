import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  Leaf,
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
    iconBg: "bg-green-500/20",
    iconColor: "text-green-300",
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        {/* Background image */}
        <div className="absolute inset-0">
          <FadeImage
            src="/images/hero/hero-main.jpg"
            alt="African family enjoying a healthy meal together"
            fill
            priority
            className="object-cover opacity-0 transition-opacity duration-700"
          />
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Leaf size={14} />
              Where Diabetes Education Meets Empowerment
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Culturally Relevant{" "}
              <span className="text-amber-400">Diabetes Education</span> for
              Africans & the Diaspora
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-green-200 leading-relaxed mb-10 max-w-2xl">
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
                  "bg-white/12 backdrop-blur-sm border border-white/30 text-white",
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
                  "border border-green-400/50 text-green-200",
                  "hover:bg-white/10 hover:border-green-300 hover:text-white hover:-translate-y-0.5",
                  "active:translate-y-0 transition-all duration-200",
                ].join(" ")}
              >
                <Download size={18} />
                Free Guides
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: BookOpen, text: "Evidence-based education" },
                { icon: Heart, text: "Culturally informed" },
                { icon: Users, text: "Community-centered" },
              ].map((item) => (
                <div key={item.text}
                  className="flex items-center gap-2 text-green-200 text-sm
                    bg-white/8 border border-white/15 px-3 py-1.5 rounded-full
                    backdrop-blur-sm">
                  <item.icon size={14} className="text-amber-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── WHY VIEVE EXISTS ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Why Vieve Health & Wellness Exists
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Many diabetes resources were not created with African and diaspora
                communities in mind. Generic health education often fails to reflect
                the foods we grew up eating, the cultures we celebrate, or the real
                life experiences we navigate every day.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Vieve Health & Wellness, we believe health education should reflect:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Our foods — from jollof rice to eba to plantain",
                  "Our culture — the celebrations, the traditions, the family table",
                  "Our lifestyles — practical guidance that fits real African life",
                  "Our real-life experiences — no judgment, just empowerment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green-800 font-semibold text-lg">
                Our mission: make diabetes education practical, empowering, and culturally relevant.
              </p>
            </div>

            {/* Image / Visual */}
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-700 to-green-900 shadow-2xl">
                <FadeImage
                  src="/images/community/african-family-meal.jpg"
                  alt="African family enjoying a healthy meal together"
                  fill
                  className="object-cover opacity-0 transition-opacity duration-700"
                />
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                  <p className="text-green-900 font-bold text-lg mb-1">
                    "Finally, education that feels like it was made for us."
                  </p>
                  <p className="text-gray-500 text-sm">— Community Member</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className={[
                "absolute -top-4 -right-4 text-white rounded-2xl p-4",
                "bg-gradient-to-br from-amber-400 to-amber-600",
                "shadow-[0_8px_24px_rgba(245,158,11,0.5)]",
              ].join(" ")}>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs font-medium">Community Members</div>
              </div>
            </div>
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
                  "hover:shadow-[0_6px_24px_rgba(0,0,0,0.1),0_2px_8px_rgba(22,101,52,0.08)]",
                  "hover:-translate-y-1.5 transition-all duration-300",
                ].join(" ")}
              >
                <div className={[
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  "bg-green-50 group-hover:bg-green-100",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_6px_rgba(22,101,52,0.12)]",
                  "transition-all duration-300",
                ].join(" ")}>
                  <item.icon size={22} className="text-green-700 icon-glow-green" />
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
                "bg-gradient-to-br from-green-600 to-green-800",
                "shadow-[0_4px_14px_rgba(22,101,52,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                "hover:from-green-500 hover:to-green-700 hover:shadow-[0_8px_22px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",
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
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-green-700 to-green-900 shadow-lg">
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
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-green-800 shadow-lg">
                    <FadeImage
                      src="/images/team/dr-genevieve-workshop.jpg"
                      alt="Dr. Genevieve presenting at an education workshop"
                      fill
                      className="object-cover opacity-0 transition-opacity duration-700"
                    />
                  </div>
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-green-800 to-green-950 shadow-lg">
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
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-800 text-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap">
                <span className="font-bold text-sm">DNP, FNP-C</span>
                <span className="text-green-300 text-sm ml-2">Board Certified</span>
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
                  <div key={item.label} className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(22,101,52,0.08)]">
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-green-900 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className={[
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white",
                  "bg-gradient-to-br from-green-600 to-green-800",
                  "shadow-[0_4px_14px_rgba(22,101,52,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
                  "hover:from-green-500 hover:to-green-700 hover:shadow-[0_8px_22px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",
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
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Free Downloads
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Free Educational Resources
            </h2>
            <p className="text-green-300 text-lg">
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
                  "bg-green-800/50 backdrop-blur-sm border border-green-700/60",
                  "shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
                  "hover:bg-green-800/80 hover:border-green-600 hover:-translate-y-1",
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
                <p className="text-green-300 text-sm leading-relaxed mb-5">
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
            "bg-green-800/40 border border-green-600/40",
            "shadow-[0_0_60px_rgba(22,101,52,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
            "backdrop-blur-sm",
          ].join(" ")}>
            <h3 className="text-2xl font-bold text-white mb-3">
              Join the Vieve Wellness Community
            </h3>
            <p className="text-green-300 mb-7">
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
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition-colors"
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
        style={{ background: "linear-gradient(135deg, #166534 0%, #14532d 50%, #052e16 100%)" }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-green-300 text-lg mb-10 leading-relaxed">
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
