import React from 'react';
import { CheckCircle, XCircle, Home, Settings, AlertTriangle, Camera, FileText, Shield, Lightbulb, Square, Circle } from 'lucide-react';
import { Badge } from "../../ui/badge";

export const GraphicLanguageSection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--warn-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-repairs" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-white mb-4">
              Graphic Language
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Visual elements that support our motif system: pattern overlays, corner radius standards, 
              iconography guidelines, and illustration principles that maintain brand consistency.
            </p>
          </div>

          {/* Motif Pattern System */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Motif Pattern System</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Pattern Overlay Rules</h4>
                <ul className="space-y-2">
                  <li className="body-m text-neutral-text-dark">• 10-14% opacity tint overlays only</li>
                  <li className="body-m text-neutral-text-dark">• Always behind content, never foreground</li>
                  <li className="body-m text-neutral-text-dark">• Must use section's assigned color pair</li>
                  <li className="body-m text-neutral-text-dark">• Subtle texture, not decorative patterns</li>
                  <li className="body-m text-neutral-text-dark">• Scale pattern to 120-150% for visual interest</li>
                </ul>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Pattern Implementation</h4>
                <div className="bg-neutral-surface p-6 rounded-xl">
                  <div 
                    className="h-24 rounded-lg relative overflow-hidden"
                    style={{ backgroundColor: 'var(--brand-primary-bg)' }}
                  >
                    <div 
                      className="absolute inset-0 opacity-12"
                      style={{ 
                        backgroundColor: 'var(--brand-primary-bg)',
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`
                      }}
                    />
                    <div className="relative z-10 p-4">
                      <p className="text-white font-medium">Content over pattern</p>
                    </div>
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70 mt-2">Example: 12% opacity geometric pattern overlay</p>
              </div>

              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Usage Context</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Hero sections with content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Large background areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-bg" />
                    <span className="body-m text-neutral-text-dark">Section dividers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <span className="body-m text-neutral-text-dark">Over white card content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <span className="body-m text-neutral-text-dark">Behind detailed text</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Radius Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Corner Radius Standards</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white/20 rounded" />
                  <div>
                    <p className="body-m text-neutral-text-light font-medium">8px - Buttons & Inputs</p>
                    <p className="body-s text-neutral-text-light/70">Interactive elements, form controls</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white/20 rounded-2xl" />
                  <div>
                    <p className="body-m text-neutral-text-light font-medium">16px - Cards</p>
                    <p className="body-s text-neutral-text-light/70">Content containers, panels</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white/20" style={{ borderRadius: '20px' }} />
                  <div>
                    <p className="body-m text-neutral-text-light font-medium">20px - Sheets & Modals</p>
                    <p className="body-s text-neutral-text-light/70">Overlays, dialog boxes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white/20" style={{ borderRadius: '24px' }} />
                  <div>
                    <p className="body-m text-neutral-text-light font-medium">24px - Large Containers</p>
                    <p className="body-s text-neutral-text-light/70">Hero sections, major layout blocks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Shape Language</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Primary Shapes</h4>
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Square className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Circle className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/40 transform rotate-45 rounded-sm" />
                    </div>
                  </div>
                  <p className="body-s text-neutral-text-light/80">
                    Squares for containers, circles for avatars/status, diamonds for accents
                  </p>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Avoid</h4>
                  <ul className="space-y-2">
                    <li className="body-s text-neutral-text-light">• Complex polygons</li>
                    <li className="body-s text-neutral-text-light">• Organic/irregular shapes</li>
                    <li className="body-s text-neutral-text-light">• Sharp 0px corners (except icons)</li>
                    <li className="body-s text-neutral-text-light">• Mixed radius values on same element</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Iconography Guidelines */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Iconography Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Style Rules</h4>
                <ul className="space-y-2">
                  <li className="body-m text-neutral-text-dark">• 2px stroke weight</li>
                  <li className="body-m text-neutral-text-dark">• Rounded line caps</li>
                  <li className="body-m text-neutral-text-dark">• 24px grid system</li>
                  <li className="body-m text-neutral-text-dark">• Consistent optical sizing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Color Usage</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-neutral-text-dark" />
                    <span className="body-m text-neutral-text-dark">Black on light backgrounds</span>
                  </div>
                  <div className="flex items-center gap-3 bg-neutral-text-dark p-2 rounded">
                    <Home className="w-6 h-6 text-white" />
                    <span className="body-m text-white">White on dark backgrounds</span>
                  </div>
                  <p className="body-s text-neutral-text-dark/70">Never use colored icons</p>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Size Grid</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Home className="w-4 h-4 text-neutral-text-dark" />
                    <span className="body-s text-neutral-text-dark">16px - Inline with text</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-neutral-text-dark" />
                    <span className="body-s text-neutral-text-dark">20px - Small UI elements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-neutral-text-dark" />
                    <span className="body-s text-neutral-text-dark">24px - Standard buttons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8 text-neutral-text-dark" />
                    <span className="body-s text-neutral-text-dark">32px - Large features</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Icon Library</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <Home className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <Settings className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <Camera className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <FileText className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <Shield className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                  <div className="p-2 bg-neutral-surface rounded flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-neutral-text-dark" />
                  </div>
                </div>
                <p className="body-s text-neutral-text-dark/70 mt-2">Use Lucide React library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};