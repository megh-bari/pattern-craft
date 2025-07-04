import { Pattern } from "../types/pattern";

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
  // dark one
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

  // NEW GRADIENT COLORSF
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

  // GLOW ONES
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
  // glow right
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
  // glow left
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

  // glow top
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

  // PATTERNS

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
  }
,  
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
];
