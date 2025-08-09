import React, { useState } from 'react';
import { Switch } from "../../ui/switch";
import { motifPairs } from '../constants';

export const ColorSystemSection: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState<string>('pair-01');
  const [isDark, setIsDark] = useState(false);

  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--success-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-maintenance" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-white mb-4">
              Color Pair-Locked System
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Seven carefully crafted color pairs. Each pair is assigned to specific application sections 
              and must never be mixed. Black and white are reserved exclusively for typography.
            </p>
          </div>

          {/* System Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Core Rules</h3>
              <ul className="space-y-2">
                <li className="body-m text-neutral-text-dark">• One pair per page/section</li>
                <li className="body-m text-neutral-text-dark">• Never cross-mix inks/backgrounds</li>
                <li className="body-m text-neutral-text-dark">• 65-85% canvas coverage</li>
                <li className="body-m text-neutral-text-dark">• Text: only #0A0A0A and #FFFFFF</li>
                <li className="body-m text-neutral-text-dark">• Cards: black or white only</li>
                <li className="body-m text-neutral-text-dark">• AA contrast ≥4.5:1 required</li>
              </ul>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Variable Structure</h3>
              <div className="mono-code-s text-neutral-text-dark space-y-1">
                <div>Pair-XX/bg-100 (solid background)</div>
                <div>Pair-XX/bg-200 (deeper tone)</div>
                <div>Pair-XX/pattern-010 (10% tint)</div>
                <div>Pair-XX/border-200 (24% tint)</div>
                <div>Neutral/canvas-light #FFFFFF</div>
                <div>Neutral/canvas-dark #0A0A0A</div>
                <div>Focus/ring #000000 at 24%</div>
              </div>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Section Aliases</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#FF4E9A' }} />
                  <span className="body-s text-neutral-text-dark">Section/Home → Pair-04</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#C084FF' }} />
                  <span className="body-s text-neutral-text-dark">Section/Rooms → Pair-03</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#FF8A3D' }} />
                  <span className="body-s text-neutral-text-dark">Section/Repairs → Pair-06</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#00B451' }} />
                  <span className="body-s text-neutral-text-dark">Section/Maintenance → Pair-01</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#00C2FF' }} />
                  <span className="body-s text-neutral-text-dark">Section/Systems → Pair-02</span>
                </div>
              </div>
            </div>
          </div>

          {/* All Color Pairs Display */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Complete Palette Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {motifPairs.map((pair, index) => (
                <div key={index} className="text-center">
                  <div className="space-y-2 mb-4">
                    <div 
                      className="h-20 rounded-lg border border-neutral-text-dark/10"
                      style={{ backgroundColor: pair.lightColor }}
                    />
                    <div 
                      className="h-20 rounded-lg border border-neutral-text-dark/10"
                      style={{ backgroundColor: pair.darkColor }}
                    />
                  </div>
                  <h4 className="heading-h3 mb-2 text-neutral-text-dark">{pair.pairNumber}</h4>
                  <p className="body-s text-neutral-text-dark/70 mb-1">{pair.name}</p>
                  <p className="body-s text-neutral-text-dark font-medium">{pair.sectionAssignment}</p>
                  <div className="mt-2 space-y-1">
                    <div className="body-s text-neutral-text-dark/60">Light: {pair.lightColor}</div>
                    <div className="body-s text-neutral-text-dark/60">Dark: {pair.darkColor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility & Contrast */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Accessibility Requirements</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">AA Compliance</h4>
                  <p className="body-m text-neutral-text-light">Contrast ratio ≥4.5:1 for body text</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">AAA Preferred</h4>
                  <p className="body-m text-neutral-text-light">Contrast ratio ≥7:1 when feasible</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">Focus States</h4>
                  <p className="body-m text-neutral-text-light">Always visible 2px ring at 24% opacity</p>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Print Specifications</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">CMYK Conversion</h4>
                  <p className="body-m text-neutral-text-light">Add color profiles for print reproduction</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">Pantone Approximations</h4>
                  <p className="body-m text-neutral-text-light">Closest matches for brand materials</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="heading-h3 text-neutral-text-light mb-2">Logo Applications</h4>
                  <p className="body-m text-neutral-text-light">Mono versions for single-color printing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};