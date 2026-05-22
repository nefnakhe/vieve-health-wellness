import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import {
  AfricanFoodIcon,
  PortionHandIcon,
  NigerianFoodsIcon,
  GroceryBagIcon,
  SmoothieIcon,
  FoodSwapIcon,
  CarbsChartIcon,
  BalancedPlateIcon,
} from "@/components/ResourceIcons";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Download free diabetes education resources from Vieve Health & Wellness — culturally relevant guides, charts, and tools for African and diaspora communities.",
};

// Additional inline icons for the graphics section
function PlateMethodIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
      <path d="M24 24 L8 24 Q8 8 24 8 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 24 L24 8 Q40 8 40 24 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M24 24 L40 24 Q40 40 24 40 Q8 40 8 24 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function RiceCompareIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Left: white rice bowl */}
      <ellipse cx="12" cy="32" rx="8" ry="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 28 Q4 35 12 35 Q20 35 20 28" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="9" cy="28" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="27" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="28" r="1.5" fill="currentColor" opacity="0.3" />
      {/* VS */}
      <text x="24" y="30" fontSize="7" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="sans-serif" opacity="0.8">vs</text>
      {/* Right: brown rice bowl */}
      <ellipse cx="36" cy="32" rx="8" ry="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 28 Q28 35 36 35 Q44 35 44 28" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="33" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="36" cy="27" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="39" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
      {/* Labels */}
      <text x="12" y="42" fontSize="5.5" fill="currentColor" textAnchor="middle" fontFamily="sans-serif" opacity="0.7">White</text>
      <text x="36" y="42" fontSize="5.5" fill="currentColor" textAnchor="middle" fontFamily="sans-serif" opacity="0.7">Brown</text>
    </svg>
  );
}

function TrafficLightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="16" y="4" width="16" height="40" rx="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* Red */}
      <circle cx="24" cy="13" r="5" fill="currentColor" opacity="0.8" />
      {/* Amber */}
      <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.5" />
      {/* Green */}
      <circle cx="24" cy="35" r="5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function MythBustIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Thought bubble */}
      <path d="M6 20 Q6 10 16 10 Q18 4 26 4 Q36 4 38 12 Q44 12 44 20 Q44 28 36 28 L16 28 Q6 28 6 20Z"
        fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
      {/* X (myth) */}
      <path d="M14 16 L20 22 M20 16 L14 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* Check (fact) */}
      <path d="M26 19 L29 22 L35 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      {/* Bubbles below */}
      <circle cx="13" cy="34" r="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="41" r="2.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MealIdeasIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Fork & knife */}
      <path d="M10 6 L10 18 M10 12 L13 12 M13 6 L13 18 M11.5 18 L11.5 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 6 Q38 14 35 16 Q32 18 35 20 L35 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Plate */}
      <circle cx="24" cy="28" r="12" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
      {/* Food on plate */}
      <path d="M18 26 Q20 22 24 22 Q28 22 30 26" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="30" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="19" cy="30" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="29" cy="30" r="2" fill="currentColor" opacity="0.3" />
      {/* Star / highlight */}
      <circle cx="36" cy="10" r="5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 7 L36.6 9.2 L39 9.2 L37.2 10.5 L37.8 12.7 L36 11.4 L34.2 12.7 L34.8 10.5 L33 9.2 L35.4 9.2 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

const downloads = [
  {
    Icon: AfricanFoodIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "African Foods & Blood Sugar Guide",
    description:
      "A comprehensive guide to common African and West African foods, their glycemic impact, and smarter ways to enjoy them while managing blood sugar.",
    topics: ["Garri & eba", "Plantain", "Jollof rice", "Fufu", "Pounded yam", "Beans"],
    file: "/downloads/african-foods-blood-sugar-guide.pdf",
    badge: "Most Popular",
    badgeColor: "bg-amber-500",
  },
  {
    Icon: PortionHandIcon,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    title: "Portion Control Hand Guide",
    description:
      "A visual, practical guide to measuring food portions using your own hand — no scales, no apps, no complicated calculations needed.",
    topics: ["Palm = protein", "Fist = carbs", "Cupped hand = starchy foods", "Thumb = fats"],
    file: "/downloads/portion-control-hand-guide.pdf",
    badge: null,
    badgeColor: "",
  },
  {
    Icon: NigerianFoodsIcon,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Diabetes-Friendly Nigerian Foods",
    description:
      "A curated list of Nigerian foods that support healthy blood sugar levels, with tips on preparation and portion sizes for each.",
    topics: ["Vegetables", "Beans & legumes", "Lean proteins", "Low-GI options"],
    file: "/downloads/diabetes-friendly-nigerian-foods.pdf",
    badge: "New",
    badgeColor: "bg-teal-600",
  },
  {
    Icon: GroceryBagIcon,
    iconBg: "bg-lime-50",
    iconColor: "text-lime-700",
    title: "Grocery Shopping Tips",
    description:
      "A practical shopping guide for building a diabetes-friendly African kitchen — what to look for, what to limit, and how to read food labels.",
    topics: ["Label reading", "Smart swaps", "Budget-friendly choices", "Pantry staples"],
    file: "/downloads/grocery-shopping-tips.pdf",
    badge: null,
    badgeColor: "",
  },
  {
    Icon: SmoothieIcon,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Smoothie Guide for Weight Management",
    description:
      "Healthy, satisfying smoothie recipes using ingredients familiar to African kitchens — designed to support weight management and stable blood sugar.",
    topics: ["Low-sugar recipes", "Protein additions", "African fruit options", "Portion guidance"],
    file: "/downloads/smoothie-guide-weight-management.pdf",
    badge: null,
    badgeColor: "",
  },
  {
    Icon: FoodSwapIcon,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Healthy Food Swaps Guide",
    description:
      "Simple swap suggestions that help you enjoy culturally familiar meals with less blood sugar impact — without eliminating traditional foods.",
    topics: ["Rice swaps", "Plantain alternatives", "Healthier oils", "Drink swaps"],
    file: "/downloads/healthy-food-swaps.pdf",
    badge: null,
    badgeColor: "",
  },
  {
    Icon: CarbsChartIcon,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Understanding Carbohydrates in African Meals",
    description:
      "A clear, practical breakdown of how carbohydrates in common African meals affect your blood sugar, with a glycemic index reference chart.",
    topics: ["Glycemic index explained", "Swallow foods", "Portion impact", "Smart pairings"],
    file: "/downloads/understanding-carbohydrates.pdf",
    badge: null,
    badgeColor: "",
  },
  {
    Icon: BalancedPlateIcon,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    title: "The Balanced African Plate Guide",
    description:
      "Visual guide to building a balanced plate using culturally familiar African foods — protein, fiber, and carbohydrates in the right proportions.",
    topics: ["Plate method", "Food groups", "Visual guide", "Meal examples"],
    file: "/downloads/balanced-african-plate.pdf",
    badge: null,
    badgeColor: "",
  },
];

const educationalGraphics = [
  {
    Icon: PlateMethodIcon,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    title: "Balanced Plate Method",
    description: "Visual of the African plate divided into sections for vegetables, protein, and starch.",
  },
  {
    Icon: PortionHandIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    title: "Portion Control Hand Guide",
    description: "Infographic showing how to use your hand as a portion measurement tool.",
  },
  {
    Icon: RiceCompareIcon,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    title: "White Rice vs Brown Rice",
    description: "Side-by-side comparison of blood sugar impact and nutritional differences.",
  },
  {
    Icon: TrafficLightIcon,
    iconBg: "bg-red-50",
    iconColor: "text-teal-600",
    title: "African Foods Glycemic Index Chart",
    description: "Traffic light–style chart of common African foods and their GI ratings.",
  },
  {
    Icon: MythBustIcon,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Diabetes Myths vs Facts",
    description: "Visual debunking of the most common diabetes myths in African communities.",
  },
  {
    Icon: MealIdeasIcon,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Blood Sugar Friendly Meal Ideas",
    description: "Example meal ideas using culturally familiar African foods.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Free Downloads
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Free Educational Resources
          </h1>
          <p className="text-teal-300 text-lg max-w-2xl mx-auto">
            Practical, culturally relevant guides, tools, and educational materials
            designed specifically for African and diaspora communities. 100% free.
          </p>
        </div>
      </section>

      {/* Email Signup Banner */}
      <section className="bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <Mail size={24} className="text-white" />
              <div>
                <p className="font-bold text-white text-lg">Get All Resources Free</p>
                <p className="text-amber-100 text-sm">Join our community and get instant access</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <NewsletterForm variant="footer" />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Downloadable Guides
            </h2>
            <p className="text-gray-600 text-lg">
              Each guide was created to be practical, clear, and culturally relevant.
              No confusing medical jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {downloads.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 ${resource.iconBg} rounded-2xl flex items-center justify-center`}>
                    <resource.Icon className={`w-8 h-8 ${resource.iconColor}`} />
                  </div>
                  {resource.badge && (
                    <span className={`${resource.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {resource.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{resource.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {resource.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <a
                  href={resource.file}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full text-sm transition-colors w-full"
                >
                  <Download size={15} />
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Graphics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Visual Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Educational Graphics
            </h2>
            <p className="text-gray-600 text-lg">
              Visual tools that make diabetes education easier to understand and share
              with family and friends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalGraphics.map((graphic) => (
              <div
                key={graphic.title}
                className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-2xl p-6"
              >
                <div className={`w-14 h-14 ${graphic.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                  <graphic.Icon className={`w-8 h-8 ${graphic.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{graphic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {graphic.description}
                </p>
                <span className="inline-block text-xs text-teal-700 font-medium bg-white border border-teal-200 px-3 py-1 rounded-full">
                  Available in Free Resource Pack
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Sign up to get all graphics and guides delivered to your inbox
            </p>
            <Link
              href="#newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full transition-colors"
            >
              <Mail size={18} />
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 bg-teal-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">
            Want Even More Education?
          </h2>
          <p className="text-teal-300 mb-6">
            Explore our blog for in-depth articles on African foods, blood sugar, meal
            planning, and diabetes management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/work-with-me"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
