import { ArrowRight, Shield, Award, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Enrollments Open — Batch Starting 2nd March 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              ITGC / SOX
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Audit Training
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master IT Audit, Compliance & Governance frameworks.
            Industry-focused training on{" "}
            <span className="text-cyan-300 font-medium">ITGC</span>,{" "}
            <span className="text-blue-300 font-medium">SOX</span>,{" "}
            <span className="text-cyan-300 font-medium">ISO 27001</span>,{" "}
            <span className="text-blue-300 font-medium">COBIT</span> &{" "}
            <span className="text-cyan-300 font-medium">SAP Audit</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#concepts"
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-slate-600 rounded-2xl font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all text-center"
            >
              View Curriculum
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
              <Shield className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <div className="text-white font-bold">6+ Frameworks</div>
                <div className="text-xs text-slate-400">Covered In-Depth</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
              <Award className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-white font-bold">Real-Time</div>
                <div className="text-xs text-slate-400">Industry Scenarios</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
              <Users className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold">Online Live</div>
                <div className="text-xs text-slate-400">Google Meet</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
