import { Pattern } from "../../types/pattern";

export const effectsPatterns: Pattern[] = [
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
  }
];
