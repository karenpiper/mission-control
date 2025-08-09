import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { CheckCircle, Info, AlertTriangle, XCircle, Lightbulb, Moon, Sun, Home, Thermometer, Wrench, Bot, FileText, Settings, Palette, Type, Grid3X3, Layers, Zap } from 'lucide-react';

interface MotifShowcaseProps {
  pairNumber: string;
  lightColor: string;
  darkColor: string;
  name: string;
  sectionName: string;
  role: string;
  examples: string[];
}

const MotifShowcase: React.FC<MotifShowcaseProps> = ({ 
  pairNumber, 
  lightColor, 
  darkColor, 
  name, 
  sectionName, 
  role, 
  examples 
}) => {
  const [isDark, setIsDark] = useState(false);
  const currentColor = isDark ? darkColor : lightColor;
  
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: currentColor }}
    >
      {/* Pattern Overlay - 12% tint */}
      <div 
        className="absolute inset-0 opacity-12 pointer-events-none"
        style={{ backgroundColor: currentColor }}
      />
      
      <div className="relative z-10 p-8">
        {/* Header Bar - Deeper tone */}
        <div 
          className="p-6 rounded-xl mb-8"
          style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="display-xl font-display text-white mb-2">{pairNumber}</h1>
              <p className="title-m text-white/90">{name}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="label-s text-white/80 uppercase tracking-wide">Mode</span>
              <div className="flex items-center gap-3 bg-white/20 rounded-lg px-4 py-2">
                <Sun className="w-5 h-5 text-white" />
                <Switch 
                  checked={isDark} 
                  onCheckedChange={setIsDark}
                  aria-label="Toggle light/dark mode"
                />
                <Moon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - 65-85% coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Section Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card-light">
              <h2 className="heading-h2 mb-4">Section Assignment</h2>
              <div className="space-y-3">
                <div>
                  <span className="label-s uppercase tracking-wide text-neutral-text-dark/60">Application Section</span>
                  <p className="title-m text-neutral-text-dark">{sectionName}</p>
                </div>
                <div>
                  <span className="label-s uppercase tracking-wide text-neutral-text-dark/60">Primary Role</span>
                  <p className="body-m text-neutral-text-dark">{role}</p>
                </div>
              </div>
            </div>

            <div className="card-light">
              <h3 className="heading-h3 mb-4">Usage Examples</h3>
              <div className="space-y-2">
                {examples.map((example, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentColor }} />
                    <span className="body-s text-neutral-text-dark">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Color Demonstration */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-light">
              <h2 className="heading-h2 mb-6">Motif System Rules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="heading-h3 mb-4">Color Usage</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: lightColor }} />
                      <span className="body-m text-neutral-text-dark">Light Mode: {lightColor.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: darkColor }} />
                      <span className="body-m text-neutral-text-dark">Dark Mode: {darkColor.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4">Typography Rules</h4>
                  <ul className="space-y-2">
                    <li className="body-s text-neutral-text-dark">• Black text on white cards</li>
                    <li className="body-s text-neutral-text-dark">• White text on black cards</li>
                    <li className="body-s text-neutral-text-dark">• Never colored text</li>
                    <li className="body-s text-neutral-text-dark">• AA contrast ≥4.5:1</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Component Examples */}
            <div className="card-light">
              <h3 className="heading-h3 mb-6">Component Examples</h3>
              <div className="space-y-6">
                {/* Buttons - Black/White Only */}
                <div>
                  <h4 className="title-m mb-4 text-neutral-text-dark">Buttons (Black/White Only)</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary-light">Primary Action</button>
                    <button 
                      className="btn-outline"
                      style={{ 
                        borderColor: currentColor,
                        color: '#0A0A0A'
                      }}
                    >
                      Outline Button
                    </button>
                    <button className="btn-primary-light">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      With Icon
                    </button>
                  </div>
                </div>

                {/* Multiple Cards */}
                <div>
                  <h4 className="title-m mb-4 text-neutral-text-dark">Text Containers</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-light">
                      <h5 className="heading-h3 mb-2 text-neutral-text-dark">Light Container</h5>
                      <p className="body-m text-neutral-text-dark">White background (#FFFFFF) with black text (#0A0A0A). Generous padding and subtle shadow.</p>
                    </div>
                    <div className="card-dark">
                      <h5 className="heading-h3 mb-2 text-neutral-text-light">Dark Container</h5>
                      <p className="body-m text-neutral-text-light">Near-black background (#0A0A0A) with white text (#FFFFFF). More pronounced shadow.</p>
                    </div>
                  </div>
                </div>

                {/* Form Elements */}
                <div>
                  <h4 className="title-m mb-4 text-neutral-text-dark">Form Elements</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="label-s uppercase tracking-wide text-neutral-text-dark/60 block mb-2">Input Field</label>
                      <input 
                        type="text" 
                        placeholder="Enter text here..."
                        className="w-full p-3 bg-white border rounded-lg text-neutral-text-dark focus-ring"
                        style={{ borderColor: currentColor }}
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="focus-ring" />
                      <span className="body-m text-neutral-text-dark">Checkbox with black text</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar - Deeper tone */}
        <div 
          className="p-6 rounded-xl"
          style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)' }}
        >
          <div className="card-light inline-block">
            <p className="body-s text-neutral-text-dark">
              <strong>Rule:</strong> This page uses exactly one color pair ({pairNumber}). 
              Background covers 70-80% of the viewport. All text is black-on-white or white-on-black only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewSection: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-xl font-display text-neutral-text-dark mb-4">
            Home Mission Control
          </h1>
          <h2 className="heading-h1 text-neutral-text-dark mb-6">
            Motif System Guidelines
          </h2>
          <p className="title-m text-neutral-text-dark/80 max-w-4xl mx-auto">
            A strict design system where each section uses exactly one color pair for backgrounds, 
            with all typography constrained to black and white only.
          </p>
        </div>

        {/* Core Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card-light">
            <h3 className="heading-h2 mb-6 text-neutral-text-dark">Core Rules</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-h3 mb-2 text-neutral-text-dark">One Pair Per Page</h4>
                <p className="body-m text-neutral-text-dark">Each section/page uses exactly one color pair. Never mix pairs within the same view.</p>
              </div>
              <div>
                <h4 className="heading-h3 mb-2 text-neutral-text-dark">Canvas Coverage</h4>
                <p className="body-m text-neutral-text-dark">65-85% of the page should be the motif background color.</p>
              </div>
              <div>
                <h4 className="heading-h3 mb-2 text-neutral-text-dark">Black/White Typography</h4>
                <p className="body-m text-neutral-text-dark">All text is either black (#0A0A0A) or white (#FFFFFF). Never colored text.</p>
              </div>
              <div>
                <h4 className="heading-h3 mb-2 text-neutral-text-dark">Button Colors</h4>
                <p className="body-m text-neutral-text-dark">Buttons are solid black or white only. Optional 1px motif color border.</p>
              </div>
            </div>
          </div>

          <div className="card-dark">
            <h3 className="heading-h2 mb-6 text-neutral-text-light">Section Assignments</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF4E9A' }} />
                <span className="body-m text-neutral-text-light">Dashboard/Home → Pink ↔ Magenta</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#C084FF' }} />
                <span className="body-m text-neutral-text-light">Rooms → Lilac ↔ Purple</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF8A3D' }} />
                <span className="body-m text-neutral-text-light">Repairs → Sand ↔ Orange</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00B451' }} />
                <span className="body-m text-neutral-text-light">Maintenance → Lime ↔ Deep Teal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00C2FF' }} />
                <span className="body-m text-neutral-text-light">Systems → Aqua ↔ Navy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFD836' }} />
                <span className="body-m text-neutral-text-light">Documents → Yellow ↔ Amber</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF5555' }} />
                <span className="body-m text-neutral-text-light">Emergency → Red (overlays only)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography System */}
        <div className="card-light mb-12">
          <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Typography System</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="heading-h3 mb-4 text-neutral-text-dark">Display (Fraunces)</h4>
              <div className="space-y-3">
                <div className="display-xl font-display text-neutral-text-dark">Display XL</div>
                <p className="body-s text-neutral-text-dark/60">48px/56px • Weight 600</p>
                <div className="display-l font-display text-neutral-text-dark">Display L</div>
                <p className="body-s text-neutral-text-dark/60">36px/44px • Weight 600</p>
              </div>
            </div>
            
            <div>
              <h4 className="heading-h3 mb-4 text-neutral-text-dark">Headings (Inter)</h4>
              <div className="space-y-3">
                <div className="heading-h1 text-neutral-text-dark">Heading H1</div>
                <p className="body-s text-neutral-text-dark/60">28px/34px • Weight 700</p>
                <div className="heading-h2 text-neutral-text-dark">Heading H2</div>
                <p className="body-s text-neutral-text-dark/60">24px/30px • Weight 700</p>
                <div className="heading-h3 text-neutral-text-dark">Heading H3</div>
                <p className="body-s text-neutral-text-dark/60">20px/26px • Weight 600</p>
              </div>
            </div>
            
            <div>
              <h4 className="heading-h3 mb-4 text-neutral-text-dark">Body & Details</h4>
              <div className="space-y-3">
                <div className="title-m text-neutral-text-dark">Title Medium</div>
                <p className="body-s text-neutral-text-dark/60">18px/24px • Weight 600</p>
                <div className="body-m text-neutral-text-dark">Body Medium</div>
                <p className="body-s text-neutral-text-dark/60">16px/24px • Weight 450</p>
                <div className="label-s uppercase tracking-wide text-neutral-text-dark">Label Small</div>
                <p className="body-s text-neutral-text-dark/60">12px/16px • Weight 600</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Individual Motifs - NOW WITH WORKING LINKS */}
        <div className="card-dark">
          <h3 className="heading-h2 mb-6 text-neutral-text-light text-center">Explore Individual Motifs</h3>
          <p className="body-m text-neutral-text-light/80 text-center mb-8">
            Click below to view each color pair in its complete application context
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'home', name: 'Home', color: '#FF4E9A' },
              { id: 'rooms', name: 'Rooms', color: '#C084FF' },
              { id: 'repairs', name: 'Repairs', color: '#FF8A3D' },
              { id: 'maintenance', name: 'Maintenance', color: '#00B451' },
              { id: 'systems', name: 'Systems', color: '#00C2FF' },
              { id: 'documents', name: 'Documents', color: '#FFD836' },
              { id: 'assistant', name: 'Assistant', color: '#FF4E9A' },
              { id: 'emergency', name: 'Emergency', color: '#FF5555' }
            ].map((section, index) => (
              <button 
                key={index}
                onClick={() => onNavigate(section.id)}
                className="p-4 rounded-lg border border-white/20 text-left transition-all hover:border-white/40 hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: section.color }} />
                  <span className="body-m text-neutral-text-light font-medium">{section.name}</span>
                </div>
                <span className="body-s text-neutral-text-light/60">View full motif →</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DesignSystemShowcase: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('overview');

  const motifs = [
    {
      id: 'home',
      pairNumber: 'Pair-04',
      lightColor: '#FF4E9A',
      darkColor: '#E91E63',
      name: 'Pink ↔ Magenta',
      sectionName: 'Dashboard / Home',
      role: 'Primary brand, hero headlines, main dashboard',
      examples: ['Dashboard metrics', 'Hero sections', 'Primary CTAs', 'Brand moments']
    },
    {
      id: 'rooms',
      pairNumber: 'Pair-03',
      lightColor: '#C084FF',
      darkColor: '#8B5CF6',
      name: 'Lilac ↔ Purple',
      sectionName: 'My Rooms',
      role: 'Room management, climate control, device status',
      examples: ['Temperature displays', 'Room cards', 'Device lists', 'Climate controls']
    },
    {
      id: 'repairs',
      pairNumber: 'Pair-06',
      lightColor: '#FF8A3D',
      darkColor: '#FF6F00',
      name: 'Sand ↔ Orange/Brown',
      sectionName: 'Repairs / Work Log',
      role: 'Maintenance tasks, repair schedules, work tracking',
      examples: ['Repair tickets', 'Work orders', 'Maintenance logs', 'Contractor info']
    },
    {
      id: 'maintenance',
      pairNumber: 'Pair-01',
      lightColor: '#00B451',
      darkColor: '#005641',
      name: 'Lime ↔ Deep Teal',
      sectionName: 'Maintenance',
      role: 'Preventive maintenance, schedules, completed tasks',
      examples: ['Maintenance schedules', 'Task completion', 'Service records', 'Warranties']
    },
    {
      id: 'systems',
      pairNumber: 'Pair-02',
      lightColor: '#00C2FF',
      darkColor: '#0066CC',
      name: 'Aqua ↔ Navy',
      sectionName: 'Systems & Appliances',
      role: 'System monitoring, appliance status, controls',
      examples: ['System status', 'Appliance controls', 'Energy monitoring', 'Smart home']
    },
    {
      id: 'documents',
      pairNumber: 'Pair-07',
      lightColor: '#FFD836',
      darkColor: '#FFA000',
      name: 'Yellow ↔ Amber',
      sectionName: 'Documents / Warranties',
      role: 'Document storage, warranty tracking, manuals',
      examples: ['Document library', 'Warranty info', 'Manuals', 'Certificates']
    },
    {
      id: 'assistant',
      pairNumber: 'Pair-04',
      lightColor: '#FF4E9A',
      darkColor: '#E91E63',
      name: 'Pink ↔ Magenta (Assistant)',
      sectionName: 'AI Assistant',
      role: 'AI recommendations, smart suggestions, chat interface',
      examples: ['AI chat bubbles', 'Smart recommendations', 'Feature highlights', 'Assistant UI']
    },
    {
      id: 'emergency',
      pairNumber: 'Pair-05',
      lightColor: '#FF5555',
      darkColor: '#D32F2F',
      name: 'Red ↔ Coral/Red',
      sectionName: 'Emergency States',
      role: 'Critical alerts, emergency overlays, urgent actions',
      examples: ['Emergency alerts', 'Critical warnings', 'System failures', 'Urgent repairs']
    }
  ];

  if (currentView === 'overview') {
    return (
      <div>
        <OverviewSection onNavigate={setCurrentView} />
        <div className="fixed bottom-8 right-8">
          <select 
            value={currentView} 
            onChange={(e) => setCurrentView(e.target.value)}
            className="p-3 rounded-lg border bg-white text-black focus-ring"
          >
            <option value="overview">System Overview</option>
            {motifs.map(motif => (
              <option key={motif.id} value={motif.id}>{motif.pairNumber} - {motif.sectionName}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  const currentMotif = motifs.find(m => m.id === currentView);
  if (!currentMotif) return <OverviewSection onNavigate={setCurrentView} />;

  return (
    <div>
      <MotifShowcase {...currentMotif} />
      <div className="fixed bottom-8 right-8">
        <select 
          value={currentView} 
          onChange={(e) => setCurrentView(e.target.value)}
          className="p-3 rounded-lg border bg-white text-black focus-ring"
        >
          <option value="overview">← System Overview</option>
          {motifs.map(motif => (
            <option key={motif.id} value={motif.id}>{motif.pairNumber} - {motif.sectionName}</option>
          ))}
        </select>
      </div>
    </div>
  );
};