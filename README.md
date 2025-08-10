# Mission Control - Tailwind CSS System

This project has been fully converted to use Tailwind CSS with a comprehensive design system built on top of it.

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System Overview

### Typography Classes

Use these semantic typography classes instead of raw Tailwind text utilities:

- **Display**: `.display-xl`, `.display-l` (Fraunces font)
- **Headings**: `.heading-h1`, `.heading-h2`, `.heading-h3` (Inter font)
- **Body**: `.body-m`, `.body-s` (Inter font)
- **Labels**: `.label-s` (Inter font)
- **Code**: `.mono-code-s` (JetBrains Mono font)

### Color System

#### Neutral Colors
- `bg-neutral-canvas-light` - Off-white backgrounds
- `bg-neutral-canvas-dark` - Charcoal backgrounds
- `text-neutral-text-dark` - Dark text
- `text-neutral-text-light` - Light text
- `border-neutral-border` - Border color

#### Color Pairs
- **Pair 01** (Deep Teal + Lime): `bg-pair-01-bg-100`, `bg-pair-01-bg-200`
- **Pair 02** (Navy + Aqua): `bg-pair-02-bg-100`, `bg-pair-02-bg-200`
- **Pair 03** (Purple + Lilac): `bg-pair-03-bg-100`, `bg-pair-03-bg-200`
- **Pair 05** (Orange + Sand): `bg-pair-05-bg-100`, `bg-pair-05-bg-200`
- **Pair 06** (Amber + Yellow): `bg-pair-06-bg-100`, `bg-pair-06-bg-200`
- **Pair 07** (Emerald + Green): `bg-pair-07-bg-100`, `bg-pair-07-bg-200`

### Component Classes

#### Cards
- `.card-light` - Light card with shadow
- `.card-dark` - Dark card with shadow

#### Buttons
- `.btn-primary-light` - Light primary button
- `.btn-primary-dark` - Dark primary button
- `.btn-outline` - Outline button

#### Pattern Overlays
- `.pattern-overlay` - Base pattern overlay
- `.pattern-home`, `.pattern-rooms`, `.pattern-repairs`, etc. - Section-specific patterns

### Utility Classes

#### Border Radius
- `rounded-sm` - 8px (buttons/inputs)
- `rounded-md` - 16px (cards)
- `rounded-lg` - 20px (sheets/modals)
- `rounded-xl` - 24px (sheets/modals)

#### Shadows
- `shadow-elevation-1` - Subtle shadow
- `shadow-elevation-2` - Pronounced shadow

## 📱 Responsive Design

Use Tailwind's responsive prefixes:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🎯 Best Practices

1. **Use semantic classes first**: Prefer `.heading-h1` over `text-3xl font-bold`
2. **Leverage the color system**: Use `bg-pair-01-bg-100` instead of arbitrary colors
3. **Maintain consistency**: Use the predefined spacing, typography, and color scales
4. **Component composition**: Combine utility classes with component classes for complex layouts

## 🔧 Customization

### Adding New Colors
Add to `tailwind.config.js` in the `extend.colors` section:

```javascript
'new-color': {
  '100': '#hexcode',
  '200': '#hexcode',
}
```

### Adding New Typography
Add to `tailwind.config.js` in the `extend.fontSize` section:

```javascript
'custom-size': ['1.25rem', { lineHeight: '1.75rem' }]
```

### Adding New Components
Add to `styles/globals.css` in the `@layer components` section:

```css
.new-component {
  @apply bg-neutral-canvas-light text-neutral-text-dark p-4 rounded-md;
}
```

## 📚 Examples

### Basic Card Layout
```jsx
<div className="card-light">
  <h3 className="heading-h3 text-neutral-text-dark">Card Title</h3>
  <p className="body-m text-neutral-text-dark">Card content goes here</p>
</div>
```

### Section with Pattern Overlay
```jsx
<div className="pattern-overlay pattern-home bg-neutral-canvas-light rounded-lg p-6">
  <div className="relative z-20">
    <h2 className="heading-h2 text-neutral-text-dark">Section Title</h2>
    <p className="body-m text-neutral-text-dark">Content with pattern background</p>
  </div>
</div>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

## 🎨 Available Views

- **Tailwind Demo** - Showcases all the new Tailwind utilities
- **Guidelines** - Original brand guidelines
- **Motif System** - Design system showcase
- **Live App** - Application preview

## 🚀 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
mission-control/
├── src/
│   ├── main.tsx          # React entry point
│   └── TailwindDemo.tsx  # Tailwind showcase
├── components/            # React components
├── styles/
│   └── globals.css       # Tailwind imports + custom components
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

## 🤝 Contributing

When adding new styles:
1. Use existing Tailwind utilities when possible
2. Add custom colors to `tailwind.config.js`
3. Create component classes in `globals.css` for reusable patterns
4. Follow the established naming conventions

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/) 