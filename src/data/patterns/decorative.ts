import { Pattern } from "../../types/pattern";

export const decorativePatterns: Pattern[] = [
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
  }
];
