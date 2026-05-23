import type { Metadata } from "next";
import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import { Mic, BookOpen, Users, ExternalLink, Mail, ChevronRight, FlaskConical, GraduationCap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Speaking",
  description:
    "Dr. Genevieve Ufongene is available for speaking engagements, media appearances, panel discussions, and conference presentations on diabetes in African communities.",
};

const speakingTopics = [
  {
    title: "Diabetes in African Communities",
    description:
      "A comprehensive overview of why diabetes disproportionately affects African and diaspora communities, and what evidence-based, culturally relevant solutions look like.",
  },
  {
    title: "Culturally Relevant Nutrition",
    description:
      "Why standard nutrition advice fails African patients — and how culturally competent guidance produces better health outcomes and higher engagement.",
  },
  {
    title: "Understanding African Foods & Blood Sugar",
    description:
      "A practical, clinically grounded exploration of how common African staple foods affect blood glucose, with actionable guidance for patients and communities.",
  },
  {
    title: "Portion Control Without Food Elimination",
    description:
      "The evidence behind portion-based diabetes management and why culturally informed dietary guidance is more effective than restrictive food elimination.",
  },
  {
    title: "Diabetes Prevention in the Diaspora",
    description:
      "Prediabetes prevalence in African and Caribbean diaspora communities, risk factors, and community-based prevention strategies that actually work.",
  },
  {
    title: "Healthy Lifestyle Habits for African Families",
    description:
      "Practical, culturally respectful strategies for building healthy habits in African households — from the kitchen to physical activity to stress management.",
  },
  {
    title: "Closing the Cultural Gap in Diabetes Education",
    description:
      "For healthcare professionals: understanding why culturally competent diabetes education improves outcomes and how to build it into practice.",
  },
  {
    title: "Faith, Culture & Health",
    description:
      "The intersection of African faith traditions, cultural practices, and health behaviors — and how community leaders can support better health outcomes.",
  },
];

const conferencesAndEvents = [
  {
    name: "ADA Scientific Sessions",
    type: "National Conference",
    description: "American Diabetes Association annual scientific conference — one of the world's premier diabetes research events.",
    icon: FlaskConical,
  },
  {
    name: "Community Wellness Health Fairs",
    type: "Community Events",
    description: "Regular participation in African and diaspora community health fairs and wellness events across the country.",
    icon: Users,
  },
  {
    name: "Diabetes Education Conferences",
    type: "Professional Development",
    description: "Active participation in diabetes education and prevention conferences, staying current with the latest research and practice.",
    icon: GraduationCap,
  },
  {
    name: "Faith Community Health Events",
    type: "Community Outreach",
    description: "Health education events hosted through African churches, mosques, and faith communities.",
    icon: Heart,
  },
];

const mediaTypes = [
  {
    icon: Mic,
    title: "Podcast Guest",
    description: "Available for podcast interviews on diabetes, nutrition, African health, and culturally relevant wellness.",
  },
  {
    icon: BookOpen,
    title: "Articles & Publications",
    description: "Contributing expert for health publications, digital media, and community newsletters.",
  },
  {
    icon: Users,
    title: "Panel Discussions",
    description: "Panel participation on diabetes, health equity, African community wellness, and nursing practice.",
  },
  {
    icon: Mic,
    title: "Keynote Speaking",
    description: "Keynote presentations for conferences, summits, healthcare systems, and community organizations.",
  },
];

export default function MediaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Media & Speaking
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                Bringing the African Health Conversation to Every Stage
              </h1>
              <p className="text-teal-300 text-lg leading-relaxed mb-8">
                Dr. Genevieve Ufongene is a sought-after speaker, educator, and voice for
                culturally relevant diabetes education in African and diaspora communities.
                Available for conferences, podcasts, media, panels, and community events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
                >
                  Book Dr. Genevieve
                </a>
                <a
                  href="mailto:media@vievehealthwellness.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-colors"
                >
                  <Mail size={18} />
                  Media Inquiries
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-2xl">
              <FadeImage
                src="/images/team/dr-genevieve-workshop.jpg"
                alt="Dr. Genevieve speaking at an education event"
                fill
                className="object-cover opacity-0 transition-opacity duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-bold text-teal-900">Dr. Genevieve Ufongene, DNP, FNP-C</p>
                <p className="text-gray-500 text-sm">Diabetes Educator & Community Health Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Keynotes & Presentations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Speaking Topics
            </h2>
            <p className="text-gray-600 text-lg">
              Every talk is tailored to the audience and grounded in clinical evidence
              and real-world community experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {speakingTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-2 h-8 bg-amber-500 rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 mb-3 leading-snug">{topic.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Custom topics are available — all talks are tailored to your audience and event.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full transition-colors"
            >
              Request a Custom Topic <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Media Availability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How Dr. Genevieve Can Contribute
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((type) => (
              <div key={type.title} className="text-center p-6 bg-teal-50 rounded-2xl border border-teal-100">
                <div className="w-14 h-14 bg-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences & Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Events & Conferences
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Conferences Attended & Events
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {conferencesAndEvents.map((event) => (
              <div
                key={event.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                  <event.icon size={22} className="text-teal-700" />
                </div>
                <div>
                  <div className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">
                    {event.type}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{event.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              In Action
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Dr. Genevieve in the Community
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/team/dr-genevieve-headshot.jpg", label: "Professional Photo" },
              { src: "/images/team/dr-genevieve-ada-conference.jpg", label: "ADA Conference" },
              { src: "/images/team/dr-genevieve-workshop.jpg", label: "Education Workshop" },
              { src: "/images/team/dr-genevieve-community.jpg", label: "Community Outreach" },
            ].map((photo, i) => (
              <div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-md"
              >
                <FadeImage
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white text-xs font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-teal-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Mic size={36} className="text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">
              Book Dr. Genevieve
            </h2>
            <p className="text-teal-300">
              Complete the form below or email us directly at{" "}
              <a href="mailto:media@vievehealthwellness.com" className="text-amber-400 hover:underline">
                media@vievehealthwellness.com
              </a>
            </p>
          </div>

          <form className="space-y-5 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-teal-200 text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-teal-200 text-sm font-medium mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="Your organization"
                />
              </div>
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">Type of Engagement *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              >
                <option value="" className="text-gray-800">Select engagement type</option>
                <option value="keynote" className="text-gray-800">Keynote Presentation</option>
                <option value="panel" className="text-gray-800">Panel Discussion</option>
                <option value="podcast" className="text-gray-800">Podcast Interview</option>
                <option value="media" className="text-gray-800">Media / Press Appearance</option>
                <option value="workshop" className="text-gray-800">Workshop / Training</option>
                <option value="other" className="text-gray-800">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-teal-200 text-sm font-medium mb-2">Event Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none"
                placeholder="Tell us about your event — date, audience, topic preferences, format..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-base transition-colors"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
