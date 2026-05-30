// components/NeumorphismSection.tsx
export default function NeumorphismSection() {
  return (
    <section className="p-8 mb-12 rounded-3xl bg-[#e0e5ec]">
      <div className="mb-10">
        <h2 className="text-4xl font-medium text-[#4b5563] tracking-tight">Neumorphism (Soft UI)</h2>
        <p className="text-[#6b7280] mt-2">Mimicking physical plastic. Relies on exact background color matching and dual-tone shadows.</p>
      </div>

      <div className="flex flex-wrap gap-10 items-center mb-12">
        {/* Default Extruded Button */}
        <button className="px-8 py-4 rounded-2xl bg-[#e0e5ec] text-[#4b5563] font-semibold shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.5)] transition-all duration-300 focus:outline-none">
          Extruded
        </button>

        {/* Pressed / Inset Button */}
        <button className="px-8 py-4 rounded-2xl bg-[#e0e5ec] text-[#6b7280] font-semibold shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.5)] focus:outline-none cursor-default">
          Pressed State
        </button>

        {/* Floating Icon Button */}
        <button className="w-16 h-16 rounded-full bg-[#e0e5ec] text-indigo-500 flex items-center justify-center font-bold shadow-[6px_6px_10px_0_rgba(163,177,198,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.5)] active:shadow-[inset_4px_4px_6px_0_rgba(163,177,198,0.7),inset_-4px_-4px_6px_0_rgba(255,255,255,0.5)] transition-all duration-300 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="pt-8 border-t border-[#d1d9e6]">
        <h3 className="text-xl font-medium text-[#4b5563] mb-6">Volume Control</h3>
        <input
          type="range"
          defaultValue="30"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
          [&::-webkit-slider-runnable-track]:h-4 
          [&::-webkit-slider-runnable-track]:bg-[#e0e5ec] 
          [&::-webkit-slider-runnable-track]:rounded-full 
          [&::-webkit-slider-runnable-track]:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-8 
          [&::-webkit-slider-thumb]:h-8 
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[#e0e5ec] 
          [&::-webkit-slider-thumb]:-mt-[8px] 
          [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:shadow-[4px_4px_8px_rgba(163,177,198,0.7),-4px_-4px_8px_rgba(255,255,255,0.6)]
          active:[&::-webkit-slider-thumb]:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.7),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]"
        />
      </div>
    </section>
  );
}