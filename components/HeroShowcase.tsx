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
import BauhausSection from "./BauhausSection";
import WireframeSection from "./WireframeSection";
import MaterialDesignSection from "./MaterialDesignSection";

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
  { id: "y2k", name: "Y2K Chrome", component: Y2KSection },
  { id: "bauhaus", name: "Bauhaus", component: BauhausSection },
  { id: "wireframe", name: "Blueprint", component: WireframeSection },
  { id: "material", name: "Material Design", component: MaterialDesignSection },
];

export default function HeroShowcase() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center mb-16 py-8">
      <div className="mb-10 text-center">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Design Archive Overview</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black mb-4">
          Choose Your Aesthetic.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of 15 distinct UI philosophies. Interactive, scalable, and built with Next.js 16 and Tailwind v4.
        </p>
      </div>

      {/* Compact 5-column grid for one-screen view */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {showcases.map((Item) => (
          <div
            key={Item.id}
            className="group relative h-[140px] md:h-[160px] w-full rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left scale-[0.18] sm:scale-[0.2] md:scale-[0.22] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity">
              <Item.component />
            </div>

            {/* Overlay to catch clicks (prevents messing with mini-sliders) and show a label */}
            <div className="absolute inset-0 z-10 flex items-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm md:text-base drop-shadow-md">{Item.name}</span>
            </div>

            {/* Clickable link to jump to the actual section */}
            <a href={`#${Item.id}`} className="absolute inset-0 z-20 cursor-pointer">
              <span className="sr-only">Jump to {Item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}