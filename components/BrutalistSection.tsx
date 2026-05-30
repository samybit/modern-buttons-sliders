// components/BrutalistSection.tsx
export default function BrutalistSection() {
  return (
    <section className="p-8 mb-12 border-4 border-black bg-white">
      <div className="mb-8">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-black">Brutalism</h2>
        <p className="text-gray-600 font-medium mt-2">Stark, raw, and unapologetic. Features heavy borders and 0-blur shadows.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Classic Yellow Brutalist */}
        <button className="px-8 py-4 bg-yellow-400 border-4 border-black text-black font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-yellow-500 focus:outline-none">
          Submit Action
        </button>

        {/* Hot Pink Brutalist */}
        <button className="px-8 py-4 bg-pink-500 border-4 border-black text-white font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-pink-600 focus:outline-none">
          Subscribe
        </button>

        {/* Minimal White Brutalist */}
        <button className="px-8 py-4 bg-white border-4 border-black text-black font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-gray-100 focus:outline-none">
          Learn More
        </button>

        {/* Cyber-Cyan Alt-Direction Shadow */}
        <button className="px-8 py-4 bg-cyan-400 border-4 border-black text-black font-black uppercase tracking-widest shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-6px] hover:translate-y-[6px] hover:shadow-none transition-all active:bg-cyan-500 focus:outline-none">
          Connect Wallet
        </button>
      </div>

      <div className="pt-8 border-t-4 border-black">
        <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-6">Slider Control</h3>
        <input
          type="range"
          defaultValue="50"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
          [&::-webkit-slider-runnable-track]:h-6 
          [&::-webkit-slider-runnable-track]:bg-white 
          [&::-webkit-slider-runnable-track]:border-4 
          [&::-webkit-slider-runnable-track]:border-black 
          [&::-webkit-slider-runnable-track]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-8 
          [&::-webkit-slider-thumb]:h-12 
          [&::-webkit-slider-thumb]:bg-cyan-400 
          [&::-webkit-slider-thumb]:border-4 
          [&::-webkit-slider-thumb]:border-black 
          [&::-webkit-slider-thumb]:-mt-[16px] 
          [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          active:[&::-webkit-slider-thumb]:bg-yellow-400"
        />
      </div>

    </section>

  );
}