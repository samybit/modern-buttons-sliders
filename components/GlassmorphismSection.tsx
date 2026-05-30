// components/GlassmorphismSection.tsx
export default function GlassmorphismSection() {
  return (
    <section className="p-8 mb-12 rounded-3xl relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      {/* Decorative background blur to emphasize the glass effect */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-white/30 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-blue-400/40 rounded-full mix-blend-overlay filter blur-2xl"></div>

      <div className="relative z-10 mb-8">
        <h2 className="text-4xl font-light tracking-wide text-white">Glassmorphism</h2>
        <p className="text-white/80 font-medium mt-2">Translucent, frosted-glass effects utilizing backdrop filters and subtle borders.</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-8 items-center">
        {/* Clear Glass */}
        <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 hover:scale-105 transition-all duration-300 focus:outline-none">
          Clear Glass
        </button>

        {/* Dark Tinted Glass */}
        <button className="px-8 py-4 rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 text-white font-semibold shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-black/30 hover:scale-105 transition-all duration-300 focus:outline-none">
          Dark Tint
        </button>

        {/* Frosted Pill */}
        <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/40 text-white font-bold tracking-wide hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 focus:outline-none">
          Frosted Pill
        </button>
      </div>
    </section>
  );
}