import React, { useState } from 'react';
import { Button } from "../../ui/button";
import { specimens } from './applications/constants';
import { HeroSpecimen } from './applications/HeroSpecimen';
import { DashboardSpecimen } from './applications/DashboardSpecimen';
import { EmailSpecimen } from './applications/EmailSpecimen';
import { SocialSpecimen } from './applications/SocialSpecimen';
import { MobileSpecimen } from './applications/MobileSpecimen';

export const ApplicationsSection: React.FC = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<string>('hero');

  const renderSpecimen = () => {
    switch (selectedSpecimen) {
      case 'hero':
        return <HeroSpecimen />;
      case 'dashboard':
        return <DashboardSpecimen />;
      case 'email':
        return <EmailSpecimen />;
      case 'social':
        return <SocialSpecimen />;
      case 'mobile':
        return <MobileSpecimen />;
      default:
        return <HeroSpecimen />;
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--neutral-canvas-light)' }}
    >
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display mb-4" style={{ color: 'var(--neutral-text-dark)' }}>
              Application Specimens
            </h1>
            <p className="title-m max-w-4xl mx-auto" style={{ color: 'var(--neutral-text-dark)', opacity: 0.8 }}>
              Real-world examples demonstrating our motif system in action. 
              Each specimen properly implements color pairs, typography hierarchy, and brand consistency.
            </p>
          </div>

          {/* Specimen Navigation */}
          <div className="card-light mb-12">
            <div className="flex flex-wrap gap-4 justify-center p-6">
              {specimens.map((specimen) => (
                <Button
                  key={specimen.id}
                  onClick={() => setSelectedSpecimen(specimen.id)}
                  variant={selectedSpecimen === specimen.id ? 'default' : 'outline'}
                  className={
                    selectedSpecimen === specimen.id 
                      ? 'bg-neutral-text-dark text-neutral-text-light'
                      : 'border-neutral-text-dark text-neutral-text-dark hover:bg-neutral-text-dark hover:text-neutral-text-light'
                  }
                >
                  {specimen.icon}
                  <span className="ml-2">{specimen.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Render Selected Specimen */}
          {renderSpecimen()}
        </div>
      </div>
    </div>
  );
};