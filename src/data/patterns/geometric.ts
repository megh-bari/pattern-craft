import { Pattern } from "../../types/pattern";

export const geometricPatterns: Pattern[] = [
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
  }
];
