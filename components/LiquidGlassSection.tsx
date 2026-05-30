// components/LiquidGlassSection.tsx
export default function LiquidGlassSection() {
  return (
    <section className="p-8 mb-12 rounded-3xl relative overflow-hidden bg-gradient-to-tr from-sky-400 via-teal-300 to-emerald-400 shadow-xl">
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/40 rounded-full mix-blend-overlay filter blur-3xl"></div>

      <div className="relative z-10 mb-8">
        <h2 className="text-4xl font-semibold tracking-tight text-white drop-shadow-md">Liquid Glass</h2>
        <p className="text-teal-900/80 font-medium mt-2">A 2026 evolution of frosted glass. Highly refractive, wet-looking, and tactile.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-8 items-center mb-12">
        {/* Wet Highlight Button */}
        <button className="px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 text-white font-bold shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none">
          Refract Data
        </button>

        {/* Deep Water Pill */}
        <button className="px-10 py-4 rounded-full bg-teal-900/20 backdrop-blur-2xl border-t border-white/50 border-b border-black/20 text-white font-bold shadow-[0_10px_40px_rgba(0,0,0,0.2),inset_0_3px_6px_rgba(255,255,255,0.6)] hover:bg-teal-900/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none">
          Dive In
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-white/30">
        <h3 className="text-2xl font-semibold tracking-tight text-white drop-shadow-md mb-6">Refraction Index</h3>
        <input
          type="range"
          defaultValue="60"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-3 
            [&::-webkit-slider-runnable-track]:bg-white/20 
            [&::-webkit-slider-runnable-track]:backdrop-blur-xl
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),inset_0_-1px_3px_rgba(255,255,255,0.4)]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-8 
            [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white/40 
            [&::-webkit-slider-thumb]:backdrop-blur-2xl
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/70
            [&::-webkit-slider-thumb]:-mt-[10px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_4px_10px_rgba(0,0,0,0.15),inset_0_3px_5px_rgba(255,255,255,0.9)]
            active:[&::-webkit-slider-thumb]:scale-90 transition-transform"
        />
      </div>
    </section>
  );
}