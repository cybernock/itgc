import { Phone, MessageCircle, User, ArrowRight } from "lucide-react";

export default function EnrollmentContact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            📞 Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Enrollment Contact
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Ready to start? Reach out to us for enrollment and any questions
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 p-8 md:p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

            <div className="relative text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-blue-500/25">
                <User className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Sai</h3>
              <p className="text-slate-400 text-sm mb-8">Training Coordinator</p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+917331139555"
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-700/30 border border-slate-600/30 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 mb-0.5">Phone</div>
                    <div className="text-white font-semibold text-lg">7331139555</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://wa.me/917331139555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-700/30 border border-slate-600/30 hover:border-green-500/40 hover:bg-green-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 mb-0.5">WhatsApp</div>
                    <div className="text-white font-semibold text-lg">7331139555</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 ml-auto group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/917331139555?text=Hi%20Sai%2C%20I%20am%20interested%20in%20the%20ITGC%2FSOX%20Audit%20Training%20program.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl font-bold text-lg shadow-2xl shadow-green-600/25 hover:shadow-green-500/40 hover:from-green-500 hover:to-emerald-400 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp to Enroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
