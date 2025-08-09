import React from 'react';
import { Camera, Home, Users, Video, Play, Monitor, CheckCircle, XCircle } from 'lucide-react';

export const ImageryMediaSection: React.FC = () => {
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
              Imagery & Media Guidelines
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Photography composition, color treatment, video specifications, and cropping standards. 
              All media should harmonize with our motif system while maintaining professional quality.
            </p>
          </div>

          {/* Photography Guidelines */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Photography Guidelines</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Composition Style</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Camera className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Clean & Confident</p>
                    <p className="body-s text-neutral-text-dark/70">Uncluttered spaces, clear focal points, professional lighting</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Home className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Home-Focused</p>
                    <p className="body-s text-neutral-text-dark/70">Interior spaces, maintenance activities, organized environments</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Users className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Human-Centered</p>
                    <p className="body-s text-neutral-text-dark/70">People in their spaces, hands at work, satisfaction moments</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Color Treatment</h4>
                <div className="space-y-4">
                  <div 
                    className="h-24 rounded-lg relative overflow-hidden"
                    style={{ backgroundColor: 'var(--success-bg)' }}
                  >
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-medium">Harmonized Colors</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-dark">• Slight warm or cool cast toward page motif</li>
                    <li className="body-m text-neutral-text-dark">• Maintain natural skin tones</li>
                    <li className="body-m text-neutral-text-dark">• Avoid heavy filters or effects</li>
                    <li className="body-m text-neutral-text-dark">• Consistent lighting temperature</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Technical Specs</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Web Images</p>
                    <p className="body-s text-neutral-text-dark/70">WebP format preferred, JPG backup</p>
                    <p className="mono-code-s text-neutral-text-dark/60">@1x, @2x, @3x variants</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Print Images</p>
                    <p className="body-s text-neutral-text-dark/70">300 DPI minimum resolution</p>
                    <p className="mono-code-s text-neutral-text-dark/60">CMYK color profile</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Alt Text</p>
                    <p className="body-s text-neutral-text-dark/70">Descriptive, context-aware</p>
                    <p className="mono-code-s text-neutral-text-dark/60">125 characters max</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video & Motion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Video & Motion</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Video Specifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <Video className="w-5 h-5 text-white" />
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">Duration: 15-60 seconds</p>
                        <p className="body-s text-neutral-text-light/70">Concise, focused content</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <Play className="w-5 h-5 text-white" />
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">Format: MP4, H.264</p>
                        <p className="body-s text-neutral-text-light/70">Web-optimized compression</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <Monitor className="w-5 h-5 text-white" />
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">Resolution: 1080p minimum</p>
                        <p className="body-s text-neutral-text-light/70">4K preferred for quality</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Motion Principles</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Smooth, purposeful transitions</li>
                    <li className="body-m text-neutral-text-light">• Start/end frames use motif colors</li>
                    <li className="body-m text-neutral-text-light">• Respect reduced motion preferences</li>
                    <li className="body-m text-neutral-text-light">• Include captions for accessibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Aspect Ratios & Cropping</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Standard Ratios</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center">
                        <div className="w-6 h-6 border border-white" />
                      </div>
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">1:1 Square</p>
                        <p className="body-s text-neutral-text-light/70">Social media, profile images</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-xs text-white font-medium">4:3</span>
                      </div>
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">4:3 Standard</p>
                        <p className="body-s text-neutral-text-light/70">Traditional photos, presentations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-12 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-xs text-white font-medium">16:9</span>
                      </div>
                      <div>
                        <p className="body-m text-neutral-text-light font-medium">16:9 Widescreen</p>
                        <p className="body-s text-neutral-text-light/70">Hero images, video content</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Cropping Guidelines</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Maintain focal point centered</li>
                    <li className="body-m text-neutral-text-light">• Avoid cropping at joints (people)</li>
                    <li className="body-m text-neutral-text-light">• Leave breathing room around subjects</li>
                    <li className="body-m text-neutral-text-light">• Consider text overlay space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Usage Examples */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Usage Examples & File Naming</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">Appropriate Usage</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg">
                    <CheckCircle className="w-6 h-6 text-success-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">Well-organized spaces</p>
                      <p className="body-s text-neutral-text-dark/70">Clean, maintained home environments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg">
                    <CheckCircle className="w-6 h-6 text-success-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">People using tools</p>
                      <p className="body-s text-neutral-text-dark/70">Hands-on maintenance and care activities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg">
                    <CheckCircle className="w-6 h-6 text-success-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">Technology integration</p>
                      <p className="body-s text-neutral-text-dark/70">Smart home devices, apps, digital interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">File Naming Convention</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <p className="body-m font-sans text-neutral-text-dark font-medium mb-2">Pattern: category_subject_context_size@scale.ext</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hero_kitchen_maintenance_1920x1080@2x.webp</p>
                    <p className="font-sans body-s text-neutral-text-dark/70 mt-1">Hero image of kitchen maintenance</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">profile_homeowner_satisfied_400x400@3x.jpg</p>
                    <p className="font-sans body-s text-neutral-text-dark/70 mt-1">User profile photo</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">room_livingroom_clean_1600x900.webp</p>
                    <p className="font-sans body-s text-neutral-text-dark/70 mt-1">Living room showcase image</p>
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