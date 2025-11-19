import { Sparkles, Gamepad2, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Exclusive Titles",
    desc: "Play studio-first releases and indie gems before anyone else.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    desc: "Clubs, chats, and tournaments built right into the experience.",
  },
  {
    icon: Gamepad2,
    title: "Cross‑Play",
    desc: "Seamless gaming across devices—console, desktop, and mobile.",
  },
  {
    icon: Trophy,
    title: "Ranked & Rewards",
    desc: "Climb the ladder and unlock seasonal cosmetics and perks.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_90%_80%,rgba(217,70,239,0.15),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Built for players</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Everything you need to dive into rich worlds and competitive action.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 grid place-items-center shadow-lg shadow-cyan-500/30">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
