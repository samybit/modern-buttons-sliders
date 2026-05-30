// components/Tactile3DSection.tsx
export default function Tactile3DSection() {
  return (
    <section className="p-8 mb-12 rounded-[3rem] bg-amber-50 border-4 border-amber-200">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-amber-900 tracking-tight">Tactile 3D</h2>
        <p className="text-amber-700 font-bold mt-2">Playful, gamified, and hyper-clickable. Uses thick bottom borders for physical compression.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center mb-12">
        {/* Primary Gamified Button */}
        <button className="px-10 py-5 rounded-2xl bg-green-400 text-green-950 font-black uppercase tracking-wide border-b-[8px] border-green-600 hover:brightness-110 active:border-b-0 active:translate-y-[8px] transition-all focus:outline-none">
          Start Lesson
        </button>

        {/* Secondary Soft Pill */}
        <button className="px-10 py-5 rounded-full bg-blue-400 text-blue-950 font-black uppercase tracking-wide border-b-[8px] border-blue-600 hover:brightness-110 active:border-b-0 active:translate-y-[8px] transition-all focus:outline-none">
          Check Score
        </button>

        {/* Danger Action */}
        <button className="px-8 py-4 rounded-xl bg-red-500 text-white font-black uppercase tracking-wide border-b-[6px] border-red-700 hover:brightness-110 active:border-b-0 active:translate-y-[6px] transition-all focus:outline-none">
          Quit
        </button>
      </div>

      <div className="pt-8 border-t-4 border-amber-200">
        <h3 className="text-2xl font-black text-amber-900 mb-6">Progress Tracker</h3>
        <input
          type="range"
          defaultValue="45"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-6 
            [&::-webkit-slider-runnable-track]:bg-amber-200 
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-runnable-track]:border-b-[4px] 
            [&::-webkit-slider-runnable-track]:border-amber-300
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-10 
            [&::-webkit-slider-thumb]:h-10 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-purple-400 
            [&::-webkit-slider-thumb]:border-b-[4px] 
            [&::-webkit-slider-thumb]:border-purple-600
            [&::-webkit-slider-thumb]:-mt-[8px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            active:[&::-webkit-slider-thumb]:border-b-0 
            active:[&::-webkit-slider-thumb]:translate-y-[4px]"
        />
      </div>
    </section>
  );
}