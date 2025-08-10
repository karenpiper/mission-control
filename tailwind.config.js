/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Colors
        'neutral': {
          'canvas-light': '#FAFAFA',
          'canvas-dark': '#1A1A1A',
          'text-dark': '#1A1A1A',
          'text-light': '#FAFAFA',
          'border': '#E5E5E5',
        },
        // Color Pairs
        'pair-01': {
          'bg-100': '#005641',
          'bg-200': '#00B451',
          'pattern-010': 'rgba(0, 86, 65, 0.1)',
          'border-200': 'rgba(0, 86, 65, 0.24)',
        },
        'pair-02': {
          'bg-100': '#003D73',
          'bg-200': '#00C2FF',
          'pattern-010': 'rgba(0, 61, 115, 0.1)',
          'border-200': 'rgba(0, 61, 115, 0.24)',
        },
        'pair-03': {
          'bg-100': '#6366F1',
          'bg-200': '#A5B4FC',
          'pattern-010': 'rgba(99, 102, 241, 0.1)',
          'border-200': 'rgba(99, 102, 241, 0.24)',
        },
        'pair-05': {
          'bg-100': '#FF5A1F',
          'bg-200': '#FF8A3D',
          'pattern-010': 'rgba(255, 90, 31, 0.1)',
          'border-200': 'rgba(255, 90, 31, 0.24)',
        },
        'pair-06': {
          'bg-100': '#F59E0B',
          'bg-200': '#FFD836',
          'pattern-010': 'rgba(245, 158, 11, 0.1)',
          'border-200': 'rgba(245, 158, 11, 0.24)',
        },
        'pair-07': {
          'bg-100': '#059669',
          'bg-200': '#10B981',
          'pattern-010': 'rgba(5, 150, 105, 0.1)',
          'border-200': 'rgba(5, 150, 105, 0.24)',
        },
        // Section Colors
        'section': {
          'home': {
            'bg': 'var(--section-home-bg)',
            'bg-deep': 'var(--section-home-bg-deep)',
            'pattern': 'var(--section-home-pattern)',
            'border': 'var(--section-home-border)',
          },
          'rooms': {
            'bg': 'var(--section-rooms-bg)',
            'bg-deep': 'var(--section-rooms-bg-deep)',
            'pattern': 'var(--section-rooms-pattern)',
            'border': 'var(--section-rooms-border)',
          },
          'repairs': {
            'bg': 'var(--section-repairs-bg)',
            'bg-deep': 'var(--section-repairs-bg-deep)',
            'pattern': 'var(--section-repairs-pattern)',
            'border': 'var(--section-repairs-border)',
          },
          'maintenance': {
            'bg': 'var(--section-maintenance-bg)',
            'bg-deep': 'var(--section-maintenance-bg-deep)',
            'pattern': 'var(--section-maintenance-pattern)',
            'border': 'var(--section-maintenance-border)',
          },
          'systems': {
            'bg': 'var(--section-systems-bg)',
            'bg-deep': 'var(--section-systems-bg-deep)',
            'pattern': 'var(--section-systems-pattern)',
            'border': 'var(--section-systems-border)',
          },
          'documents': {
            'bg': 'var(--section-documents-bg)',
            'bg-deep': 'var(--section-documents-bg-deep)',
            'pattern': 'var(--section-documents-pattern)',
            'border': 'var(--section-documents-border)',
          },
          'assistant': {
            'bg': 'var(--section-assistant-bg)',
            'bg-deep': 'var(--section-assistant-bg-deep)',
            'pattern': 'var(--section-assistant-pattern)',
            'border': 'var(--section-assistant-border)',
          },
          'emergency': {
            'bg': 'var(--section-emergency-bg)',
            'bg-deep': 'var(--section-emergency-bg-deep)',
            'pattern': 'var(--section-emergency-pattern)',
            'border': 'var(--section-emergency-border)',
          },
        },
        'focus-ring': 'rgba(26, 26, 26, 0.24)',
      },
      fontFamily: {
        'display': ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        'ui': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.625rem' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.125rem' }],
        '3xl': ['1.75rem', { lineHeight: '2.75rem' }],
        '4xl': ['2.25rem', { lineHeight: '3.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      fontWeight: {
        'normal': '450',
        'medium': '600',
        'bold': '700',
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'elevation-1': '0 4px 12px -2px rgba(0, 0, 0, 0.18)',
        'elevation-2': '0 12px 24px -6px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
} 