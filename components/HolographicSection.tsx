// components/HolographicSection.tsx
export default function HolographicSection() {
  return (
    <section className="p-8 mb-12 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-300 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
      {/* Iridescent overlay */}
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-cyan-200 to-fuchsia-300 mix-blend-color-burn pointer-events-none"></div>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-200 via-indigo-300 to-teal-200 mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-light tracking-wide text-slate-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">Holographic</h2>
        <p className="text-slate-700 font-medium mt-2">Iridescent, shifting pastels mimicking pearls or CDs. Heavy use of mixed blend modes.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-8 items-center mb-12">
        {/* Holographic Pill */}
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 text-purple-900 font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(192,132,252,0.4),inset_0_2px_5px_rgba(255,255,255,0.9),inset_0_-2px_5px_rgba(147,197,253,0.5)] border border-white/60 hover:brightness-110 active:scale-95 transition-all duration-300 focus:outline-none">
          Reflect
        </button>

        {/* Shimmer Block */}
        <button className="px-8 py-4 rounded-xl bg-gradient-to-tr from-teal-100 via-indigo-100 to-rose-100 text-indigo-900 font-bold uppercase tracking-widest shadow-[0_8px_20px_rgba(94,234,212,0.3),inset_0_1px_3px_rgba(255,255,255,1),inset_0_-3px_8px_rgba(165,180,252,0.6)] border border-white hover:shadow-[0_10px_25px_rgba(94,234,212,0.5),inset_0_1px_3px_rgba(255,255,255,1),inset_0_-3px_8px_rgba(165,180,252,0.6)] active:scale-95 transition-all duration-300 focus:outline-none">
          Prism
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-white/60">
        <h3 className="text-lg font-bold text-slate-700 uppercase tracking-widest mb-6 drop-shadow-sm">Wavelength</h3>
        <input
          type="range"
          defaultValue="65"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-4 
            [&::-webkit-slider-runnable-track]:bg-gradient-to-r 
            [&::-webkit-slider-runnable-track]:from-pink-200 
            [&::-webkit-slider-runnable-track]:via-cyan-200 
            [&::-webkit-slider-runnable-track]:to-fuchsia-200 
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1),0_2px_4px_rgba(255,255,255,0.8)]
            [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-white/50
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-8 
            [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gradient-to-br
            [&::-webkit-slider-thumb]:from-white
            [&::-webkit-slider-thumb]:to-indigo-100
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:-mt-[9px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_4px_10px_rgba(165,180,252,0.6),inset_0_-2px_4px_rgba(192,132,252,0.3)]"
        />
      </div>
    </section>
  );
}