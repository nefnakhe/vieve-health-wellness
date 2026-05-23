import type { Metadata } from "next";
import Link from "next/link";
import {
  User,
  Users,
  Scale,
  Mic,
  Building,
  Church,
  BookOpen,
  Handshake,
  CheckCircle,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Book 1:1 diabetes education, wellness coaching, community workshops, speaking engagements, and corporate wellness programs with Dr. Genevieve Ufongene.",
};

const services = [
  {
    icon: User,
    title: "1:1 Diabetes Education",
    description:
      "Personalized, one-on-one diabetes education sessions tailored to your specific health situation, cultural background, and lifestyle. Learn to understand your diagnosis, manage your blood sugar, and make informed food choices.",
    includes: [
      "Personalized blood sugar education",
      "Culturally relevant meal guidance",
      "Medication understanding support",
      "Action plan for lifestyle changes",
      "Ongoing questions & follow-up",
    ],
    cta: "Consultation",
    featured: true,
  },
  {
    icon: Scale,
    title: "Wellness Coaching & Weight Management",
    description:
      "Practical, sustainable strategies for healthy weight management grounded in cultural food realities. No crash diets, no food elimination — just evidence-based, culturally informed guidance.",
    includes: [
      "Goal-setting and lifestyle assessment",
      "Cultural food integration",
      "Behavioral change strategies",
      "Portion and meal planning",
      "Progress tracking support",
    ],
    cta: "Learn More",
    featured: false,
  },
  {
    icon: Users,
    title: "Community Workshops",
    description:
      "Engaging, interactive diabetes education workshops designed for African and diaspora community groups. Perfect for community organizations, churches, cultural associations, and health events.",
    includes: [
      "African foods & blood sugar education",
      "Portion control demonstrations",
      "Q&A with Dr. Genevieve",
      "Participant resource packets",
      "Available in-person or virtually",
    ],
    cta: "Book a Workshop",
    featured: false,
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    description:
      "Invite Dr. Genevieve to speak at your event, conference, or panel. Available for keynote addresses, panel discussions, and community presentations on diabetes, nutrition, and African health.",
    includes: [
      "Keynote and panel presentations",
      "Conference and summit talks",
      "Academic and clinical presentations",
      "Media appearances",
      "Virtual and in-person",
    ],
    cta: "Invite Dr. Genevieve",
    featured: false,
  },
  {
    icon: Building,
    title: "Corporate Wellness Programs",
    description:
      "Diabetes prevention and wellness education for African-owned businesses and organizations with diverse workforces. Culturally competent health education that employees will actually engage with.",
    includes: [
      "Diabetes risk screening education",
      "Workplace nutrition workshops",
      "Employee wellness lunch & learns",
      "Customized resource materials",
      "Follow-up consultation available",
    ],
    cta: "Get a Quote",
    featured: false,
  },
  {
    icon: Church,
    title: "Faith & Community Health Events",
    description:
      "Partnering with churches, mosques, and African community organizations to bring culturally sensitive diabetes education to where our communities already gather.",
    includes: [
      "Health education days",
      "Diabetes screening awareness",
      "Cultural food education",
      "Community health fairs",
      "Faith community partnership",
    ],
    cta: "Partner With Us",
    featured: false,
  },
  {
    icon: BookOpen,
    title: "Health Education Collaborations",
    description:
      "Collaborate on curriculum development, content creation, and educational initiatives aimed at improving diabetes outcomes in African and diaspora communities.",
    includes: [
      "Curriculum development",
      "Content partnerships",
      "Educational resource creation",
      "Media & digital collaborations",
      "Research partnerships",
    ],
    cta: "Collaborate",
    featured: false,
  },
  {
    icon: Handshake,
    title: "Community Health Partnerships",
    description:
      "Long-term partnerships with healthcare systems, nonprofits, and community organizations committed to improving health outcomes in African and diaspora communities.",
    includes: [
      "Ongoing educational programming",
      "Community ambassador programs",
      "Joint health initiatives",
      "Educational resource sharing",
      "Community outreach events",
    ],
    cta: "Start a Partnership",
    featured: false,
  },
];

const process = [
  {
    step: "01",
    title: "Reach Out",
    description:
      "Send a message through the contact form below or email us directly. Tell us what you need and how we can help.",
  },
  {
    step: "02",
    title: "Discovery Call",
    description:
      "We'll schedule a brief call to understand your goals, your background, and how Dr. Genevieve can best serve you.",
  },
  {
    step: "03",
    title: "Personalized Plan",
    description:
      "We'll design a customized education or coaching plan that fits your life, your culture, and your health goals.",
  },
  {
    step: "04",
    title: "Start Learning",
    description:
      "Begin your journey toward better health with education that actually makes sense for your life.",
  },
];

export default function WorkWithMePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Work With Dr. Genevieve
          </h1>
          <p className="text-teal-300 text-lg max-w-2xl mx-auto mb-8">
            Whether you need 1:1 education, group workshops, community events, or a speaking
            engagement — Dr. Genevieve brings culturally relevant diabetes expertise to every
            setting.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-base transition-colors shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services & Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Every service is designed to be practical, empowering, and culturally
              relevant — not generic or fear-based.
            </p>
          </div>

          {/* Featured Service */}
          <div className="mb-8">
            {services
              .filter((s) => s.featured)
              .map((service) => (
                <div
                  key={service.title}
                  className="bg-gradient-to-br from-teal-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-5">
                        <service.icon size={26} className="text-white" />
                      </div>
                      <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                        Most Popular
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-teal-300 leading-relaxed text-lg">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-5 text-lg">What&apos;s Included:</h4>
                      <ul className="space-y-3 mb-8">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                            <span className="text-teal-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
                      >
                        {service.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => !s.featured)
              .map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon size={22} className="text-teal-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.includes.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-teal-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                    {service.includes.length > 3 && (
                      <li className="text-xs text-gray-400 ml-5">
                        + {service.includes.length - 3} more
                      </li>
                    )}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-teal-200 hover:border-teal-700 hover:bg-teal-700 hover:text-white text-teal-700 font-semibold rounded-full text-sm transition-all duration-200"
                  >
                    {service.cta}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Getting Started Is Simple
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal-100 -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-5 shadow-md">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-teal-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Mail size={36} className="text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-teal-300">
              Fill out the form below or email us directly. We&apos;ll get back to you within 1–2 business days.
            </p>
          </div>

          <form className="space-y-5 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-teal-200 text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-teal-200 text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">
                Service You&apos;re Interested In *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              >
                <option value="" className="text-gray-800">Select a service</option>
                <option value="1on1" className="text-gray-800">1:1 Diabetes Education</option>
                <option value="wellness" className="text-gray-800">Wellness Coaching & Weight Management</option>
                <option value="workshop" className="text-gray-800">Community Workshop</option>
                <option value="speaking" className="text-gray-800">Speaking Engagement</option>
                <option value="corporate" className="text-gray-800">Corporate Wellness Program</option>
                <option value="faith" className="text-gray-800">Faith & Community Health Event</option>
                <option value="partnership" className="text-gray-800">Partnership / Collaboration</option>
                <option value="other" className="text-gray-800">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">
                Tell Us More
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none"
                placeholder="Share a bit about your situation, goals, or questions..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-base transition-colors shadow-lg"
            >
              Send Message
            </button>
            <p className="text-center text-teal-400 text-xs">
              Or email us directly:{" "}
              <a href="mailto:info@vievehealthwellness.com" className="text-amber-400 hover:text-amber-300 underline">
                info@vievehealthwellness.com
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
