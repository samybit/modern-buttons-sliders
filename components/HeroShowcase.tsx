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
import HolographicSection from "./HolographicSection";
import AuroraSection from "./AuroraSection";
import ExtremeDarkSection from "./ExtremeDarkSection";
import NeoBrutalismSection from "./NeoBrutalismSection";
import ModernFintechSection from "./ModernFintechSection";


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
  { id: "holographic", name: "Holographic", component: HolographicSection },
  { id: "aurora", name: "Aurora Ambient", component: AuroraSection },
  { id: "extremedark", name: "Extreme Dark", component: ExtremeDarkSection },
  { id: "neobrutalism", name: "Neo-Brutalism", component: NeoBrutalismSection },
  { id: "fintech", name: "Modern FinTech", component: ModernFintechSection },
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
          A collection of 20 distinct UI philosophies. Interactive, scalable, and built with Next.js 16 and Tailwind v4.
        </p>
      </div>

      {/* Compact 5-column grid for one-screen view */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {showcases.map((Item) => (
          <a
            key={Item.id}
            href={`#${Item.id}`}
            className="group relative flex items-center justify-center h-20 md:h-24 w-full rounded-xl bg-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200/50"
          >
            {/* Miniature Preview */}
            <div className="absolute top-0 left-0 w-[1000px] h-[800px] origin-top-left scale-[0.18] md:scale-[0.22] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
              <Item.component />
            </div>

            {/* Dark Overlay & Label */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors duration-300">
              <span className="text-white font-bold text-sm md:text-base tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {Item.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}