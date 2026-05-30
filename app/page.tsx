// app/page.tsx
import HeroShowcase from "@/components/HeroShowcase";
import BrutalistSection from "@/components/BrutalistSection";
import GlassmorphismSection from "@/components/GlassmorphismSection";
import NeumorphismSection from "@/components/NeumorphismSection";
import CyberpunkSection from "@/components/CyberpunkSection";
import SkeuomorphismSection from "@/components/SkeuomorphismSection";
import ClaymorphismSection from "@/components/ClaymorphismSection";
import LiquidGlassSection from "@/components/LiquidGlassSection";
import Tactile3DSection from "@/components/Tactile3DSection";
import RetroOsSection from "@/components/RetroOsSection";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-7xl mx-auto font-sans">

      {/* The new miniature grid hero */}
      <HeroShowcase />

      <div className="border-t-2 border-dashed border-gray-300 my-16"></div>

      {/* The full-sized interactive sections */}
      <div className="space-y-24">
        <div id="brutalist"><BrutalistSection /></div>
        <div id="glass"><GlassmorphismSection /></div>
        <div id="neu"><NeumorphismSection /></div>

        <div id="cyber"><CyberpunkSection /></div>
        <div id="skeuo"><SkeuomorphismSection /></div>
        <div id="clay"><ClaymorphismSection /></div>

        <div id="liquid"><LiquidGlassSection /></div>
        <div id="tactile"><Tactile3DSection /></div>
        <div id="retro"><RetroOsSection /></div>
      </div>

    </main>
  );
}