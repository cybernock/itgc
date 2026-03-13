import {
  ShieldCheck,
  AppWindow,
  FileCheck2,
  Lock,
  Layers,
  Database,
  Lightbulb,
} from "lucide-react";

const concepts = [
  {
    icon: ShieldCheck,
    title: "ITGC",
    subtitle: "IT General Controls",
    description:
      "Controls over IT systems like access management, change management, backups, and IT operations.",
    color: "blue",
  },
  {
    icon: AppWindow,
    title: "ITAC",
    subtitle: "IT Application Controls",
    description:
      "Controls inside applications — input validation, processing controls, and output controls.",
    color: "cyan",
  },
  {
    icon: FileCheck2,
    title: "SOX Compliance",
    subtitle: "Sarbanes–Oxley Act",
    description:
      "Controls required for the Sarbanes–Oxley Act related to financial reporting integrity.",
    color: "violet",
  },
  {
    icon: Lock,
    title: "ISO 27001",
    subtitle: "Information Security",
    description:
      "Information Security Management System standard — risk assessment & security controls.",
    color: "emerald",
  },
  {
    icon: Layers,
    title: "COBIT",
    subtitle: "Governance Framework",
    description:
      "Governance framework for enterprise IT — aligning IT strategy with business goals.",
    color: "amber",
  },
  {
    icon: Database,
    title: "SAP Audit",
    subtitle: "SAP Environments",
    description:
      "Auditing SAP environments and related controls — user access, change management, and configurations.",
    color: "rose",
  },
  {
    icon: Lightbulb,
    title: "Real-Time Examples",
    subtitle: "Practical Scenarios",
    description:
      "Industry-driven practical scenarios and case studies from real-world audit engagements.",
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    icon: "from-blue-500 to-blue-600",
    glow: "group-hover:shadow-blue-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    icon: "from-cyan-500 to-cyan-600",
    glow: "group-hover:shadow-cyan-500/10",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    icon: "from-violet-500 to-violet-600",
    glow: "group-hover:shadow-violet-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    icon: "from-emerald-500 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/10",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
    icon: "from-amber-500 to-amber-600",
    glow: "group-hover:shadow-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20 hover:border-rose-500/40",
    icon: "from-rose-500 to-rose-600",
    glow: "group-hover:shadow-rose-500/10",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    icon: "from-orange-500 to-orange-600",
    glow: "group-hover:shadow-orange-500/10",
  },
};

export default function KeyConcepts() {
  return (
    <section id="concepts" className="relative py-20 md:py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            📚 Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Key Concepts Covered
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Comprehensive training covering the most important IT audit and compliance frameworks used in the industry
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {concepts.map((item) => {
            const c = colorMap[item.color];
            return (
              <div
                key={item.title}
                className={`group relative rounded-2xl ${c.bg} border ${c.border} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.glow}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.icon} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-0.5">{item.title}</h3>
                <p className="text-sm text-slate-400 font-medium mb-3">{item.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
