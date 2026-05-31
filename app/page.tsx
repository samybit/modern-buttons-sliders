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
import FrutigerAeroSection from "@/components/FrutigerAeroSection";
import PixelArtSection from "@/components/PixelArtSection";
import Y2KSection from "@/components/Y2KSection";
import BauhausSection from "@/components/BauhausSection";
import WireframeSection from "@/components/WireframeSection";
import MaterialDesignSection from "@/components/MaterialDesignSection";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-[100rem] mx-auto font-sans">

      {/* The full-screen miniature grid hero */}
      <HeroShowcase />

      <div className="border-t-2 border-dashed border-gray-300 my-12"></div>

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

        <div id="frutiger"><FrutigerAeroSection /></div>
        <div id="pixel"><PixelArtSection /></div>
        <div id="y2k"><Y2KSection /></div>

        <div id="bauhaus"><BauhausSection /></div>
        <div id="wireframe"><WireframeSection /></div>
        <div id="material"><MaterialDesignSection /></div>
      </div>

    </main>
  );
}