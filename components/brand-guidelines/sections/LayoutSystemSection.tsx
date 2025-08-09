import React from 'react';
import { CheckCircle, XCircle, Monitor, Tablet, Smartphone } from 'lucide-react';

export const LayoutSystemSection: React.FC = () => {
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
              Layout System
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              12-column grid system, 8-point spacing scale, elevation guidelines, and composition rules. 
              Bold layouts that maximize motif color coverage while maintaining readability.
            </p>
          </div>

          {/* Grid System */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Grid System</h3>
            <div className="space-y-8">
              {/* Desktop Grid */}
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Desktop Grid (1200px+)</h4>
                <div className="bg-neutral-surface p-6 rounded-xl">
                  <div className="grid grid-cols-12 gap-4 mb-4">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="bg-info-soft h-12 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-neutral-text-dark">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">12 Columns</p>
                      <p className="body-s text-neutral-text-dark/70">Flexible layout options</p>
                    </div>
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">16px Gutters</p>
                      <p className="body-s text-neutral-text-dark/70">Consistent spacing</p>
                    </div>
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">1400px Max Width</p>
                      <p className="body-s text-neutral-text-dark/70">Content container</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Breakpoints */}
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Responsive Breakpoints</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-neutral-surface rounded-lg text-center">
                    <Monitor className="w-8 h-8 mx-auto mb-3 text-neutral-text-dark" />
                    <p className="body-m text-neutral-text-dark font-medium">Desktop</p>
                    <p className="body-s text-neutral-text-dark/70">1200px+ • 12 columns</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg text-center">
                    <Tablet className="w-8 h-8 mx-auto mb-3 text-neutral-text-dark" />
                    <p className="body-m text-neutral-text-dark font-medium">Tablet</p>
                    <p className="body-s text-neutral-text-dark/70">768-1199px • 6 columns</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg text-center">
                    <Smartphone className="w-8 h-8 mx-auto mb-3 text-neutral-text-dark" />
                    <p className="body-m text-neutral-text-dark font-medium">Mobile</p>
                    <p className="body-s text-neutral-text-dark/70">Below 768px • 1 column</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing Scale */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">8-Point Spacing Scale</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">4px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Micro spacing, tight elements</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">8px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Small gaps, icon spacing</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">16px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Standard spacing, card padding</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">24px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Section spacing, large gaps</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">32px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Component separation</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">48px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Major section breaks</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-4 bg-white/40" />
                  <div>
                    <span className="body-m text-neutral-text-light font-medium">64px</span>
                    <span className="body-s text-neutral-text-light/70 ml-2">Page section dividers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Elevation System</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-3 text-neutral-text-light">Level 1 - Subtle</h4>
                  <div className="bg-white p-4 rounded-lg elevation-1">
                    <p className="body-m text-neutral-text-dark">Cards, panels, gentle separation</p>
                    <code className="mono-code-s text-neutral-text-dark/60">0 4px 12px -2px @ 18%</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-3 text-neutral-text-light">Level 2 - Moderate</h4>
                  <div className="bg-white p-4 rounded-lg elevation-2">
                    <p className="body-m text-neutral-text-dark">Modals, dropdowns, floating elements</p>
                    <code className="mono-code-s text-neutral-text-dark/60">0 12px 24px -6px @ 20%</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-3 text-neutral-text-light">Level 3 - Strong</h4>
                  <div className="bg-white p-4 rounded-lg" style={{ boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.25)' }}>
                    <p className="body-m text-neutral-text-dark">Overlays, tooltips, high priority</p>
                    <code className="mono-code-s text-neutral-text-dark/60">0 24px 48px -12px @ 25%</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Composition Rules */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Page Composition Rules</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif Coverage</h4>
                <div className="bg-neutral-surface p-4 rounded-lg mb-4">
                  <div 
                    className="h-32 rounded-lg relative"
                    style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                  >
                    <div className="absolute inset-4">
                      <div className="bg-white h-full rounded flex items-center justify-center">
                        <span className="body-s text-neutral-text-dark">Content Area</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="body-m text-neutral-text-dark">• 65-85% background coverage</li>
                  <li className="body-m text-neutral-text-dark">• Text lives in neutral containers</li>
                  <li className="body-m text-neutral-text-dark">• One color pair per page</li>
                </ul>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Content Hierarchy</h4>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-neutral-text-dark/20">
                    <p className="body-m text-neutral-text-dark font-medium">Hero Section</p>
                    <p className="body-s text-neutral-text-dark/70">Primary message, full motif background</p>
                  </div>
                  <div className="p-3 border-l-4 border-neutral-text-dark/20">
                    <p className="body-m text-neutral-text-dark font-medium">Content Cards</p>
                    <p className="body-s text-neutral-text-dark/70">White/black containers for readability</p>
                  </div>
                  <div className="p-3 border-l-4 border-neutral-text-dark/20">
                    <p className="body-m text-neutral-text-dark font-medium">Footer</p>
                    <p className="body-s text-neutral-text-dark/70">Neutral containers on motif background</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Layout Constraints</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Bold color blocks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Generous white space</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Clear visual hierarchy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <span className="body-m text-neutral-text-dark">Subtle color accents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <span className="body-m text-neutral-text-dark">Mixed color pairs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <span className="body-m text-neutral-text-dark">Complex layouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};