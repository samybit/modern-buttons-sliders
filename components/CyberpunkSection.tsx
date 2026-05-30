// components/CyberpunkSection.tsx
export default function CyberpunkSection() {
  return (
    <section className="p-8 mb-12 border border-gray-800 bg-gray-950">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-widest uppercase">
          Cyberpunk
        </h2>
        <p className="text-cyan-400/70 font-mono mt-2 text-sm">
          High tech, low life. Neon glows, sharp edges, and pure digital aesthetic.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 items-center font-mono">
        {/* Neon Cyan */}
        <button className="relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.5),inset_0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.8),inset_0_0_15px_rgba(34,211,238,0.8)] transition-all duration-200 focus:outline-none">
          Initialize
        </button>

        {/* Matrix Green */}
        <button className="px-8 py-4 bg-black border border-green-500 text-green-500 font-bold uppercase shadow-[4px_4px_0_rgb(34,197,94)] hover:shadow-[0_0_0_rgb(34,197,94)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 focus:outline-none">
          Run_Script
        </button>

        {/* Synthwave Magenta Glow */}
        <button className="px-8 py-4 bg-fuchsia-600 border border-fuchsia-400 text-white font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(192,38,211,0.7)] hover:shadow-[0_0_25px_rgba(192,38,211,1)] hover:bg-fuchsia-500 transition-all duration-300 focus:outline-none rounded-sm">
          Overdrive
        </button>

        <div className="pt-8 border-t border-gray-800 font-mono">
          <h3 className="text-xl font-bold text-fuchsia-500 tracking-widest uppercase mb-6">Freq_Modulator</h3>
          <input
            type="range"
            defaultValue="85"
            className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-1.5 
            [&::-webkit-slider-runnable-track]:bg-cyan-900 
            [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-cyan-400 
            [&::-webkit-slider-runnable-track]:shadow-[0_0_8px_rgba(34,211,238,0.6)]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:h-10 
            [&::-webkit-slider-thumb]:bg-fuchsia-500 
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:-mt-[18px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(192,38,211,1)]"
          />
        </div>
      </div>
    </section>
  );
}