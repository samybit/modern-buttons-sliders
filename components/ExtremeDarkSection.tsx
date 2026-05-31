// components/ExtremeDarkSection.tsx
export default function ExtremeDarkSection() {
  return (
    <section className="p-8 mb-12 bg-black border border-[#1a1a1a] relative overflow-hidden">
      {/* Optional grainy texture overlay (CSS noise simulation) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-black tracking-tighter text-red-600 uppercase">Void / Vampire</h2>
        <p className="text-[#666666] font-mono mt-2 text-sm">Pure absolute black. Blood red accents, sub-pixel borders, hostile minimalism.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-10 items-center mb-12 font-mono">
        {/* Hollow Red */}
        <button className="px-8 py-3 bg-black text-red-600 font-bold uppercase tracking-widest text-sm border border-red-900 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] active:bg-red-950 transition-all focus:outline-none">
          Terminate
        </button>

        {/* Filled Crimson */}
        <button className="px-8 py-3 bg-red-700 text-black font-black uppercase tracking-widest text-sm hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] active:translate-y-[2px] transition-all focus:outline-none">
          Execute
        </button>

        {/* Ghost Line */}
        <button className="px-8 py-3 bg-transparent text-[#444444] font-bold uppercase tracking-widest text-sm border-b border-[#333333] hover:text-white hover:border-white transition-all focus:outline-none">
          Bypass
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-[#1a1a1a] font-mono">
        <h3 className="text-xs font-bold text-red-700 uppercase tracking-widest mb-6">Intensity_Curve</h3>
        <input
          type="range"
          defaultValue="85"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-px 
            [&::-webkit-slider-runnable-track]:bg-[#333333] 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:bg-black 
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-red-600
            [&::-webkit-slider-thumb]:-mt-[11px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            hover:[&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(220,38,38,0.5)]
            active:[&::-webkit-slider-thumb]:bg-red-600"
        />
      </div>
    </section>
  );
}