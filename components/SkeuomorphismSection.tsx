// components/SkeuomorphismSection.tsx
export default function SkeuomorphismSection() {
  return (
    <section className="p-8 mb-12 rounded-lg bg-slate-200 border border-slate-300 shadow-inner">
      <div className="mb-10">
        <h2 className="text-4xl font-serif text-slate-800 drop-shadow-sm">Skeuomorphism</h2>
        <p className="text-slate-600 mt-2">The Web 2.0 era. Glossy gradients, bevels, inner highlights, and physical realism.</p>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        {/* The Classic Mac/iOS Gloss */}
        <button className="px-6 py-2 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 text-white font-bold shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_2px_1px_rgba(255,255,255,0.6),inset_0_-2px_1px_rgba(0,0,0,0.2)] border border-blue-800 hover:from-blue-300 hover:to-blue-600 active:from-blue-800 active:to-blue-500 active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6)] focus:outline-none transition-all">
          Save Changes
        </button>

        {/* The 2008 Web App Button */}
        <button className="px-8 py-3 rounded bg-gradient-to-b from-green-300 to-green-600 text-white font-bold text-lg shadow-[0_3px_5px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.2)] border border-green-700 hover:from-green-200 hover:to-green-500 active:bg-green-700 active:bg-none active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.5)] focus:outline-none transition-all">
          Download Now
        </button>

        {/* Warning/Danger Beveled Button */}
        <button className="px-6 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-800 text-white font-bold shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_2px_2px_rgba(255,255,255,0.4)] border border-red-900 hover:from-red-400 hover:to-red-700 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.7)] focus:outline-none transition-all">
          Delete
        </button>
      </div>
    </section>
  );
}