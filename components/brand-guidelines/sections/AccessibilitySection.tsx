import React from 'react';
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export const AccessibilitySection: React.FC = () => {
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
              Accessibility & Inclusive Design
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              WCAG compliance, contrast requirements, focus states, and inclusive design principles. 
              Our motif system is designed to be accessible by default while maintaining visual impact.
            </p>
          </div>

          {/* Contrast Requirements */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Contrast Requirements</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">WCAG AA Standard</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="body-m font-medium text-neutral-text-dark">Normal Text</span>
                      <Badge className="bg-success-soft text-success-ink-surface border-success-border">
                        4.5:1
                      </Badge>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Minimum contrast for body text ≥16px</p>
                  </div>
                  
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="body-m font-medium text-neutral-text-dark">Large Text</span>
                      <Badge className="bg-success-soft text-success-ink-surface border-success-border">
                        3:1
                      </Badge>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Bold ≥14px or regular ≥18px</p>
                  </div>
                  
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="body-m font-medium text-neutral-text-dark">UI Elements</span>
                      <Badge className="bg-success-soft text-success-ink-surface border-success-border">
                        3:1
                      </Badge>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Icons, borders, focus indicators</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">WCAG AAA Preferred</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="body-m font-medium text-neutral-text-dark">Normal Text</span>
                      <Badge className="bg-highlight-soft text-highlight-ink-surface border-highlight-border">
                        7:1
                      </Badge>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Enhanced readability standard</p>
                  </div>
                  
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="body-m font-medium text-neutral-text-dark">Large Text</span>
                      <Badge className="bg-highlight-soft text-highlight-ink-surface border-highlight-border">
                        4.5:1
                      </Badge>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Higher standard for headings</p>
                  </div>
                  
                  <div className="p-4 bg-warn-soft rounded-lg border border-warn-border">
                    <p className="body-s text-neutral-text-dark">
                      <strong>Our System:</strong> Black/white text ensures AAA compliance by default. 
                      Motif colors are used only for backgrounds and structure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Contrast Testing</h4>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-neutral-text-dark text-neutral-text-light rounded-lg text-center">
                      <p className="body-m font-medium">White on Black</p>
                      <p className="body-s opacity-80">Contrast: 21:1 (AAA)</p>
                    </div>
                    <div className="p-3 bg-neutral-text-light text-neutral-text-dark border border-neutral-text-dark/20 rounded-lg text-center">
                      <p className="body-m font-medium">Black on White</p>
                      <p className="body-s opacity-70">Contrast: 21:1 (AAA)</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-3">Testing Tools</h5>
                    <ul className="space-y-2">
                      <li className="body-s text-neutral-text-dark">• WebAIM Contrast Checker</li>
                      <li className="body-s text-neutral-text-dark">• Colour Contrast Analyser</li>
                      <li className="body-s text-neutral-text-dark">• Browser DevTools</li>
                      <li className="body-s text-neutral-text-dark">• Figma A11y plugins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus States */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Focus States & Navigation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Focus Ring Standards</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <Button className="bg-white text-neutral-text-dark mb-2 focus-ring">
                        Focused Button
                      </Button>
                      <p className="body-s text-neutral-text-light/80">2px solid ring, 2px offset, always visible</p>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <Input 
                        placeholder="Focused input..." 
                        className="bg-white text-neutral-text-dark border-white/40 focus-ring mb-2"
                      />
                      <p className="body-s text-neutral-text-light/80">Same ring treatment for form elements</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Keyboard Navigation</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Tab order follows logical flow</li>
                    <li className="body-m text-neutral-text-light">• Skip links for main content</li>
                    <li className="body-m text-neutral-text-light">• Escape key closes modals</li>
                    <li className="body-m text-neutral-text-light">• Arrow keys for component navigation</li>
                    <li className="body-m text-neutral-text-light">• Enter/Space activate buttons</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Screen Reader Support</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Semantic HTML</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="p-3 bg-white/10 rounded">
                      <p className="text-neutral-text-light">&lt;main&gt;&lt;section&gt;&lt;article&gt;</p>
                      <p className="font-sans body-s text-neutral-text-light/70 mt-1">Proper document structure</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded">
                      <p className="text-neutral-text-light">&lt;h1&gt;&lt;h2&gt;&lt;h3&gt; hierarchy</p>
                      <p className="font-sans body-s text-neutral-text-light/70 mt-1">Logical heading order</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded">
                      <p className="text-neutral-text-light">aria-label, aria-describedby</p>
                      <p className="font-sans body-s text-neutral-text-light/70 mt-1">ARIA attributes for clarity</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Alt Text Guidelines</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Describe image purpose, not appearance</li>
                    <li className="body-m text-neutral-text-light">• Keep under 125 characters</li>
                    <li className="body-m text-neutral-text-light">• Skip "image of" or "picture of"</li>
                    <li className="body-m text-neutral-text-light">• Empty alt="" for decorative images</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Checklist */}
          <div className="card-dark">
            <h3 className="heading-h2 mb-6 text-neutral-text-light text-center">Accessibility Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-light">Color & Contrast</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Text contrast ≥4.5:1</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">UI elements ≥3:1</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">No color-only communication</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Focus indicators visible</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-light">Structure & Navigation</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Semantic HTML structure</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Logical heading hierarchy</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Keyboard navigation works</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Skip links provided</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-light">Content & Media</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">All images have alt text</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Videos have captions</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Form labels associated</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="focus-ring" />
                    <span className="body-m text-neutral-text-light">Motion can be disabled</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};