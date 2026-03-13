import { CheckCircle2 } from "lucide-react";

const learnings = [
  {
    title: "ITGC & ITAC Testing Techniques",
    description: "Master the methodology to test IT General Controls and IT Application Controls effectively.",
  },
  {
    title: "SOX Compliance Audit Procedures",
    description: "Learn step-by-step SOX audit procedures for financial reporting compliance.",
  },
  {
    title: "ISO 27001 Security Controls",
    description: "Understand information security management systems and implement security controls.",
  },
  {
    title: "COBIT Governance Principles",
    description: "Apply COBIT governance principles to align IT strategy with business objectives.",
  },
  {
    title: "SAP Audit Methodology",
    description: "Gain expertise in auditing SAP environments — access reviews, change management, and configurations.",
  },
  {
    title: "Real-World Audit Case Studies",
    description: "Work through practical audit scenarios and case studies from actual industry engagements.",
  },
];

export default function WhatYouLearn() {
  return (
    <section id="learn" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Heading */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4">
              🎯 Learning Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What You Will Learn
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              This comprehensive training equips you with practical skills and theoretical knowledge to excel in IT audit and compliance roles across industries.
            </p>

            {/* Decorative element */}
            <div className="hidden lg:block relative rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 p-8">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <div className="text-white font-semibold text-lg">Frameworks & Standards</div>
              <div className="text-slate-400 text-sm mt-1">
                Covered with hands-on practice
              </div>
            </div>
          </div>

          {/* Right - List */}
          <div className="space-y-4">
            {learnings.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 p-5 hover:border-slate-600/80 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
