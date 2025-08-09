import React from 'react';
import { X, Home } from 'lucide-react';

export const LogosSection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--info-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-systems" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-white mb-4">
              Logo System
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Primary lockups, alternates, clearspace rules, and usage guidelines. 
              Our logo is the cornerstone of our visual identity and must be treated with care and consistency.
            </p>
          </div>

          {/* Primary Lockups */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Primary Logo Lockups</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Color Version */}
              <div className="text-center">
                <div className="bg-neutral-surface p-12 rounded-xl mb-6">
                  <div 
                    className="w-64 h-32 mx-auto rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                  >
                    <div className="font-display text-3xl font-medium text-white">
                      Mission Control
                    </div>
                  </div>
                </div>
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">Primary Color Lockup</h4>
                <p className="body-m text-neutral-text-dark/70 mb-4">
                  Use on white, light gray, or neutral backgrounds. Maintains full brand impact.
                </p>
                <div className="space-y-2">
                  <p className="body-s text-neutral-text-dark/60">Minimum size: 120px wide (digital)</p>
                  <p className="body-s text-neutral-text-dark/60">Minimum size: 30mm wide (print)</p>
                </div>
              </div>

              {/* Monochrome Version */}
              <div className="text-center">
                <div className="bg-neutral-surface p-12 rounded-xl mb-6">
                  <div className="w-64 h-32 mx-auto bg-neutral-text-dark rounded-lg flex items-center justify-center">
                    <div className="font-display text-3xl font-medium text-white">
                      Mission Control
                    </div>
                  </div>
                </div>
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">Monochrome Lockup</h4>
                <p className="body-m text-neutral-text-dark/70 mb-4">
                  Use when color reproduction is limited or on complex backgrounds.
                </p>
                <div className="space-y-2">
                  <p className="body-s text-neutral-text-dark/60">Available in black and white versions</p>
                  <p className="body-s text-neutral-text-dark/60">Same minimum size requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternate Versions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-light">
              <h4 className="heading-h2 mb-6 text-neutral-text-dark">Horizontal Layout</h4>
              <div className="bg-neutral-surface p-8 rounded-lg mb-4">
                <div 
                  className="h-16 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                >
                  <span className="font-display text-lg font-medium text-white">Mission Control</span>
                </div>
              </div>
              <p className="body-s text-neutral-text-dark/70">For wide layouts, headers, and horizontal applications.</p>
            </div>

            <div className="card-light">
              <h4 className="heading-h2 mb-6 text-neutral-text-dark">Stacked Layout</h4>
              <div className="bg-neutral-surface p-8 rounded-lg mb-4 flex justify-center">
                <div 
                  className="w-24 h-24 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                >
                  <div className="font-display text-sm font-medium text-white text-center leading-tight">
                    Mission<br/>Control
                  </div>
                </div>
              </div>
              <p className="body-s text-neutral-text-dark/70">For square formats, social media, and compact spaces.</p>
            </div>

            <div className="card-light">
              <h4 className="heading-h2 mb-6 text-neutral-text-dark">Mark Only</h4>
              <div className="bg-neutral-surface p-8 rounded-lg mb-4 flex justify-center">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                >
                  <Home className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="body-s text-neutral-text-dark/70">Icon-only version for very small applications and favicons.</p>
            </div>
          </div>

          {/* Logo Misuse */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Logo Misuse - Never Do These</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-neutral-surface p-6 rounded-lg mb-3 relative">
                  <div 
                    className="w-20 h-10 mx-auto rounded flex items-center justify-center transform rotate-12"
                    style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                  >
                    <span className="font-display text-xs font-medium text-white">Logo</span>
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-danger-bg flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70">Don't rotate</p>
              </div>

              <div className="text-center">
                <div className="bg-neutral-surface p-6 rounded-lg mb-3 relative">
                  <div 
                    className="w-20 h-6 mx-auto rounded flex items-center justify-center"
                    style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                  >
                    <span className="font-display text-xs font-medium text-white">Logo</span>
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-danger-bg flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70">Don't stretch</p>
              </div>

              <div className="text-center">
                <div className="bg-neutral-surface p-6 rounded-lg mb-3 relative">
                  <div 
                    className="w-20 h-10 mx-auto rounded flex items-center justify-center"
                    style={{ backgroundColor: '#00ff00' }}
                  >
                    <span className="font-display text-xs font-medium text-black">Logo</span>
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-danger-bg flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70">Don't change colors</p>
              </div>

              <div className="text-center">
                <div className="bg-neutral-surface p-6 rounded-lg mb-3 relative">
                  <div 
                    className="w-20 h-10 mx-auto rounded flex items-center justify-center shadow-xl"
                    style={{ 
                      backgroundColor: 'var(--brand-primary-bg)',
                      filter: 'drop-shadow(0 0 10px rgba(255, 78, 154, 0.5))'
                    }}
                  >
                    <span className="font-display text-xs font-medium text-white">Logo</span>
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-danger-bg flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70">Don't add effects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};