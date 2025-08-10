import React, { useState } from 'react';
import { DesignSystemShowcase } from './components/DesignSystemShowcase';
import { BrandGuidelines } from './components/BrandGuidelines';
import { HomeMissionControlApp } from './components/HomeMissionControlApp';
import { TailwindDemo } from './src/TailwindDemo';
import { Button } from './components/ui/button';
import { FileText, Palette, Home, Monitor, Sparkles } from 'lucide-react';

type AppView = 'guidelines' | 'showcase' | 'app' | 'tailwind';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('tailwind');

  const renderView = () => {
    switch (currentView) {
      case 'guidelines':
        return <BrandGuidelines />;
      case 'showcase':
        return <DesignSystemShowcase />;
      case 'app':
        return <HomeMissionControlApp />;
      case 'tailwind':
        return <TailwindDemo />;
      default:
        return <TailwindDemo />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      {/* App Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex gap-2 p-2 bg-white/90 backdrop-blur-sm rounded-xl border border-neutral-border shadow-lg">
          <Button
            variant={currentView === 'tailwind' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('tailwind')}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Tailwind
          </Button>
          <Button
            variant={currentView === 'guidelines' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('guidelines')}
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Guidelines
          </Button>
          <Button
            variant={currentView === 'showcase' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('showcase')}
            className="flex items-center gap-2"
          >
            <Palette className="w-4 h-4" />
            Motif System
          </Button>
          <Button
            variant={currentView === 'app' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('app')}
            className="flex items-center gap-2"
          >
            <Monitor className="w-4 h-4" />
            Live App
          </Button>
        </div>
      </div>

      {renderView()}
    </div>
  );
}