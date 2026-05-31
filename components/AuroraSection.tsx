// components/AuroraSection.tsx
export default function AuroraSection() {
  return (
    <section className="p-8 mb-12 relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl border border-slate-800">
      {/* Background glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-violet-600/30 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[40%] w-64 h-64 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-semibold tracking-tight text-white drop-shadow-md">Aurora Ambient</h2>
        <p className="text-slate-300 font-medium mt-2">Soft, bleeding light orbs behind sharp, semi-transparent dark frosted panels.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-8 items-center mb-12">
        {/* Ambient Dark Glass */}
        <button className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 focus:outline-none">
          Analyze Space
        </button>

        {/* Ambient Pill */}
        <button className="px-10 py-3 rounded-full bg-black/40 backdrop-blur-md border-t border-white/20 border-b border-black/60 text-emerald-100 font-medium tracking-wide shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:bg-black/20 hover:text-white active:scale-95 transition-all duration-300 focus:outline-none">
          Engage
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-white/10">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">Luminescence</h3>
        <input
          type="range"
          defaultValue="75"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-2 
            [&::-webkit-slider-runnable-track]:bg-slate-800/50 
            [&::-webkit-slider-runnable-track]:backdrop-blur-md
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-white/5
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-6 
            [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:-mt-[9px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(167,139,250,0.6)]
            active:[&::-webkit-slider-thumb]:scale-110 transition-transform"
        />
      </div>
    </section>
  );
}