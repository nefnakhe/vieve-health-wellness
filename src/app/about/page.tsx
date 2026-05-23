import type { Metadata } from "next";
import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import { Award, BookOpen, Heart, Users, ChevronRight, GraduationCap, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Genevieve Ufongene",
  description:
    "Meet Dr. Genevieve Ufongene, DNP, FNP-C — the founder of Vieve Health & Wellness and a passionate advocate for culturally relevant diabetes education for African and diaspora communities.",
};

const credentials = [
  { label: "Degree", value: "Doctor of Nursing Practice (DNP)" },
  { label: "Certification", value: "Family Nurse Practitioner (FNP-C)" },
  { label: "Specialization", value: "Diabetes Education & Prevention" },
  { label: "Community Focus", value: "African & Diaspora Communities" },
  { label: "Conference", value: "ADA Scientific Sessions Attendee" },
  { label: "Programs", value: "Community Wellness & Outreach" },
];

const values = [
  {
    icon: Heart,
    title: "Empowerment Over Fear",
    description:
      "Health education should make you feel capable and informed — not afraid or overwhelmed. Every resource we create is designed to build confidence.",
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description:
      "Your culture, your traditions, and your food are not problems to be fixed. They are strengths to be honored and worked with.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    description:
      "Every recommendation is grounded in current clinical evidence, adapted to be relevant and actionable for real African and diaspora lives.",
  },
  {
    icon: GraduationCap,
    title: "Community Education",
    description:
      "When one person learns, the whole family benefits. We teach in ways that spread naturally through households and communities.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              About the Founder
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Meet Dr. Genevieve
            </h1>
            <p className="text-teal-300 text-lg">
              A family nurse practitioner, diabetes educator, and passionate advocate for
              culturally relevant health education for African and diaspora communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photos */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-xl">
                <FadeImage
                  src="/images/team/dr-genevieve-headshot.jpg"
                  alt="Dr. Genevieve Ufongene, DNP, FNP-C"
                  fill
                  className="object-cover object-top opacity-0 transition-opacity duration-700"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 w-full">
                    <p className="font-bold text-teal-900 text-base">
                      Dr. Genevieve Ufongene
                    </p>
                    <p className="text-gray-600 text-sm">DNP, FNP-C</p>
                    <p className="text-amber-600 text-sm font-medium mt-1">
                      Founder, Vieve Health & Wellness
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg">
                  <FadeImage
                    src="/images/team/dr-genevieve-ada-conference.jpg"
                    alt="Dr. Genevieve at ADA Scientific Sessions"
                    fill
                    className="object-cover opacity-0 transition-opacity duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                      ADA Conference
                    </span>
                  </div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 shadow-lg">
                  <FadeImage
                    src="/images/team/dr-genevieve-community.jpg"
                    alt="Dr. Genevieve at community health event"
                    fill
                    className="object-cover opacity-0 transition-opacity duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                      Community Health
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  Dr. Genevieve Ufongene, DNP, FNP-C is a Family Nurse Practitioner and
                  the founder of Vieve Health & Wellness — a culturally relevant diabetes
                  education platform created specifically to serve African and diaspora
                  communities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  With advanced training as a Doctor of Nursing Practice and board certification
                  as a Family Nurse Practitioner, Dr. Genevieve brings a depth of clinical
                  knowledge to every educational interaction. But what sets her apart is not
                  just her credentials — it's her unwavering commitment to making that
                  knowledge accessible, culturally relevant, and genuinely useful.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Having witnessed the gap between standard diabetes education and the lived
                  experiences of African and diaspora communities — families who need guidance
                  that honors their foods, their traditions, and their realities — Dr. Genevieve
                  founded Vieve Health & Wellness to bridge that gap.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Through the platform, she combines evidence-based clinical education with
                  practical lifestyle guidance that acknowledges jollof rice, eba, plantain,
                  and fufu not as problems, but as starting points for real conversation about
                  health.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  A regular attendee of the American Diabetes Association (ADA) Scientific
                  Sessions, Dr. Genevieve stays at the forefront of diabetes research and
                  brings the latest evidence back to her community in accessible, culturally
                  informed formats.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">{c.label}</div>
                    <div className="font-semibold text-teal-900 text-sm leading-snug">{c.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full transition-colors"
                >
                  Consultation <ChevronRight size={16} />
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-200 hover:border-teal-700 text-teal-700 font-semibold rounded-full transition-colors"
                >
                  <Mic size={16} />
                  Speaking & Media
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              The Values Behind Vieve
            </h2>
            <p className="text-gray-600 text-lg">
              Everything we do is guided by a belief that great health education should
              feel empowering, not intimidating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-teal-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop / Speaking Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              In the Community
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Education Beyond the Clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-lg">
              <FadeImage
                src="/images/team/dr-genevieve-workshop.jpg"
                alt="Dr. Genevieve at a diabetes education workshop"
                fill
                className="object-cover opacity-0 transition-opacity duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg block text-center">
                  Diabetes Education Workshops
                </span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg">
              <FadeImage
                src="/images/community/community-health-event.jpg"
                alt="Community health outreach event"
                fill
                className="object-cover opacity-0 transition-opacity duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg block text-center">
                  Community Health Outreach
                </span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950 shadow-lg">
              <FadeImage
                src="/images/team/dr-genevieve-ada-conference.jpg"
                alt="ADA Scientific Sessions"
                fill
                className="object-cover opacity-0 transition-opacity duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg block text-center">
                  ADA Scientific Sessions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Award size={40} className="text-amber-400 mx-auto mb-5" />
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Dr. Genevieve?</h2>
          <p className="text-teal-300 text-lg mb-8">
            Whether you need 1:1 education, group workshops, or a speaking engagement —
            Dr. Genevieve is ready to bring culturally relevant diabetes education to you.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-base transition-colors shadow-lg"
          >
            Work With Me <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
