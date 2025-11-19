import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live multiplayer platform
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Play, connect, and compete in the new era of gaming
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              Discover exclusive titles, seamless cross‑play, and a vibrant community. Jump into fast matches or sink hours into epic adventures—all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#showcase" className="px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30">
                Browse games
              </a>
              <a href="#" className="px-5 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5">
                Start for free
              </a>
            </div>
            <div className="mt-6 text-slate-400 text-sm">
              No downloads required • Play instantly in the cloud
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
