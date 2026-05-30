// components/FrutigerAeroSection.tsx
export default function FrutigerAeroSection() {
  return (
    <section className="p-8 mb-12 rounded-3xl bg-gradient-to-b from-sky-200 to-green-100 border border-white shadow-[0_10px_30px_rgba(125,211,252,0.5)]">
      <div className="mb-10">
        <h2 className="text-4xl font-light text-cyan-900 tracking-tight">Frutiger Aero</h2>
        <p className="text-cyan-800/70 font-medium mt-2">Late 2000s eco-tech optimism. Glossy textures, watery gradients, and glassy highlights.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Glossy Green Action */}
        <button className="relative px-8 py-3 rounded-full bg-gradient-to-b from-green-400 to-green-600 text-white font-bold text-lg shadow-[0_4px_10px_rgba(34,197,94,0.4),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(20,83,45,0.4)] border border-green-300 hover:brightness-110 active:shadow-[inset_0_4px_8px_rgba(20,83,45,0.6)] transition-all overflow-hidden focus:outline-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none"></div>
          Start Journey
        </button>

        {/* Glassy Blue Aero */}
        <button className="relative px-8 py-3 rounded-full bg-gradient-to-b from-sky-400 to-blue-600 text-white font-bold text-lg shadow-[0_4px_10px_rgba(56,189,248,0.4),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(30,58,138,0.5)] border border-sky-300 hover:brightness-110 active:shadow-[inset_0_4px_8px_rgba(30,58,138,0.6)] transition-all overflow-hidden focus:outline-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-full pointer-events-none"></div>
          Explore
        </button>
      </div>

      <div className="pt-8 border-t border-white/50">
        <h3 className="text-xl font-medium text-cyan-900 mb-6 drop-shadow-sm">Aero Slider</h3>
        <input
          type="range"
          defaultValue="60"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-5 
            [&::-webkit-slider-runnable-track]:bg-gradient-to-b 
            [&::-webkit-slider-runnable-track]:from-sky-300 
            [&::-webkit-slider-runnable-track]:to-blue-400 
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)]
            [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-sky-500
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-8 
            [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gradient-to-b
            [&::-webkit-slider-thumb]:from-white
            [&::-webkit-slider-thumb]:to-slate-200
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-sky-400
            [&::-webkit-slider-thumb]:-mt-[7px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_2px_5px_rgba(0,0,0,0.3),inset_0_-2px_2px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
}