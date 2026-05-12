import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import SocialProofSection from "@/components/sections/SocialProofSection";
import WorkflowSplit from "@/components/sections/WorkflowSplit";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import FounderLetterSection from "@/components/sections/FounderLetterSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      
      {/* 1. Hero Section (Dark) */}
      <HeroSection />

      {/* 2. Three Pillar Feature Cards (Dark) */}
      <FeatureCards />

      {/* 3. Social Proof Section (Dark) */}
      <SocialProofSection />

      {/* 4. Workflow Block A: Faster to Market (Light) */}
      <WorkflowSplit
        id="workflow"
        tag="Faster to Market"
        emoji="⚡"
        title="Reach a state of hyperfocus"
        subtitle="Watch productivity and innovation soar for your entire team with Modozo."
        bullets={[
          "Kanban system to visualize progress from design to shipment",
          "Automate routine tasks like tracking time & action calendar",
          "Enhanced collaboration, innovation & quick reaction times"
        ]}
        image="/factory.png"
      />

      {/* 5. Workflow Block B: Improve Quality (Light) */}
      <WorkflowSplit
        reverse
        tag="Improve Quality with AI"
        emoji="🪄"
        title="Remove redundant work and errors"
        subtitle="Generate high-quality tech packs and prototypes to spot design flaws and potential issues."
        bullets={[
          "Create professional tech packs in minutes",
          "AI and 10,000+ technical sketches to Communicate clearly",
          "Automate processes and procedures with consistency"
        ]}
        image="/techpack.png"
      />

      {/* 6. Workflow Block C: Better Visibility (Light) */}
      <WorkflowSplit
        tag="Better Visibility"
        emoji="🔎"
        title="Lower your cost and increase profits"
        subtitle="Modozo provides better visibility into resource allocation and helps to optimize the use of materials and labor."
        bullets={[
          "Reduce the number of samples",
          "Quickly iterate & adapt designs based on visual feedback",
          "Easily scale with multiple product lines and variations"
        ]}
        image="/map.png"
      />

      {/* 7. Integrations Section (Dark) */}
      <IntegrationsSection />

      {/* 8. Founder Letter (Light) */}
      <FounderLetterSection />

      <Footer />
    </main>
  );
}
