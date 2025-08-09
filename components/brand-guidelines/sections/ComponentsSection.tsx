import React from 'react';
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { CheckCircle, Download } from 'lucide-react';

export const ComponentsSection: React.FC = () => {
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
              Component System
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Complete UI kit integrated with the motif system. Every component follows strict black/white text rules 
              while using motif colors for backgrounds, borders, and structure only.
            </p>
          </div>

          {/* Button System */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Button System</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">Primary Buttons (Black/White Only)</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-neutral-surface rounded-xl">
                    <Button size="lg" className="bg-neutral-text-dark text-neutral-text-light hover:opacity-90 mb-2">
                      Primary Action
                    </Button>
                    <p className="body-s text-neutral-text-dark/70">Black background, white text - highest priority</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-text-dark rounded-xl">
                    <Button size="lg" className="bg-neutral-text-light text-neutral-text-dark hover:opacity-90 mb-2">
                      Inverted Primary
                    </Button>
                    <p className="body-s text-neutral-text-light/70">White background, black text - for dark contexts</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">Secondary & Outline</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-neutral-surface rounded-xl">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-neutral-text-dark text-neutral-text-dark hover:bg-neutral-text-dark hover:text-neutral-text-light mb-2"
                    >
                      Secondary Action
                    </Button>
                    <p className="body-s text-neutral-text-dark/70">Outlined style for secondary actions</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-surface rounded-xl">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 text-neutral-text-dark hover:bg-neutral-surface mb-2"
                      style={{ borderColor: 'var(--success-bg)' }}
                    >
                      Motif Border
                    </Button>
                    <p className="body-s text-neutral-text-dark/70">Optional motif color border with black text</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button States */}
            <div className="mt-8 p-6 bg-neutral-surface rounded-xl">
              <h4 className="heading-h3 mb-4 text-neutral-text-dark">Button States & Sizing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="body-m font-medium text-neutral-text-dark mb-3">Sizes</h5>
                  <div className="space-y-2">
                    <Button size="sm" className="bg-neutral-text-dark text-neutral-text-light">Small</Button>
                    <Button size="default" className="bg-neutral-text-dark text-neutral-text-light">Default</Button>
                    <Button size="lg" className="bg-neutral-text-dark text-neutral-text-light">Large</Button>
                  </div>
                </div>
                
                <div>
                  <h5 className="body-m font-medium text-neutral-text-dark mb-3">States</h5>
                  <div className="space-y-2">
                    <Button className="bg-neutral-text-dark text-neutral-text-light">Normal</Button>
                    <Button className="bg-neutral-text-dark text-neutral-text-light opacity-90">Hover</Button>
                    <Button disabled className="bg-neutral-text-dark text-neutral-text-light opacity-50">Disabled</Button>
                  </div>
                </div>
                
                <div>
                  <h5 className="body-m font-medium text-neutral-text-dark mb-3">With Icons</h5>
                  <div className="space-y-2">
                    <Button className="bg-neutral-text-dark text-neutral-text-light">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Complete
                    </Button>
                    <Button className="bg-neutral-text-dark text-neutral-text-light">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Form Components</h3>
              <div className="space-y-6">
                <div>
                  <label className="label-s uppercase tracking-wide text-neutral-text-light/70 block mb-2">Text Input</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your text here..."
                    className="w-full p-3 bg-white border-2 rounded-lg text-neutral-text-dark focus-ring"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                  />
                </div>
                
                <div>
                  <label className="label-s uppercase tracking-wide text-neutral-text-light/70 block mb-2">With Motif Border</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full p-3 bg-white border-2 rounded-lg text-neutral-text-dark focus-ring"
                    style={{ borderColor: 'var(--success-border)' }}
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="focus-ring" />
                  <span className="body-m text-neutral-text-light">Checkbox with white text</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="radio" name="example" className="focus-ring" />
                  <span className="body-m text-neutral-text-light">Radio button option</span>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Cards & Containers</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="heading-h3 mb-2 text-neutral-text-dark">Light Card</h4>
                  <p className="body-m text-neutral-text-dark">White background with black text for maximum readability on colored backgrounds.</p>
                </div>
                
                <div className="bg-neutral-text-dark p-4 rounded-lg">
                  <h4 className="heading-h3 mb-2 text-neutral-text-light">Dark Card</h4>
                  <p className="body-m text-neutral-text-light">Near-black background with white text for contrast and emphasis.</p>
                </div>
                
                <div 
                  className="p-4 rounded-lg border-2"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    borderColor: 'var(--success-border)' 
                  }}
                >
                  <h4 className="heading-h3 mb-2 text-neutral-text-light">Motif Border</h4>
                  <p className="body-m text-neutral-text-light">Transparent background with motif color border for subtle emphasis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Feedback */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Status & Feedback Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">Badges & Status</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-3">Role-based Badges</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        className="border text-neutral-text-dark"
                        style={{ 
                          backgroundColor: 'var(--success-soft)', 
                          borderColor: 'var(--success-border)' 
                        }}
                      >
                        Success
                      </Badge>
                      <Badge 
                        className="border text-neutral-text-dark"
                        style={{ 
                          backgroundColor: 'var(--info-soft)', 
                          borderColor: 'var(--info-border)' 
                        }}
                      >
                        Info
                      </Badge>
                      <Badge 
                        className="border text-neutral-text-dark"
                        style={{ 
                          backgroundColor: 'var(--warn-soft)', 
                          borderColor: 'var(--warn-border)' 
                        }}
                      >
                        Warning
                      </Badge>
                      <Badge 
                        className="border text-neutral-text-dark"
                        style={{ 
                          backgroundColor: 'var(--danger-soft)', 
                          borderColor: 'var(--danger-border)' 
                        }}
                      >
                        Error
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-3">Neutral Badges</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-neutral-text-dark/10 text-neutral-text-dark border-neutral-text-dark/20">
                        Default
                      </Badge>
                      <Badge className="bg-neutral-text-dark text-neutral-text-light">
                        Emphasis
                      </Badge>
                      <Badge variant="outline" className="border-neutral-text-dark text-neutral-text-dark">
                        Outline
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-6 text-neutral-text-dark">Progress & Loading</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-3">Progress Bars</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="body-s text-neutral-text-dark/70 mb-1">Task Progress (75%)</p>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <p className="body-s text-neutral-text-dark/70 mb-1">Loading (45%)</p>
                        <Progress value={45} className="h-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-3">Status Indicators</h5>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-success-bg" />
                        <span className="body-s text-neutral-text-dark">Online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-warn-bg" />
                        <span className="body-s text-neutral-text-dark">Busy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-danger-bg" />
                        <span className="body-s text-neutral-text-dark">Offline</span>
                      </div>
                    </div>
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