# Contributing to Pattern Craft

Welcome and thank you for considering contributing to Pattern Craft! Your support enhances our highly optimized pattern library and improves the overall user experience.

**✨ Recent Achievements**: Pattern Craft has achieved 99.2% asset reduction, 1-1.5s load times, and $600/year hosting savings. All contributions help maintain this high performance standard.

## How to Contribute

You can contribute in multiple ways:

- Add new background patterns
- Enhance existing patterns
- Report issues or bugs
- Submit improvements to documentation

## Adding New Patterns

To expand the pattern collection:

1. **Fork** the repository on GitHub.
2. **Clone** your forked repository locally:
   ```bash
   git clone https://github.com/your-username/pattern-craft.git
   cd pattern-craft
   ```
3. **Create a new feature branch** for your pattern:
   ```bash
   git checkout -b feature/pattern-name
   ```
4. **Navigate** to the patterns directory:
   ```bash
   cd src/app/utils/patterns/
   ```
5. **Create your pattern** following the established format:
   ```typescript
   {
     id: "new-pattern-id",
     name: "Pattern Display Name",
     badge: "New",
     style: {
       background: "#fff",
       backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px)`
       backgroundSize: "96px 64px",
     },
     code: `<div className="min-h-screen w-full bg-white relative"><div className="absolute inset-0 z-0" /></div>`,
   }
   ```
6. **Test your pattern** in the development environment to ensure it renders correctly.
7. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "feat: add new pattern-name pattern"
   git push origin feature/pattern-name
   ```
8. **Create a Pull Request** against the main repository:
   - Provide a clear description of your pattern
   - Add screenshots for visual reference
   - Mention any specifics or considerations

## Pattern Categories

When creating patterns, consider organizing them into these categories:

- **Gradient** - Color transitions and blends
- **Geometric** - Grids, dots, lines, shapes  
- **Decorative** - Subtle background textures
- **Effects** - Clean and simple designs

## Pattern Structure Guidelines

### Complete Pattern Format

```typescript
{
  id: "descriptive-pattern-id",           // kebab-case, unique identifier
  name: "Human Readable Pattern Name",     // Proper case display name
  badge: "New",                           // Optional: "New", "Popular", or omit
  style: {
    background: "#ffffff",               // Base background color
    backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
    `,                                    // CSS background patterns
    backgroundSize: "96px 64px, 100% 100%", // Pattern sizing
  },
  code: `<div className="min-h-screen w-full bg-white relative">
  {/* Pattern Name Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
}
```

### Pattern Creation Best Practices

1. **ID Naming**:
   - Use kebab-case (lowercase with hyphens)
   - Be descriptive: `geometric-grid-dots` not `pattern1`
   - Include pattern type: `gradient-sunset`, `geometric-hexagon`

2. **Display Names**:
   - Use proper case: "Geometric Grid Dots"
   - Be descriptive but concise
   - Avoid technical jargon in user-facing names

3. **Performance Optimization**:
   - Use CSS gradients over images when possible
   - Avoid complex calculations in background patterns
   - Test rendering performance on slower devices
   - Keep pattern file sizes minimal

4. **Responsive Design**:
   - Use relative units (%, em, rem) where appropriate
   - Test patterns on mobile, tablet, and desktop
   - Ensure patterns scale well across screen sizes
   - Avoid fixed pixel values that break on small screens

5. **Color Guidelines**:
   - Use accessible color combinations
   - Provide sufficient contrast for overlaid text
   - Consider both light and dark theme compatibility
   - Use semantic color names in comments

6. **Code Quality**:
   - Follow TypeScript best practices
   - Include proper JSX formatting
   - Use consistent indentation (2 spaces)
   - Add comments for complex pattern logic

## Testing Checklist

Before submitting your pattern:

- [ ] Pattern renders correctly in development mode
- [ ] No console errors or warnings
- [ ] Responsive behavior verified on mobile/tablet/desktop
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Pattern ID is unique and descriptive
- [ ] Code follows established formatting
- [ ] Performance impact is minimal
- [ ] Pattern is visually distinct from existing ones

## Contribution Guidelines

- **Consistency**: Follow the existing code style and pattern structure exactly
- **Naming**: Use descriptive, kebab-case IDs and proper display names
- **Quality**: Ensure patterns are professional, visually appealing, and accessible
- **Performance**: Optimize patterns for fast rendering and minimal resource usage
- **Responsiveness**: Test patterns thoroughly across different screen sizes
- **Uniqueness**: Avoid duplicating existing patterns; add meaningful variety
- **Documentation**: Include clear, well-formatted code examples

## Development Setup

Ensure you have the following tools before starting development:

- **Node.js** (Latest LTS version recommended)
- **Yarn/NPM** for package management

## Testing Your Changes

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Verify changes across different browsers
3. Ensure no console errors or warnings are introduced

## Need Help?

If you encounter any problems or have questions during the process, feel free to open an issue or reach out for assistance.

Happy coding and thank you for contributing! 🎨
