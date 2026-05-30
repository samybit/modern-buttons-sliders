// components/ClaymorphismSection.tsx
export default function ClaymorphismSection() {
  return (
    <section className="p-8 mb-12 rounded-[2.5rem] bg-indigo-50 border border-white/50">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-indigo-900">Claymorphism</h2>
        <p className="text-indigo-600 font-medium mt-2">Soft, friendly, and tactile. Achieved via large border radii and double inner shadows.</p>
      </div>

      <div className="flex flex-wrap gap-10 items-center">
        {/* Soft Indigo Clay */}
        <button className="px-10 py-5 rounded-3xl bg-indigo-400 text-white font-bold text-lg shadow-[8px_8px_16px_rgba(165,180,252,0.6),inset_4px_4px_8px_rgba(255,255,255,0.4),inset_-4px_-4px_8px_rgba(49,46,129,0.3)] hover:scale-105 active:scale-95 active:shadow-[4px_4px_8px_rgba(165,180,252,0.6),inset_6px_6px_10px_rgba(49,46,129,0.4),inset_-2px_-2px_6px_rgba(255,255,255,0.4)] transition-all duration-300 focus:outline-none">
          Send Message
        </button>

        {/* Fluffy Coral */}
        <button className="px-10 py-5 rounded-3xl bg-rose-400 text-white font-bold text-lg shadow-[8px_8px_16px_rgba(251,113,133,0.4),inset_4px_4px_8px_rgba(255,255,255,0.5),inset_-4px_-4px_8px_rgba(159,18,57,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none">
          Add to Cart
        </button>

        {/* Friendly Mint Pill */}
        <button className="px-12 py-4 rounded-full bg-emerald-300 text-emerald-900 font-bold text-lg shadow-[6px_6px_14px_rgba(110,231,183,0.5),inset_3px_3px_6px_rgba(255,255,255,0.6),inset_-3px_-3px_6px_rgba(6,78,59,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none">
          Confirm
        </button>
      </div>
    </section>
  );
}