import { Menu, Gamepad2, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center shadow-lg shadow-fuchsia-500/30">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">ArcadeX</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-slate-300 hover:text-white transition-colors">Games</a>
            <a href="#community" className="text-slate-300 hover:text-white transition-colors">Community</a>
            <a href="/test" className="text-slate-300 hover:text-white transition-colors">Status</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                placeholder="Search games"
                className="pl-9 pr-3 py-2 rounded-lg bg-slate-800 text-slate-100 placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30">Sign in</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5 text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm">
              <a href="#features" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Features</a>
              <a href="#showcase" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Games</a>
              <a href="#community" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Community</a>
              <a href="/test" className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Status</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
