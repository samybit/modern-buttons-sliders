// components/HeroShowcase.tsx
import BrutalistSection from "./BrutalistSection";
import GlassmorphismSection from "./GlassmorphismSection";
import NeumorphismSection from "./NeumorphismSection";
import CyberpunkSection from "./CyberpunkSection";
import SkeuomorphismSection from "./SkeuomorphismSection";
import ClaymorphismSection from "./ClaymorphismSection";
import LiquidGlassSection from "./LiquidGlassSection";
import Tactile3DSection from "./Tactile3DSection";
import RetroOsSection from "./RetroOsSection";
import FrutigerAeroSection from "./FrutigerAeroSection";
import PixelArtSection from "./PixelArtSection";
import Y2KSection from "./Y2KSection";

const showcases = [
  { id: "brutalist", name: "Brutalist", component: BrutalistSection },
  { id: "glass", name: "Glassmorphism", component: GlassmorphismSection },
  { id: "neu", name: "Neumorphism", component: NeumorphismSection },
  { id: "cyber", name: "Cyberpunk", component: CyberpunkSection },
  { id: "skeuo", name: "Skeuomorphism", component: SkeuomorphismSection },
  { id: "clay", name: "Claymorphism", component: ClaymorphismSection },
  { id: "liquid", name: "Liquid Glass", component: LiquidGlassSection },
  { id: "tactile", name: "Tactile 3D", component: Tactile3DSection },
  { id: "retro", name: "Retro OS", component: RetroOsSection },
  { id: "frutiger", name: "Frutiger Aero", component: FrutigerAeroSection },
  { id: "pixel", name: "Pixel Art", component: PixelArtSection },
  { id: "y2k", name: "Y2K", component: Y2KSection },
];

export default function HeroShowcase() {
  return (
    <section className="mb-24">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Design Archive Overview</h2>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-6">
          Choose Your Aesthetic.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of 9 distinct UI philosophies. Interactive, scalable, and built with Next.js 16 and Tailwind v4.
        </p>
      </div>

      {/* The 3x3 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcases.map((Item) => (
          <div
            key={Item.id}
            className="group relative h-[250px] w-full rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-[1000px] h-[800px] origin-top-left scale-[0.35] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <Item.component />
            </div>

            {/* Overlay to catch clicks (prevents messing with mini-sliders) and show a label */}
            <div className="absolute inset-0 z-10 flex items-end p-6 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg drop-shadow-md">{Item.name}</span>
            </div>

            {/* Clickable link to jump to the actual section (requires adding IDs to your sections later if you want smooth scroll) */}
            <a href={`#${Item.id}`} className="absolute inset-0 z-20 cursor-pointer">
              <span className="sr-only">Jump to {Item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}