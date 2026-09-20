import Link from 'next/link';
import { Home, Wrench, Images, Phone, Compass, ArrowRight, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#05070a] text-white overflow-hidden flex flex-col justify-between pt-16 md:pt-20">
      
      {/* Ambient FX Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ea1c24]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-700/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scan lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(255,255,255,0.05) 50%)',
          backgroundSize: '100% 4px',
          zIndex: 1,
          animation: 'scanlines 10s linear infinite',
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
      `}} />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 w-full">
        
        {/* Massive 404 Typography */}
        <div className="relative flex justify-center items-center mb-8 w-full mt-8 md:mt-0">
          {/* Background outline text */}
          <div className="absolute text-[12rem] sm:text-[15rem] md:text-[20rem] font-black tracking-tighter select-none opacity-10"
            style={{ WebkitTextStroke: '2px #ffffff', color: 'transparent' }}>
            404
          </div>
          
          {/* Foreground solid text */}
          <div className="relative text-[8rem] sm:text-[10rem] md:text-[12rem] font-black tracking-tighter select-none bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            404
          </div>
          
          {/* Center pill badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-[#ea1c24] text-white text-[10px] md:text-xs font-bold tracking-widest px-4 py-2 rounded-full uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(234,28,36,0.5)]">
              <ShieldAlert className="w-4 h-4" />
              Off-Track Detected
            </span>
          </div>
        </div>

        {/* Headline & Subtext */}
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white drop-shadow-lg">
            You've Drifted Off Course
          </h1>
          <p className="text-zinc-400 text-base md:text-xl">
            The route you're searching for doesn't exist in our Galle workshop database. Let us steer you back to the fast lane.
          </p>
        </div>

        {/* Navigation Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mb-12">
          {[
            { title: 'Workshop Showroom', desc: 'Return to our digital garage and explore our latest projects.', href: '/', icon: Home },
            { title: 'Bespoke Services', desc: 'Discover our premium automotive modification services.', href: '/services', icon: Wrench },
            { title: 'Project Gallery', desc: 'Browse through our extensive portfolio of modified vehicles.', href: '/gallery', icon: Images },
            { title: 'WhatsApp Dispatch', desc: 'Need immediate assistance? Contact our dispatch team.', href: 'https://wa.me/94777177452?text=Hello%20Carmate!%20I%20hit%20a%20404%20link%20and%20need%20assistance.', icon: Phone, external: true },
          ].map((card, i) => (
            card.external ? (
              <a key={i} href={card.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ea1c24]/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#ea1c24]/10 rounded-lg text-[#ea1c24] group-hover:bg-[#ea1c24]/20 transition-colors">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <Compass className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{card.desc}</p>
                  <span className="text-sm font-semibold text-[#ea1c24] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Engage Route <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ) : (
              <Link key={i} href={card.href} className="group flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ea1c24]/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#ea1c24]/10 rounded-lg text-[#ea1c24] group-hover:bg-[#ea1c24]/20 transition-colors">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <Compass className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{card.desc}</p>
                  <span className="text-sm font-semibold text-[#ea1c24] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Engage Route <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Link href="/" className="px-8 py-4 bg-[#ea1c24] hover:bg-[#c9181f] text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-wide shadow-[0_0_20px_rgba(234,28,36,0.3)] hover:shadow-[0_0_30px_rgba(234,28,36,0.5)] transform hover:-translate-y-1">
            <Home className="w-5 h-5" />
            Return to Workshop Home
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-white hover:bg-white/5 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-wide">
            <Wrench className="w-5 h-5" />
            Report Broken Link
          </Link>
        </div>
      </main>

      {/* Footer Signature */}
      <footer className="relative z-10 py-8 text-center border-t border-white/5 mt-auto">
        <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-widest">
          Carmate Modifications &middot; 197 Hotel Suniru Lanka, Makuluwa, Galle, Sri Lanka
        </p>
      </footer>
    </div>
  );
}
