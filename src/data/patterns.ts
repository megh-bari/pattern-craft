import { Pattern } from "@/types/pattern";

export const gridPatterns: Pattern[] = [
  {
    id: "top-gradient-radial",
    name: "Top Gradient Radial",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-gradient-radial",
    name: "Bottom Gradient Radial",
    category: "decorative",
    badge: "New",
    description: "Radial gradient from white to purple starting from bottom",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-violet-radial",
    name: "Bottom Violet Radial",
    category: "decorative",
    badge: "New",
    description: "Rich violet from bottom - luxury feel for premium brands",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-slate-radial",
    name: "Bottom Slate Radial",
    category: "decorative",
    badge: "New",
    description: "Sophisticated slate from bottom - clean and professional",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "radial-teal-glow",
    name: "Teal Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Teal Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
      \`,
      backgroundSize: "100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "radial-pink-glow",
    name: "Pink Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Pink Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
      \`,
      backgroundSize: "100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "radial-amber-glow",
    name: "Amber Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Amber Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
      \`,
      backgroundSize: "100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "radial-emerald-glow",
    name: "Emerald Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Emerald Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
      \`,
      backgroundSize: "100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  // Dark Ones
  {
    id: "dark-horizon-glow",
    name: "Dark Horizon Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `
     radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
        {/* Dark Horizon Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
          }}
        />
        {/* Your Content/Components */}
  
      </div>`,
  },
  {
    id: "crimson-depth",
    name: "Crimson Depth",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)`,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Crimson Depth */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "emerald-void",
    name: "Emerald Void",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)`,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Emerald Void */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "violet-abyss",
    name: "Violet Abyss",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)`,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Violet Abyss */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "azure-depths",
    name: "Azure Depths",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)`,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "orchid -depths",
    name: "Orchid  Depths",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)`,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
        {/* Azure Depths */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
          }}
        />
        {/* Your Content/Components */}

      </div>`,
  },
  //top
  {
    id: "dark-horizon-glow-top",
    name: "Dark Horizon Glow Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dark Horizon Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crimson-depth-top",
    name: "Crimson Depth Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Crimson Depth */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "emerald-void-top",
    name: "Emerald Void Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Emerald Void */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "violet-abyss-top",
    name: "Violet Abyss Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Violet Abyss */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "azure-depths-top",
    name: "Azure Depths Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "orchid-depths-top",
    name: "Orchid Depths Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Orchid Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "purple-gradient-grid-right",
    name: "Purple Gradient Grid Right",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
    `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Right Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
   {/* Your Content/Components */}
</div>`,
  },

  {
    id: "purple-gradient-grid-left",
    name: "Purple Gradient Grid Left",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
    `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Left Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-strong",
    badge: "New",
    category: "geometric",
    name: "Dual Gradient Overlay",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-strong-swapped",
    name: "Dual Gradient Overlay Swapped",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Swapped Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-top",
    name: "Dual Gradient Overlay (Top)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay (Top) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-bottom",
    name: "Dual Gradient Overlay (Bottom)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay (Bottom) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "top-fade-grid",
    name: "Top Fade Grid",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
    `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      \`,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-fade-grid",
    name: "Bottom Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Bottom Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      \`,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-grid-left",
    name: "Diagonal Fade Grid Left",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Grid Background - Top Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-grid-right",
    name: "Diagonal Fade Grid Right",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Grid Background - Top Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  // New Gradient Colors
  {
    id: "dark-radial-glow",
    name: "Dark Radial Glow",
    category: "gradients",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "blue-radial-glow",
    name: "Blue Radial Glow",
    category: "gradients",
    style: {
      background: "#0f172a",
      backgroundImage:
        "radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Blue Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "purple-radial-glow",
    name: "Purple Radial Glow",
    category: "gradients",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Purple Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "emerald-radial-glow",
    name: "Emerald Radial Glow",
    category: "gradients",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Emerald Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  // Warm Backgrounds
    {
    id: "aurora-dream-corner-whispers",
    name: "Aurora Dream Corner Whispers",
    category: "effects",
    badge: "New",
    style: {
      background: "#f7eaff",
      backgroundImage: `
       radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Aurora Dream Corner Whispers */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      \`,
    }}
  />
  {/* Your content goes here */}
</div>`,
  },
  {
    id: "aurora-dream-soft-harmony",
    name: "Aurora Dream Soft Harmony",
    category: "effects",
    badge: "New",
    style: {
      background: "#f7eaff",
      backgroundImage: `
      radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Aurora Dream Soft Harmony */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      \`,
    }}
  />
  {/* Your content goes here */}
</div>`,
  },
  {
    id: "aurora-dream-diagonal-flow",
    name: "Aurora Dream Diagonal Flow",
    category: "effects",
    badge: "New",
    style: {
      background: "#f7eaff",
      backgroundImage: `
       radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Aurora Dream Diagonal Flow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
      \`,
    }}
  />
  {/* Your content goes here */}
</div>`,
  },
  {
    id: "aurora-dream-vivid-bloom",
    name: "Aurora Dream Vivid Bloom",
    category: "effects",
    badge: "New",
    style: {
      background: "#f7eaff",
      backgroundImage: `
      radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
      radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
      radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
      radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
      linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Aurora Dream Vivid Bloom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`
        radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      \`,
    }}
  />
  {/* Your content goes here */}
</div>`,
  },
  {
    id: "dreamy-sky-pink-glow",
    name: "Dreamy Sky Pink Glow",
    category: "effects",
    badge: "New",
    style: {
      background: "#fefcff",
      backgroundImage: `
      radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%), /* soft blue */
      radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)  /* soft pink */
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#fefcff] relative">
  {/* Dreamy Sky Pink Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)\`,
    }}
  />
    {/* Your Content/Components */}
</div>`,
  },
  {
    id: "beige-texture",
    name: "Warm Beige",
    category: "effects",
    badge: "New",
    style: {
      background: "#f5f5dc",
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)
      `,
    },
    code: `<div className="min-h-screen w-full bg-[#f5f5dc] relative">
  {/* Warm Beige Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "soft-warm-pastel-texture",
    name: "Soft Warm Pastel",
    category: "effects",
    style: {
      background: "#fff8f0",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),  /* soft peach */
      radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),  /* pale buttery yellow */
      radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)   /* lighter peach */
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#fff8f0] relative">
  {/* Soft Warm Pastel Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "warm-light-apricot-coral",
    name: "Warm Light Apricot & Coral",
    category: "effects",
    style: {
      background: "#fff9f5",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),  /* soft apricot */
      radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%), /* pale coral cream */
      radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)  /* light coral */
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#fff9f5] relative">
  {/* Warm Light Apricot & Coral */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "warm-pastel-coral-cream",
    name: "Warm Soft Coral & Cream",
    category: "effects",
    style: {
      background: "#fef9f7",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),  /* soft coral */
      radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),  /* pale cream */
      radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)  /* lighter coral */
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#fef9f7] relative">
  {/* Warm Soft Coral & Cream */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)\`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  // Glow Ones
  {
    id: "soft-yellow-glow",
    name: "Soft Yellow Glow",
    category: "effects",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #FFF991 0%, transparent 70%)
    `,
      opacity: 0.6,
      mixBlendMode: "multiply",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Soft Yellow Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at center, #FFF991 0%, transparent 70%)
      \`,
      opacity: 0.6,
      mixBlendMode: "multiply",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "soft-dark-yellow-glow",
    name: "Soft Dark Yellow Glow",
    category: "effects",
    badge: "New",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #ccb755 0%, transparent 70%)
    `,
      opacity: 0.6,
      mixBlendMode: "multiply",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Soft Dark Yellow Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at center, #ccb755 0%, transparent 70%)
      \`,
      opacity: 0.6,
      mixBlendMode: "multiply",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "orange-soft-glow",
    name: "Orange Soft Glow",
    category: "effects",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #FF7112, transparent)
    `,
      opacity: 0.3,
      mixBlendMode: "multiply",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Orange Soft Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at center, #FF7112, transparent)
      \`,
      opacity: 0.3,
      mixBlendMode: "multiply",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "soft-green-glow",
    name: "Soft Green Glow",
    category: "effects",
    badge: "New",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #8FFFB0, transparent)
    `,
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Soft Green Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at center, #8FFFB0, transparent)
      \`,
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  // Glow Right
  {
    id: "purple-glow-bg",
    badge: "New",
    name: "Purple Glow Right",
    category: "effects",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Purple Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top right,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "teal-glow-bg",
    name: "Teal Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(56, 193, 182, 0.5),  /* teal color */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Teal Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top right,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "warm-orange-glow-bg",
    name: "Warm Orange Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(255, 140, 60, 0.5),  /* warm orange */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Warm Orange Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top right,
          rgba(255, 140, 60, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cool-blue-glow-bg",
    name: "Cool Blue Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(70, 130, 180, 0.5),  /* steel blue */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Cool Blue Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  // Glow Left
  {
    id: "purple-glow-bg-left",
    name: "Purple Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Purple Glow Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top left,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "teal-glow-bg-left",
    name: "Teal Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(56, 193, 182, 0.5),  /* teal color */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Teal Glow Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top left,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "warm-orange-glow-bg-left",
    name: "Warm Orange Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(255, 140, 60, 0.5),  /* warm orange */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Warm Orange Glow Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top left,
          rgba(255, 140, 60, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cool-blue-glow-bg-left",
    name: "Cool Blue Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(70, 130, 180, 0.5),  /* steel blue */
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Cool Blue Glow Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top left,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  // Glow Top
  {
    id: "purple-glow-bg-top",
    name: "Purple Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Purple Glow Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top center,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "teal-glow-bg-top",
    name: "Teal Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(56, 193, 182, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Teal Glow Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top center,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "warm-orange-glow-bg-top",
    name: "Warm Orange Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(255, 140, 60, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Warm Orange Glow Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top center,
          rgba(255, 140, 60, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cool-blue-glow-bg-top",
    name: "Cool Blue Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(70, 130, 180, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<div className="min-h-screen w-full relative bg-white">
  {/* Cool Blue Glow Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: \`
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      \`,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  // Line Patterns

  {
    id: "paper-texture",
    name: "Paper Texture",
    category: "geometric",
    badge: "New",
    style: {
      background: "#faf9f6",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
      backgroundSize: "8px 8px, 32px 32px, 32px 32px",
    },
    code: `<div className="min-h-screen w-full bg-[#faf9f6] relative">
  {/* Paper Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      \`,
      backgroundSize: "8px 8px, 32px 32px, 32px 32px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-lines",
    name: "Diagonal Stripes",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Diagonal Stripes Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-light",
    name: "Diagonal Grid - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
    {/* Diagonal Grid with Light */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-light-green",
    name: "Diagonal Grid - Electric",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
    {/* Diagonal Grid with Electric Orange */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "zigzag-lightning-light",
    name: "Zigzag Lightning - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
      repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
      repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Zigzag Lightning - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board-light",
    name: "Circuit Board - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "concentric-squares-light",
    name: "Concentric Squares - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Concentric Squares - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "woven-fabric-light",
    name: "Woven Fabric - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
      repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
      repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
      repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Woven Fabric - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crosshatch-art-light",
    name: "Crosshatch Art - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Crosshatch Art - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "white-grid-with-dots",
    name: "White Grid with Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* White Grid with Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "noise-texture-darker-dots",
    name: "Noise Texture (Darker Dots)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board",
    name: "Circuit Board",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Circuit Board Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#f8fafc",
      backgroundImage: \`
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "basic-grid",
    name: "Basic Grid",
    category: "geometric",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "white-sphere-grid",
    name: "White Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
     radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
   `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
 {/* White Sphere Grid Background */}
 <div
   className="absolute inset-0 z-0"
   style={{
     background: "white",
     backgroundImage: \`
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     \`,
     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
   }}
 />
    {/* Your Content/Components */}
</div>`,
  },
  {
    id: "magenta-orb-grid-light",
    name: "Magenta Orb Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
   linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
   linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
   radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
 `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
{/* Magenta Orb Grid Background */}
<div
 className="absolute inset-0 z-0"
 style={{
   background: "white",
   backgroundImage: \`
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   \`,
   backgroundSize: "40px 40px, 40px 40px, 100% 100%",
 }}
/>
  {/* Your Content/Components */}
</div>`,
  },
  // Dark versions of the patterns
  {
    id: "dark-sphere-grid",
    name: "Dark Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Sphere Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      \`,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "magenta-orb-grid",
    name: "Magenta Orb Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
      radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
    `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Magenta Orb Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      \`,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-basic-grid-slate",
    name: "Dark Basic Grid",
    category: "geometric",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Basic Grid Background - Slate 950 */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-basic-grid-faded",
    name: "Dark Basic Grid (Faded)",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Basic Grid Background - Faded */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "black-basic-grid",
    name: "Black Basic Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Black Basic Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "small-grid",
    name: "Small Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      linear-gradient(to right, #262626 1px, transparent 1px),
      linear-gradient(to bottom, #262626 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Small Grid Pattern */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "black-grid-white-dots",
    name: "Black Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Black Grid with White Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-grid-white-dots",
    name: "Dark Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Grid with White Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "dark-dotted-grid",
    name: "Dark Dotted Grid",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 40px 40px, 60px 60px",
      backgroundPosition: "0 0, 10px 10px, 30px 30px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Dotted Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 40px 40px, 60px 60px",
      backgroundPosition: "0 0, 10px 10px, 30px 30px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-white-dotted-grid",
    name: "Dark White Dotted Grid",
    category: "geometric",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
    `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Dark White Dotted Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      \`,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },

  {
    id: "dark-noise-colored-high",
    name: "Dark Noise Colored",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px, 30px 30px, 25px 25px",
      backgroundPosition: "0 0, 10px 10px, 15px 5px",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Dark Noise Colored Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      \`,
      backgroundSize: "20px 20px, 30px 30px, 25px 25px",
      backgroundPosition: "0 0, 10px 10px, 15px 5px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "matrix-green",
    name: "Matrix Green",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 4px)
    `,
      backgroundSize: "24px 24px, 24px 24px, 8px 8px",
    },
    code: `<div className="min-h-screen w-full bg-[#000000] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
         repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 4px)
      \`,
        backgroundSize: '24px 24px, 24px 24px, 8px 8px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-green-glow",
    name: "Diagonal Grid - Green Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Green Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-red/blue-glow",
    name: "Diagonal Grid - Red/Blue Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Red/Blue Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
  repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-electric erange",
    name: "Diagonal Grid - Electric Orange",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
     repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 22px)
    `,
      backgroundSize: "44px 44px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Red/Blue Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
   repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 22px)
        \`,
        backgroundSize: "44px 44px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "complex-multiplier",
    name: "Complex Multiplier",
    category: "geometric",
    badge: "New",
    style: {
      background: "#101014",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
     repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
      radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
    `,
      backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
    },
    code: `<div className="min-h-screen w-full bg-[#101014] relative text-white">
  {/* Complex Multiplier Pattern (Enhanced) */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      \`,
      backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center"
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "hexagonal-lines",
    name: "Hexagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
      repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
      repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
    `,
      backgroundSize: "44px 44px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Hexagonal Pattern with Gap */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
      \`,
      backgroundSize: "44px 44px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-synthwave",
    name: "Diagonal Grid - Synthwave",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0a0a0a",
      backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0a0a0a] relative text-white">
    {/* Diagonal Grid with Green Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
           repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },

  {
    id: "gradient-left-diagonal-lines",
    name: "Gradient Left Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, 
        rgba(0, 255, 128, 0.2) 0px, 
        rgba(0, 255, 128, 0) 2px, 
        transparent 2px, 
        transparent 25px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(45deg, 
          rgba(0, 255, 128, 0.2) 0px, 
          rgba(0, 255, 128, 0) 2px, 
          transparent 2px, 
          transparent 25px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "gradient-right-diagonal-lines",
    name: "Gradient Right Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(-45deg, 
        rgba(255, 0, 100, 0.2) 0px, 
        rgba(255, 0, 100, 0) 2px, 
        transparent 2px, 
        transparent 25px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(-45deg, 
          rgba(255, 0, 100, 0.2) 0px, 
          rgba(255, 0, 100, 0) 2px, 
          transparent 2px, 
          transparent 25px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cross-diagonal-lines",
    name: "Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "multi-cross-diagonal-lines",
    name: "Multi Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
       repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
         repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  {
    id: "variable-spacing",
    name: "Variable Spacing",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(30deg, 
        rgba(255, 100, 0, 0.1) 0, 
        rgba(255, 100, 0, 0.1) 1px, 
        transparent 1px, 
        transparent 10px,
        rgba(255, 100, 0, 0.15) 11px, 
        rgba(255, 100, 0, 0.15) 12px, 
        transparent 12px, 
        transparent 40px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Variable Spacing Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(30deg, 
          rgba(255, 100, 0, 0.1) 0, 
          rgba(255, 100, 0, 0.1) 1px, 
          transparent 1px, 
          transparent 10px,
          rgba(255, 100, 0, 0.15) 11px, 
          rgba(255, 100, 0, 0.15) 12px, 
          transparent 12px, 
          transparent 40px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  {
    id: "circuit-board-vibes",
    name: "Circuit Board Vibes",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, 
        rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, 
        transparent 1px, transparent 40px
      ),
      repeating-linear-gradient(90deg, 
        rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, 
        transparent 1px, transparent 80px
      ),
      repeating-linear-gradient(45deg, 
        rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, 
        transparent 1px, transparent 160px
      )
    `,
      backgroundSize: "80px 80px, 160px 160px, 320px 320px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Circuit Board Vibes Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, 
          rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, 
          transparent 1px, transparent 40px
        ),
        repeating-linear-gradient(90deg, 
          rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, 
          transparent 1px, transparent 80px
        ),
        repeating-linear-gradient(45deg, 
          rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, 
          transparent 1px, transparent 160px
        )
      \`,
      backgroundSize: "80px 80px, 160px 160px, 320px 320px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "zigzag-lightning-dark",
    name: "Zigzag Lightning - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
      repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
      repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Zigzag Lightning - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board-dark",
    name: "Circuit Board - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
      radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.18) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Circuit Board - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
        radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.18) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "concentric-squares-dark",
    name: "Concentric Squares - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Concentric Squares - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crosshatch-art-dark",
    name: "Crosshatch Art - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Crosshatch Art - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },

  // New Ellipse Glow Pattern
  {
    id: "aurora-midnight-glow",
    name: "Aurora Midnight Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* X Organizations Black Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
       background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "crimson-shadow-glow",
    name: "Crimson Shadow Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Crimson Shadow Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "emerald-depths-glow",
    name: "Emerald Depths Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Emerald Depths Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "violet-storm-glow",
    name: "Violet Storm Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Violet Storm Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "golden-horizon-glow",
    name: "Golden Horizon Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Golden Horizon Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "ocean-abyss-glow",
    name: "Ocean Abyss Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Ocean Abyss Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "rose-twilight-glow",
    name: "Rose Twilight Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Rose Twilight Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "copper-forge-glow",
    name: "Copper Forge Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Copper Forge Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "arctic-lights-glow",
    name: "Arctic Lights Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Arctic Lights Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "indigo-cosmos-glow",
    name: "Indigo Cosmos Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Indigo Cosmos Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "pearl-mist-glow",
    name: "Pearl Mist Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Pearl Mist Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "magenta-nebula-glow",
    name: "Magenta Nebula Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000",
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Magenta Nebula Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "morning-haze",
    name: "Morning Haze",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
        radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
      `,
    },
    code: `<div className="min-h-screen w-full bg-white relative">
    {/* Morning Haze */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: \`
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        \`,
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "midnight-mist",
    name: "Midnight Mist",
    category: "effects",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
        radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
        radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
      `,
    },
    code: `<div className="min-h-screen w-full bg-black relative">
    {/* Midnight Mist */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: \`
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        \`,
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "prismatic-aurora-burst",
    name: "Prismatic Aurora Burst",
    category: "gradients",
    badge: "New",
    style: {
      background: `
        radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
        radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
        radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
        radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
        #000000
      `,
    },
    code: `<div className="min-h-screen w-full relative bg-black">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: \`
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        \`,
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "cosmic-aurora",
    name: "Cosmic Aurora",
    category: "effects",
    badge: "New",
    style: {
      background: "#0a0a0a",
      backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
    },
    code: `<div className="min-h-screen w-full bg-[#0a0a0a] relative">
  {/* Cosmic Aurora */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "pastel-wave",
    name: "Pastel Wave",
    category: "effects",
    badge: "New",
    style: {
      background:
        "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Pastel Wave */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)"
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "midnight-ember",
    name: "Midnight Ember",
    category: "effects",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse at center, #3d2914 0%, #2a1810 30%, #1a0f0a 60%, #0d0806 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
    {/* Midnight Ember */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse at center, #3d2914 0%, #2a1810 30%, #1a0f0a 60%, #0d0806 100%)"
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "deep-ocean-glow",
    name: "Deep Ocean Glow",
    category: "effects",
    badge: "New",
    style: {
      background:
      "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
    {/* Deep Ocean Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
         "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)"
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "cosmic-noise",
    name: "Cosmic Noise",
    category: "effects",
    badge: "New",
    style: {
      background:
        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Cosmic Noise */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)"
    }}
  />
  {/* Your Content/Components */}
</div>`,
},
{
  id: "crimson-core-glow",
  name: "Crimson Core Glow",
  category: "effects",
  badge: "New",
  style: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
  },
  code: `<div className="min-h-screen w-full bg-black relative">
  {/* Crimson Core Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
         "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
    }}
  />
  {/* Soft vignette to blend edges */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
      opacity: 0.95,
    }}
  />
  {/* Your Content/Components */}
</div>`,
}
];