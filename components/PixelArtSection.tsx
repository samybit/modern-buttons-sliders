// components/PixelArtSection.tsx
export default function PixelArtSection() {
  return (
    <section className="p-8 mb-12 bg-[#2b2b2b] font-mono text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-bold tracking-widest text-[#facc15] uppercase drop-shadow-[4px_4px_0_#000]">8-Bit Retro</h2>
        <p className="text-gray-300 mt-2 text-sm uppercase">Pure CSS aliasing. Stepped box-shadows create pixelated borders.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-12 items-center mb-12">
        {/* Pixel Button Red */}
        <button className="px-6 py-3 bg-[#ef4444] text-white font-bold uppercase tracking-widest text-sm
          shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.3),4px_0_0_0_#000,-4px_0_0_0_#000,0_4px_0_0_#000,0_-4px_0_0_#000,4px_4px_0_0_#000,4px_-4px_0_0_#000,-4px_4px_0_0_#000,-4px_-4px_0_0_#000]
          hover:bg-[#f87171] active:shadow-[inset_4px_4px_0_rgba(0,0,0,0.4),4px_0_0_0_#000,-4px_0_0_0_#000,0_4px_0_0_#000,0_-4px_0_0_#000,4px_4px_0_0_#000,4px_-4px_0_0_#000,-4px_4px_0_0_#000,-4px_-4px_0_0_#000] transition-none focus:outline-none">
          Player 1
        </button>

        {/* Pixel Button Blue */}
        <button className="px-6 py-3 bg-[#3b82f6] text-white font-bold uppercase tracking-widest text-sm
          shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.3),4px_0_0_0_#000,-4px_0_0_0_#000,0_4px_0_0_#000,0_-4px_0_0_#000,4px_4px_0_0_#000,4px_-4px_0_0_#000,-4px_4px_0_0_#000,-4px_-4px_0_0_#000]
          hover:bg-[#60a5fa] active:shadow-[inset_4px_4px_0_rgba(0,0,0,0.4),4px_0_0_0_#000,-4px_0_0_0_#000,0_4px_0_0_#000,0_-4px_0_0_#000,4px_4px_0_0_#000,4px_-4px_0_0_#000,-4px_4px_0_0_#000,-4px_-4px_0_0_#000] transition-none focus:outline-none">
          Player 2
        </button>
      </div>

      <div className="relative z-10 pt-10">
        <h3 className="text-lg font-bold text-[#facc15] uppercase mb-8 drop-shadow-[2px_2px_0_#000]">Difficulty</h3>
        <input
          type="range"
          defaultValue="80"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-4 
            [&::-webkit-slider-runnable-track]:bg-[#4b5563] 
            [&::-webkit-slider-runnable-track]:shadow-[2px_0_0_0_#000,-2px_0_0_0_#000,0_2px_0_0_#000,0_-2px_0_0_#000]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-6 
            [&::-webkit-slider-thumb]:h-10 
            [&::-webkit-slider-thumb]:bg-[#a8a29e] 
            [&::-webkit-slider-thumb]:-mt-[12px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.4),inset_2px_2px_0_rgba(255,255,255,0.4),2px_0_0_0_#000,-2px_0_0_0_#000,0_2px_0_0_#000,0_-2px_0_0_#000,2px_2px_0_0_#000,2px_-2px_0_0_#000,-2px_2px_0_0_#000,-2px_-2px_0_0_#000]
            active:[&::-webkit-slider-thumb]:bg-[#d6d3d1]"
        />
      </div>
    </section>
  );
}