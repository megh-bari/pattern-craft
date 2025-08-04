import { Pattern } from "../../types/pattern";

export const gradientsPatterns: Pattern[] = [
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
  }
];
