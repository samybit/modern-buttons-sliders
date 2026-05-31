// components/BauhausSection.tsx
export default function BauhausSection() {
  return (
    <section className="p-8 mb-12 bg-white border-8 border-black">
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-5xl font-black text-black tracking-tighter uppercase">Bauhaus</h2>
          <h2 className="text-5xl font-black text-red-600 tracking-tighter uppercase">Style</h2>
        </div>
        <div className="flex items-end">
          <p className="text-black font-bold text-lg leading-tight uppercase border-l-4 border-blue-600 pl-4">
            Form follows function. Strict geometry, primary colors, and absolute typographical clarity.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-stretch mb-12">
        {/* Pure Red Block */}
        <button className="px-12 py-6 bg-red-600 text-white font-black uppercase tracking-widest text-xl border-r-8 border-b-8 border-black hover:bg-black hover:text-red-600 active:translate-y-2 active:border-b-0 transition-all focus:outline-none">
          Action
        </button>

        {/* Pure Yellow Block */}
        <button className="px-12 py-6 bg-yellow-400 text-black font-black uppercase tracking-widest text-xl border-r-8 border-b-8 border-black hover:bg-black hover:text-yellow-400 active:translate-y-2 active:border-b-0 transition-all focus:outline-none">
          Submit
        </button>

        {/* Pure Blue Block */}
        <button className="px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-xl border-r-8 border-b-8 border-black hover:bg-black hover:text-blue-600 active:translate-y-2 active:border-b-0 transition-all focus:outline-none">
          Reset
        </button>
      </div>

      <div className="pt-8 border-t-8 border-black grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 bg-yellow-400 p-4 border-r-8 border-black">
          <h3 className="text-2xl font-black text-black uppercase tracking-tighter">Parameter</h3>
        </div>
        <div className="col-span-12 md:col-span-8 p-4 bg-gray-100 flex items-center">
          <input
            type="range"
            defaultValue="50"
            className="w-full appearance-none bg-transparent focus:outline-none
              [&::-webkit-slider-runnable-track]:h-8 
              [&::-webkit-slider-runnable-track]:bg-black 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-8 
              [&::-webkit-slider-thumb]:h-16 
              [&::-webkit-slider-thumb]:bg-red-600 
              [&::-webkit-slider-thumb]:border-4 
              [&::-webkit-slider-thumb]:border-black
              [&::-webkit-slider-thumb]:-mt-[16px] 
              [&::-webkit-slider-thumb]:cursor-pointer 
              active:[&::-webkit-slider-thumb]:bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
}