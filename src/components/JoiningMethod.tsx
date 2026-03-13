import { Video, ExternalLink, Laptop, Wifi } from "lucide-react";

export default function JoiningMethod() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold tracking-wider uppercase mb-4">
            💻 How To Join
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Joining Method
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Join from anywhere — all you need is an internet connection
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Google Meet Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30">
                  <Video className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Live via Google Meet
                </h3>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  The training is conducted live online via Google Meet.
                  Interactive sessions with Q&A, screen sharing, and real-time demonstrations.
                </p>

                <a
                  href="https://meet.google.com/ume-kfve-zhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl font-semibold hover:from-green-500 hover:to-emerald-400 transition-all shadow-lg shadow-green-600/25 hover:shadow-green-500/40"
                >
                  <Video className="w-4 h-4" />
                  Join Google Meet
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="mt-3 text-xs text-slate-500 font-mono">
                  meet.google.com/ume-kfve-zhu
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="relative mt-10 pt-8 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Laptop className="w-5 h-5 text-slate-500" />
                <span className="text-sm">Laptop or Desktop with a browser</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Wifi className="w-5 h-5 text-slate-500" />
                <span className="text-sm">Stable internet connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
