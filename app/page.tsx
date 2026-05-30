// app/page.tsx
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
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto font-sans">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tight mb-4 text-black">The Button Archive</h1>
        <p className="text-xl text-gray-700">Exploring UI across different web design eras and philosophies.</p>
      </header>

      <BrutalistSection />
      <GlassmorphismSection />
      <NeumorphismSection />

      <CyberpunkSection />
      <SkeuomorphismSection />
      <ClaymorphismSection />

      <LiquidGlassSection />
      <Tactile3DSection />
      <RetroOsSection />

    </main>
  );
}