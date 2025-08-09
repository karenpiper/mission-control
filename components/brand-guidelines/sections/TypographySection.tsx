import React from 'react';

export const TypographySection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--highlight-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-documents" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-black mb-4">
              Typography System
            </h1>
            <p className="title-m text-black/80 max-w-4xl mx-auto">
              Three font families working together: Fraunces for display headlines, Inter for all UI elements, 
              and JetBrains Mono for code. Big, readable type designed for confidence and clarity.
            </p>
          </div>

          {/* Typography Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Core Rules</h3>
              <ul className="space-y-2">
                <li className="body-m text-neutral-text-dark">• Body text: only black on white or white on black</li>
                <li className="body-m text-neutral-text-dark">• Never use colored text</li>
                <li className="body-m text-neutral-text-dark">• Display font: 20px minimum</li>
                <li className="body-m text-neutral-text-dark">• Line length: 60-80 characters ideal</li>
                <li className="body-m text-neutral-text-dark">• Base font size: 16px (never smaller for body)</li>
              </ul>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Font Licensing</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark">Fraunces Variable</h4>
                  <p className="body-s text-neutral-text-dark/70">Open Font License (SIL OFL)</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark">Inter</h4>
                  <p className="body-s text-neutral-text-dark/70">Open Font License (SIL OFL)</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark">JetBrains Mono</h4>
                  <p className="body-s text-neutral-text-dark/70">Apache License 2.0</p>
                </div>
              </div>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-4 text-neutral-text-dark">Mobile Rules</h3>
              <ul className="space-y-2">
                <li className="body-m text-neutral-text-dark">• Reduce line length to 45-65 chars</li>
                <li className="body-m text-neutral-text-dark">• Increase line height by 2-4px</li>
                <li className="body-m text-neutral-text-dark">• Never go below 14px for body text</li>
                <li className="body-m text-neutral-text-dark">• Increase touch targets to 44px minimum</li>
              </ul>
            </div>
          </div>

          {/* Display Typography */}
          <div className="card-dark mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-light text-center">Display Typography (Fraunces)</h3>
            <div className="space-y-12 text-center">
              <div>
                <h1 className="display-xl font-display text-neutral-text-light mb-4">
                  Display XL
                </h1>
                <div className="body-m text-neutral-text-light/80 mb-2">48px/56px • Fraunces Variable • Weight 600</div>
                <p className="body-s text-neutral-text-light/60">For hero headlines and major brand moments. Never use below 20px.</p>
              </div>
              <div>
                <h2 className="display-l font-display text-neutral-text-light mb-4">
                  Display L
                </h2>
                <div className="body-m text-neutral-text-light/80 mb-2">36px/44px • Fraunces Variable • Weight 600</div>
                <p className="body-s text-neutral-text-light/60">For section headers and important callouts. Use sparingly for maximum impact.</p>
              </div>
            </div>
          </div>

          {/* UI Typography */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-light">
              <h3 className="heading-h2 mb-8 text-neutral-text-dark">UI Hierarchy (Inter)</h3>
              <div className="space-y-6">
                <div>
                  <h1 className="heading-h1 text-neutral-text-dark mb-2">Heading H1</h1>
                  <p className="body-s text-neutral-text-dark/70">28px/34px • Inter • Weight 700</p>
                  <p className="body-s text-neutral-text-dark/50">Primary page headings</p>
                </div>
                
                <div>
                  <h2 className="heading-h2 text-neutral-text-dark mb-2">Heading H2</h2>
                  <p className="body-s text-neutral-text-dark/70">24px/30px • Inter • Weight 700</p>
                  <p className="body-s text-neutral-text-dark/50">Section headings</p>
                </div>
                
                <div>
                  <h3 className="heading-h3 text-neutral-text-dark mb-2">Heading H3</h3>
                  <p className="body-s text-neutral-text-dark/70">20px/26px • Inter • Weight 600</p>
                  <p className="body-s text-neutral-text-dark/50">Subsection headings</p>
                </div>
                
                <div>
                  <p className="title-m text-neutral-text-dark mb-2">Title Medium</p>
                  <p className="body-s text-neutral-text-dark/70">18px/24px • Inter • Weight 600</p>
                  <p className="body-s text-neutral-text-dark/50">Card titles, prominent labels</p>
                </div>
              </div>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-8 text-neutral-text-dark">Body & Detail Text</h3>
              <div className="space-y-6">
                <div>
                  <p className="body-m text-neutral-text-dark mb-2">Body Medium</p>
                  <p className="body-s text-neutral-text-dark/70 mb-2">16px/24px • Inter • Weight 450</p>
                  <p className="body-m text-neutral-text-dark/80 leading-relaxed">
                    This is the default body text size for readable content across all applications. 
                    Never go below 16px for body text to maintain accessibility.
                  </p>
                </div>
                
                <div>
                  <p className="body-s text-neutral-text-dark mb-2">Body Small</p>
                  <p className="body-s text-neutral-text-dark/70 mb-2">14px/20px • Inter • Weight 450</p>
                  <p className="body-s text-neutral-text-dark/80 leading-relaxed">
                    Used for secondary information, captions, and supporting details. Use sparingly to maintain hierarchy.
                  </p>
                </div>
                
                <div>
                  <span className="label-s uppercase tracking-wide text-neutral-text-dark mb-2 block">Label Small</span>
                  <p className="body-s text-neutral-text-dark/70 mb-2">12px/16px • Inter • Weight 600</p>
                  <p className="body-s text-neutral-text-dark/80">Used for buttons, form labels, and UI controls. Always uppercase with wide tracking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Typography */}
          <div className="card-dark">
            <h3 className="heading-h2 mb-8 text-neutral-text-light text-center">Monospace Typography (JetBrains Mono)</h3>
            <div className="bg-black/40 p-8 rounded-xl max-w-4xl mx-auto">
              <div className="space-y-4">
                <code className="mono-code-s block text-2xl text-neutral-text-light">
                  const designSystem = "Home Mission Control";
                </code>
                <code className="mono-code-s block text-lg text-neutral-text-light/80">
                  // 13px/18px • JetBrains Mono • Weight 500
                </code>
                <code className="mono-code-s block text-base text-neutral-text-light/60">
                  console.log("Bold, vibrant, and confident!");
                </code>
              </div>
              <div className="mt-6 body-m text-neutral-text-light/80">
                Used exclusively for code blocks, technical displays, and monospace data. 
                Never mix with other fonts in the same context.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};