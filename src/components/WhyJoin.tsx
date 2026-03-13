import { Briefcase, Clapperboard, Footprints, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Industry-Oriented Training",
    description:
      "Curriculum designed to match real industry requirements and current market demands in IT audit.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Clapperboard,
    title: "Practical Real-Time Scenarios",
    description:
      "Learn through live demonstrations, real audit walkthroughs, and hands-on exercises.",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Footprints,
    title: "Step-by-Step Guidance",
    description:
      "Structured learning path from fundamentals to advanced topics — no prior experience needed.",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: HeartHandshake,
    title: "Career-Focused Support",
    description:
      "Get guidance on career paths, certifications, interview preparation, and resume building.",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export default function WhyJoin() {
  return (
    <section id="why" className="relative py-20 md:py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold tracking-wider uppercase mb-4">
            ⭐ Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Why Join This Training
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Stand out with practical knowledge and industry-ready skills
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-slate-800/30 border border-slate-700/50 p-8 hover:border-slate-600/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-800/60 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
