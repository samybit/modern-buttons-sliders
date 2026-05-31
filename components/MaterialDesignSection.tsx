// components/MaterialDesignSection.tsx
export default function MaterialDesignSection() {
  return (
    <section className="p-8 mb-12 bg-gray-100 rounded shadow-md font-roboto">
      <div className="mb-10">
        <h2 className="text-3xl font-medium text-gray-800 tracking-tight">Material Design</h2>
        <p className="text-gray-600 mt-2 text-sm">Classic 2014. Physical surfaces, paper and ink, exact elevations (Z-axis shadows), and bold primary accents.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Contained Button (Indigo) */}
        <button className="px-6 py-2 rounded-sm bg-[#3f51b5] text-white font-medium uppercase tracking-wide text-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.2),0_1px_5px_0_rgba(0,0,0,0.12)] hover:bg-[#3949ab] hover:shadow-[0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.2)] active:shadow-[0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12),0_5px_5px_-3px_rgba(0,0,0,0.2)] transition-shadow duration-300 focus:outline-none">
          Elevate
        </button>

        {/* Text/Flat Button (Pink Accent) */}
        <button className="px-4 py-2 rounded-sm bg-transparent text-[#e91e63] font-medium uppercase tracking-wide text-sm hover:bg-gray-200/50 active:bg-gray-300/50 transition-colors focus:outline-none">
          Dismiss
        </button>

        {/* Floating Action Button (FAB) */}
        <button className="w-14 h-14 rounded-full bg-[#e91e63] text-white flex items-center justify-center shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] hover:bg-[#d81b60] hover:shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2),0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12)] active:shadow-[0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12),0_5px_5px_-3px_rgba(0,0,0,0.2)] transition-shadow duration-300 focus:outline-none">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
      </div>

      <div className="pt-8 border-t border-gray-300/50">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">Intensity</h3>
        <input
          type="range"
          defaultValue="30"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-1 
            [&::-webkit-slider-runnable-track]:bg-[#c5cae9] 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:h-4 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#3f51b5] 
            [&::-webkit-slider-thumb]:-mt-[6px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            active:[&::-webkit-slider-thumb]:shadow-[0_0_0_10px_rgba(63,81,181,0.16)]
            hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_8px_rgba(63,81,181,0.08)]
            transition-all"
        />
      </div>
    </section>
  );
}