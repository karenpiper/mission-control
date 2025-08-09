import React, { useState } from 'react';
import { Button } from "./ui/button";
import { BrandGuidelinesNav, TopHeader } from './brand-guidelines/BrandGuidelinesNav';
import { CoverEssenceSection } from './brand-guidelines/sections/CoverEssenceSection';
import { LogosSection } from './brand-guidelines/sections/LogosSection';
import { ColorSystemSection } from './brand-guidelines/sections/ColorSystemSection';
import { TypographySection } from './brand-guidelines/sections/TypographySection';
import { GraphicLanguageSection } from './brand-guidelines/sections/GraphicLanguageSection';
import { LayoutSystemSection } from './brand-guidelines/sections/LayoutSystemSection';
import { ComponentsSection } from './brand-guidelines/sections/ComponentsSection';
import { ImageryMediaSection } from './brand-guidelines/sections/ImageryMediaSection';
import { DataVisualizationSection } from './brand-guidelines/sections/DataVisualizationSection';
import { AccessibilitySection } from './brand-guidelines/sections/AccessibilitySection';
import { VoiceToneSection } from './brand-guidelines/sections/VoiceToneSection';
import { ApplicationsSection } from './brand-guidelines/sections/ApplicationsSection';
import { GovernanceSection } from './brand-guidelines/sections/GovernanceSection';

export const BrandGuidelines: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('cover');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'cover':
        return <CoverEssenceSection />;
      case 'logos':
        return <LogosSection />;
      case 'color':
        return <ColorSystemSection />;
      case 'typography':
        return <TypographySection />;
      case 'graphic':
        return <GraphicLanguageSection />;
      case 'layout':
        return <LayoutSystemSection />;
      case 'components':
        return <ComponentsSection />;
      case 'imagery':
        return <ImageryMediaSection />;
      case 'dataviz':
        return <DataVisualizationSection />;
      case 'accessibility':
        return <AccessibilitySection />;
      case 'voice':
        return <VoiceToneSection />;
      case 'applications':
        return <ApplicationsSection />;
      case 'governance':
        return <GovernanceSection />;
      default:
        return (
          <div 
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: 'var(--info-bg)' }}
          >
            <div className="card-light text-center max-w-2xl mx-auto">
              <h2 className="heading-h1 text-neutral-text-dark mb-4">Section Coming Soon</h2>
              <p className="body-m text-neutral-text-dark mb-6">
                This section is being developed and will include comprehensive guidelines for the selected topic.
              </p>
              <Button 
                onClick={() => setCurrentSection('cover')}
                className="bg-neutral-text-dark text-neutral-text-light"
              >
                Return to Cover
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      <TopHeader 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onToggleSidebar={toggleSidebar}
      />

      <div className="flex">
        <BrandGuidelinesNav 
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
          isOpen={sidebarOpen}
          onToggle={closeSidebar}
        />
        
        <main className="flex-1 lg:ml-0">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};