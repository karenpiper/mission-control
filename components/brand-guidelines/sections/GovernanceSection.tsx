import React from 'react';
import { Download, FileText, Folder, Archive, CheckCircle, Clock, Users, AlertTriangle } from 'lucide-react';
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

export const GovernanceSection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--danger-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-emergency" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-white mb-4">
              Asset Exports & Governance
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              File naming conventions, export specifications, version control, and change management processes. 
              Maintaining consistency across teams and ensuring brand integrity at scale.
            </p>
          </div>

          {/* File Naming System */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">File Naming Conventions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Naming Structure</h4>
                <div className="bg-neutral-surface p-4 rounded-lg mb-4 font-mono text-sm">
                  <p className="text-neutral-text-dark">[brand]_[category]_[descriptor]_[size]_[version].ext</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="body-m font-medium text-neutral-text-dark">Brand Prefix</p>
                    <p className="body-s text-neutral-text-dark/70">hmc_ (Home Mission Control)</p>
                  </div>
                  <div>
                    <p className="body-m font-medium text-neutral-text-dark">Categories</p>
                    <p className="body-s text-neutral-text-dark/70">logo, icon, pattern, template, color</p>
                  </div>
                  <div>
                    <p className="body-m font-medium text-neutral-text-dark">Versions</p>
                    <p className="body-s text-neutral-text-dark/70">v1-0, v1-1, v2-0 (semantic versioning)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Logo Files</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_logo_primary_horizontal_v2-0.svg</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Primary horizontal logo</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_logo_mono_black_stacked_v2-0.png</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Monochrome stacked version</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_logo_mark_32x32@3x_v2-0.png</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Icon mark for high DPI</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Template Files</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_template_social_instagram_1080x1080_v1-0.figma</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Instagram post template</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_template_email_newsletter_600px_v1-2.html</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Email newsletter template</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded">
                    <p className="text-neutral-text-dark">hmc_template_presentation_16x9_v1-0.pptx</p>
                    <p className="font-sans text-xs text-neutral-text-dark/70 mt-1">Presentation template</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Export Specifications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Digital Assets</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-white" />
                        <p className="body-m text-neutral-text-light font-medium">Vector Graphics</p>
                      </div>
                      <p className="body-s text-neutral-text-light/80">SVG format, optimized for web, min viewBox 24x24</p>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Download className="w-5 h-5 text-white" />
                        <p className="body-m text-neutral-text-light font-medium">Raster Images</p>
                      </div>
                      <p className="body-s text-neutral-text-light/80">PNG @1x/2x/3x, WebP preferred, JPG for photos</p>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Archive className="w-5 h-5 text-white" />
                        <p className="body-m text-neutral-text-light font-medium">Asset Packages</p>
                      </div>
                      <p className="body-s text-neutral-text-light/80">Organized ZIP files by category, include usage guide</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Quality Standards</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Optimize file sizes without quality loss</li>
                    <li className="body-m text-neutral-text-light">• Include color profiles for accurate reproduction</li>
                    <li className="body-m text-neutral-text-light">• Test on multiple devices and browsers</li>
                    <li className="body-m text-neutral-text-light">• Validate accessibility compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Version Control</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Semantic Versioning</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Major (v2-0)</p>
                      <p className="body-s text-neutral-text-light/70">Breaking changes, new brand direction</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Minor (v1-1)</p>
                      <p className="body-s text-neutral-text-light/70">New features, additional variants</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Patch (v1-0-1)</p>
                      <p className="body-s text-neutral-text-light/70">Bug fixes, optimizations</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Change Log</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-white/5 rounded">
                      <CheckCircle className="w-4 h-4 text-success-bg" />
                      <div>
                        <p className="body-s text-neutral-text-light">v2-0: New motif color system</p>
                        <p className="body-s text-neutral-text-light/60">Jan 15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white/5 rounded">
                      <Clock className="w-4 h-4 text-info-bg" />
                      <div>
                        <p className="body-s text-neutral-text-light">v1-2: Mobile templates added</p>
                        <p className="body-s text-neutral-text-light/60">Dec 8, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Process */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Brand Governance Process</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Request Process</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Users className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Submit Request</p>
                    <p className="body-s text-neutral-text-dark/70">Use brand asset request form with project details</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Clock className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Review Timeline</p>
                    <p className="body-s text-neutral-text-dark/70">2-3 business days for standard requests</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Approval Levels</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-success-soft text-neutral-text-dark border-success-border">Auto</Badge>
                    <span className="body-s text-neutral-text-dark">Standard templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-info-soft text-neutral-text-dark border-info-border">Design</Badge>
                    <span className="body-s text-neutral-text-dark">Custom adaptations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-warn-soft text-neutral-text-dark border-warn-border">Brand</Badge>
                    <span className="body-s text-neutral-text-dark">New applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-danger-soft text-neutral-text-dark border-danger-border">Legal</Badge>
                    <span className="body-s text-neutral-text-dark">External partnerships</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Distribution</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Folder className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Asset Library</p>
                    <p className="body-s text-neutral-text-dark/70">Centralized repository with search and download</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <Download className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Package Delivery</p>
                    <p className="body-s text-neutral-text-dark/70">Automated delivery to approved requesters</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Monitoring</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Usage Audits</p>
                    <p className="body-s text-neutral-text-dark/70">Quarterly review of brand compliance</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <CheckCircle className="w-6 h-6 text-neutral-text-dark mb-2" />
                    <p className="body-m text-neutral-text-dark font-medium">Quality Control</p>
                    <p className="body-s text-neutral-text-dark/70">Pre-launch brand verification process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-neutral-surface rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Brand Asset Request</h4>
                  <p className="body-m text-neutral-text-dark">Need brand assets for your project? Submit a request through our governance portal.</p>
                </div>
                <Button className="bg-neutral-text-dark text-neutral-text-light">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};