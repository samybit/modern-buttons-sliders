// components/RetroOsSection.tsx
export default function RetroOsSection() {
  return (
    <section className="p-8 mb-12 bg-[#c0c0c0] shadow-[inset_2px_2px_0px_0px_#ffffff,inset_-2px_-2px_0px_0px_#000000,inset_4px_4px_0px_0px_#dfdfdf,inset_-4px_-4px_0px_0px_#808080] font-sans">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-black tracking-tight">Retro OS</h2>
        <p className="text-black mt-2">The classic GUI layout. Rigid inset shadows, hex grays, and strictly functional components.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Standard Win95 Button */}
        <button className="px-6 py-2 bg-[#c0c0c0] text-black font-bold text-sm shadow-[inset_1px_1px_0px_1px_#ffffff,inset_-1px_-1px_0px_1px_#000000,inset_2px_2px_0px_1px_#dfdfdf,inset_-2px_-2px_0px_1px_#808080] active:shadow-[inset_1px_1px_0px_1px_#000000,inset_-1px_-1px_0px_1px_#ffffff,inset_2px_2px_0px_1px_#808080,inset_-2px_-2px_0px_1px_#dfdfdf] focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#c0c0c0] transition-none">
          OK
        </button>

        {/* Disabled State Mimic */}
        <button className="px-6 py-2 bg-[#c0c0c0] text-[#808080] font-bold text-sm shadow-[inset_1px_1px_0px_1px_#ffffff,inset_-1px_-1px_0px_1px_#000000,inset_2px_2px_0px_1px_#dfdfdf,inset_-2px_-2px_0px_1px_#808080] text-shadow-[1px_1px_0px_#ffffff] cursor-not-allowed focus:outline-none">
          Apply
        </button>
      </div>

      <div className="pt-8 border-t-2 border-[#808080] shadow-[0_2px_0_0_#ffffff]">
        <h3 className="text-lg font-bold text-black mt-4 mb-6">System Volume</h3>
        <input
          type="range"
          defaultValue="75"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-5 
            [&::-webkit-slider-runnable-track]:bg-[#c0c0c0] 
            [&::-webkit-slider-runnable-track]:shadow-[inset_1px_1px_0px_1px_#000000,inset_-1px_-1px_0px_1px_#ffffff,inset_2px_2px_0px_1px_#808080,inset_-2px_-2px_0px_1px_#dfdfdf]
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-9 
            [&::-webkit-slider-thumb]:bg-[#c0c0c0] 
            [&::-webkit-slider-thumb]:shadow-[inset_1px_1px_0px_1px_#ffffff,inset_-1px_-1px_0px_1px_#000000,inset_2px_2px_0px_1px_#dfdfdf,inset_-2px_-2px_0px_1px_#808080]
            [&::-webkit-slider-thumb]:-mt-[8px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            active:[&::-webkit-slider-thumb]:bg-[#d4d4d4]"
        />
      </div>
    </section>
  );
}