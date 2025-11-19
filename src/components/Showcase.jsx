import { Star, Play, ChevronRight } from "lucide-react";

const games = [
  {
    title: "Neon Rift",
    genre: "Rogue‑Lite",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Orbit 13",
    genre: "Space Sim",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1541600885-0e68b2b1a64b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Spiritbound",
    genre: "Action RPG",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Trending now</h2>
            <p className="mt-2 text-slate-400">Jump into community favorites this week.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
            View all <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div key={g.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src={g.cover} alt={g.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 p-4 flex items-center justify-between w-full">
                <div>
                  <h3 className="text-white font-semibold">{g.title}</h3>
                  <p className="text-xs text-slate-300">{g.genre}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded bg-white/10 text-white text-xs">★ {g.rating}</div>
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30">
                    <Play className="h-4 w-4" /> Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
