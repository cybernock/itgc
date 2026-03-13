import { Calendar, Clock, Monitor, Video } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Start Date",
    value: "2nd March 2026",
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Clock,
    label: "Time",
    value: "9:00 AM – 10:00 AM",
    color: "from-cyan-500 to-cyan-600",
    shadow: "shadow-cyan-500/20",
  },
  {
    icon: Monitor,
    label: "Mode",
    value: "Online Training",
    color: "from-violet-500 to-violet-600",
    shadow: "shadow-violet-500/20",
  },
  {
    icon: Video,
    label: "Platform",
    value: "Google Meet",
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
];

export default function BatchDetails() {
  return (
    <section id="batch" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            📅 Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Batch Details
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Join our upcoming batch and kickstart your IT audit career
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {details.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl bg-slate-800/40 border border-slate-700/50 p-6 hover:border-slate-600/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg ${item.shadow} group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-slate-400 font-medium mb-1">{item.label}</div>
              <div className="text-xl font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
