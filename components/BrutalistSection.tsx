// components/BrutalistSection.tsx
export default function BrutalistSection() {
  return (
    <section className="p-8 mb-12 border-4 border-black bg-white">
      <div className="mb-8">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-black">Brutalism</h2>
        <p className="text-gray-600 font-medium mt-2">Stark, raw, and unapologetic. Features heavy borders and 0-blur shadows.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        {/* Classic Yellow Brutalist */}
        <button className="px-8 py-4 bg-yellow-400 border-4 border-black text-black font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-yellow-500 focus:outline-none">
          Submit Action
        </button>

        {/* Hot Pink Brutalist */}
        <button className="px-8 py-4 bg-pink-500 border-4 border-black text-white font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-pink-600 focus:outline-none">
          Subscribe
        </button>

        {/* Minimal White Brutalist */}
        <button className="px-8 py-4 bg-white border-4 border-black text-black font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-gray-100 focus:outline-none">
          Learn More
        </button>

        {/* Cyber-Cyan Alt-Direction Shadow */}
        <button className="px-8 py-4 bg-cyan-400 border-4 border-black text-black font-black uppercase tracking-widest shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-cyan-500 focus:outline-none">
          Connect Wallet
        </button>
      </div>
    </section>
  );
}