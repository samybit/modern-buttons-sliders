// components/ModernFintechSection.tsx
export default function ModernFintechSection() {
  return (
    <section className="p-8 mb-12 bg-[#f6f9fc] rounded-2xl relative overflow-hidden font-sans">
      {/* Subtle Stripe-esque background slash */}
      <div className="absolute top-[-50%] right-[-10%] w-[120%] h-[100%] bg-white transform rotate-12 pointer-events-none opacity-50 drop-shadow-xl"></div>

      <div className="relative z-10 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-[#32325d]">Modern FinTech</h2>
        <p className="text-[#525f7f] mt-2 font-medium text-lg">The high-converting SaaS standard. Sub-pixel shadows, highly refined typography, and pure `#f6f9fc` backgrounds.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-6 items-center mb-12">
        {/* Blurple Primary Button */}
        <button className="px-6 py-2.5 rounded-full bg-[#635bff] text-white font-semibold text-sm shadow-[0_4px_14px_0_rgb(99,91,255,0.39)] hover:bg-[#5851de] hover:shadow-[0_6px_20px_rgb(99,91,255,0.23)] active:bg-[#4d47c4] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none">
          Start payment
        </button>

        {/* Secondary Clean Button */}
        <button className="px-6 py-2.5 rounded-full bg-white text-[#32325d] font-semibold text-sm shadow-[0_2px_5px_rgba(0,0,0,0.04),0_1px_1px_rgba(0,0,0,0.02)] border border-[#e6ebf1] hover:shadow-[0_4px_10px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:text-[#635bff] transition-all duration-200 focus:outline-none">
          View API Docs
        </button>

        {/* Muted Text Link */}
        <button className="px-4 py-2.5 bg-transparent text-[#525f7f] font-semibold text-sm hover:text-[#32325d] transition-colors focus:outline-none flex items-center gap-1 group">
          Contact sales
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 pt-8 border-t border-[#e6ebf1]">
        <h3 className="text-sm font-bold text-[#525f7f] mb-6">Investment Allocation</h3>
        <input
          type="range"
          defaultValue="50"
          className="w-full md:w-96 appearance-none bg-transparent focus:outline-none
            [&::-webkit-slider-runnable-track]:h-1.5 
            [&::-webkit-slider-runnable-track]:bg-[#e6ebf1] 
            [&::-webkit-slider-runnable-track]:rounded-full 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#e6ebf1]
            [&::-webkit-slider-thumb]:-mt-[7px] 
            [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_2px_5px_rgba(0,0,0,0.15)]
            hover:[&::-webkit-slider-thumb]:shadow-[0_3px_8px_rgba(0,0,0,0.2)]
            active:[&::-webkit-slider-thumb]:border-[#635bff]
            transition-all"
        />
      </div>
    </section>
  );
}