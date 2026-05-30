// components/Y2KSection.tsx
export default function Y2KSection() {
  return (
    <section className="p-8 mb-12 bg-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden rounded-[2rem]">
      <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Y2K Chrome
        </h2>
        <p className="text-slate-400 font-bold mt-2 text-sm tracking-wide">Web 1.5. Metallic pill shapes, chrome gradients, and cyber-optimism.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-8 items-center mb-12">
        {/* Chrome Pill Button */}
        <button className="px-10 py-3 rounded-full bg-gradient-to-b from-slate-200 via-slate-400 to-slate-300 text-slate-900 font-black italic uppercase tracking-widest shadow-[0_5px_15px_rgba(0,0,0,0.8),inset_0_2px_1px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(71,85,105,0.8)] border border-slate-400 hover:brightness-125 active:shadow-[inset_0_4px_10px_rgba(71,85,105,0.9)] transition-all focus:outline-none">
          Download
        </button>

        {/* Hot Pink Metallic */}
        <button className="px-10 py-3 rounded-full bg-gradient-to-b from-pink-300 via-fuchsia-500 to-pink-600 text-white font-black italic uppercase tracking-widest shadow-[0_5px_15px_rgba(0,0,0,0.8),inset_0_2px_1px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(131,24,67,0.8)] border border-pink-400 hover:brightness-110 active:shadow-[inset_0_4px_10px_rgba(131,24,67,0.9)] transition-all focus:outline-none">
          Enter Site
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-slate-700">
        <h3 className="text-lg font-black italic text-slate-300 uppercase tracking-widest mb-6">Bandwidth</h3>
        <input
          type="range"
          defaultValue="40"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-6 
            [&::-webkit-slider-runnable-track]:bg-gradient-to-b 
            [&::-webkit-slider-runnable-track]:from-slate-700 
            [&::-webkit-slider-runnable-track]:to-slate-900 
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.2)]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-10 
            [&::-webkit-slider-thumb]:h-10 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gradient-to-b
            [&::-webkit-slider-thumb]:from-slate-100
            [&::-webkit-slider-thumb]:via-slate-300
            [&::-webkit-slider-thumb]:to-slate-400
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-slate-400
            [&::-webkit-slider-thumb]:-mt-[8px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_3px_10px_rgba(0,0,0,0.7),inset_0_2px_2px_rgba(255,255,255,0.9)]"
        />
      </div>
    </section>
  );
}