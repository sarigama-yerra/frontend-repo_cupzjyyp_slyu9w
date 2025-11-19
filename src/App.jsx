import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(800px_400px_at_100%_100%,rgba(217,70,239,0.08),transparent)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Showcase />

        <footer className="border-t border-white/10 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ArcadeX. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm">
                <a className="text-slate-400 hover:text-white" href="#community">Community</a>
                <a className="text-slate-400 hover:text-white" href="#features">Features</a>
                <a className="text-slate-400 hover:text-white" href="/test">Status</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App