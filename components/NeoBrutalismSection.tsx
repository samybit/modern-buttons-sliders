// components/NeoBrutalismSection.tsx
export default function NeoBrutalismSection() {
  return (
    <section className="p-8 mb-12 bg-[#ffdeeb] border-4 border-black rounded-2xl">
      <div className="mb-10">
        <h2 className="text-5xl font-black text-black tracking-tight drop-shadow-[2px_2px_0_#fff]">Neo-Brutalism</h2>
        <p className="text-black font-bold mt-3 text-lg border-b-2 border-black inline-block pb-1">
          Playful SaaS. Cheerful pastels, thick outlines, and solid offset shadows.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Lemon Action */}
        <button className="px-8 py-3 rounded-lg bg-[#fde047] text-black font-black uppercase tracking-wide text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all focus:outline-none">
          Get Started
        </button>

        {/* Mint Secondary */}
        <button className="px-8 py-3 rounded-full bg-[#a7f3d0] text-black font-black uppercase tracking-wide text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all focus:outline-none">
          Read Docs
        </button>

        {/* White Ghost */}
        <button className="px-8 py-3 bg-white text-black font-black uppercase tracking-wide text-lg border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-gray-100 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all focus:outline-none transform -rotate-2 hover:rotate-0">
          Subscribe
        </button>
      </div>

      <div className="pt-8 border-t-4 border-black border-dashed">
        <h3 className="text-xl font-black text-black uppercase mb-6 bg-white inline-block px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000]">Volume</h3>
        <input
          type="range"
          defaultValue="60"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-6 
            [&::-webkit-slider-runnable-track]:bg-white 
            [&::-webkit-slider-runnable-track]:border-4 
            [&::-webkit-slider-runnable-track]:border-black
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:shadow-[4px_4px_0px_0px_#000]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-8 
            [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#c084fc] 
            [&::-webkit-slider-thumb]:border-4 
            [&::-webkit-slider-thumb]:border-black 
            [&::-webkit-slider-thumb]:-mt-[8px] 
            [&::-webkit-slider-thumb]:cursor-grab 
            active:[&::-webkit-slider-thumb]:cursor-grabbing
            active:[&::-webkit-slider-thumb]:bg-[#f472b6]
            [&::-webkit-slider-thumb]:shadow-[3px_3px_0px_0px_#000]"
        />
      </div>
    </section>
  );
}