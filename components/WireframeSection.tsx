// components/WireframeSection.tsx
export default function WireframeSection() {
  return (
    <section className="p-8 mb-12 bg-blue-950 font-mono text-blue-100 relative overflow-hidden border border-blue-400">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#93c5fd 1px, transparent 1px), linear-gradient(90deg, #93c5fd 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

      <div className="relative z-10 mb-10 border-b border-dashed border-blue-400 pb-4">
        <h2 className="text-3xl font-normal tracking-widest text-white uppercase">Blueprint / Wireframe</h2>
        <p className="text-blue-300 mt-2 text-sm">// v1.0.0-draft - The developer's aesthetic. Structural, unfinished, and raw.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-10 items-center mb-12">
        {/* Solid structural button */}
        <button className="px-8 py-3 bg-blue-900/50 text-white font-bold uppercase tracking-widest text-sm border-2 border-blue-400 shadow-[4px_4px_0_0_rgba(96,165,250,0.5)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all focus:outline-none">
          Deploy_Build
        </button>

        {/* Dashed placeholder button */}
        <button className="px-8 py-3 bg-transparent text-blue-200 font-bold uppercase tracking-widest text-sm border-2 border-dashed border-blue-400 hover:bg-blue-800/40 hover:border-solid transition-all focus:outline-none">
          [ Insert Component ]
        </button>

        {/* CAD Node button */}
        <button className="w-12 h-12 rounded-full bg-transparent border-2 border-cyan-300 flex items-center justify-center text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 transition-all focus:outline-none relative">
          <span className="absolute w-2 h-2 bg-cyan-300 top-[-4px] left-1/2 -translate-x-1/2"></span>
          <span className="absolute w-2 h-2 bg-cyan-300 bottom-[-4px] left-1/2 -translate-x-1/2"></span>
          <span className="absolute w-2 h-2 bg-cyan-300 left-[-4px] top-1/2 -translate-y-1/2"></span>
          <span className="absolute w-2 h-2 bg-cyan-300 right-[-4px] top-1/2 -translate-y-1/2"></span>
          +
        </button>
      </div>

      <div className="relative z-10 pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-widest">Scale_Factor</h3>
          <span className="text-xs text-blue-400">[0.0 ... 1.0]</span>
        </div>
        <input
          type="range"
          defaultValue="40"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-px 
            [&::-webkit-slider-runnable-track]:bg-blue-400 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:bg-blue-950 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-cyan-300
            [&::-webkit-slider-thumb]:-mt-[15px] 
            [&::-webkit-slider-thumb]:cursor-crosshair 
            active:[&::-webkit-slider-thumb]:bg-cyan-300"
        />
      </div>
    </section>
  );
}