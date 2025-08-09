import React from 'react';
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { guidelineSections } from './constants';

interface BrandGuidelinesNavProps {
  currentSection: string; 
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const BrandGuidelinesNav: React.FC<BrandGuidelinesNavProps> = ({ 
  currentSection, 
  onSectionChange, 
  isOpen, 
  onToggle 
}) => {
  const currentSectionData = guidelineSections.find(s => s.id === currentSection);
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-80 bg-neutral-canvas-light border-r border-neutral-border z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:z-0
      `}>
        <div className="p-6 border-b border-neutral-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-xl font-medium text-neutral-text-dark">Brand Guidelines</h1>
              <p className="body-s text-neutral-text-dark/60">Home Mission Control</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onToggle}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            {guidelineSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  onToggle(); // Close mobile menu
                }}
                className={`
                  w-full flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-200 group text-left
                  ${currentSection === section.id 
                    ? `text-white shadow-lg` 
                    : 'text-neutral-text-dark hover:bg-neutral-surface'
                  }
                `}
                style={currentSection === section.id ? {
                  backgroundColor: `var(--${section.colorScheme}-bg)`
                } : {}}
              >
                <span className={`
                  mt-0.5 flex-shrink-0
                  ${currentSection === section.id ? 'text-white' : `text-neutral-text-dark/60 group-hover:text-neutral-text-dark`}
                `}>
                  {section.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="heading-h3 mb-1">{index + 1}. {section.title}</div>
                  <p className={`body-s leading-snug ${
                    currentSection === section.id ? 'text-white/80' : 'text-neutral-text-dark/60'
                  }`}>
                    {section.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </nav>
        
        {/* Progress Indicator */}
        <div className="m-4 mt-8">
          <div className="card-light">
            <h4 className="heading-h3 text-neutral-text-dark mb-3">Progress</h4>
            <Progress 
              value={(guidelineSections.findIndex(s => s.id === currentSection) + 1) / guidelineSections.length * 100} 
              className="mb-2" 
            />
            <p className="body-s text-neutral-text-dark/60">
              Section {guidelineSections.findIndex(s => s.id === currentSection) + 1} of {guidelineSections.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface TopHeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onToggleSidebar: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ 
  currentSection, 
  onSectionChange, 
  onToggleSidebar 
}) => {
  const currentSectionData = guidelineSections.find(s => s.id === currentSection);
  const currentIndex = guidelineSections.findIndex(s => s.id === currentSection);
  const prevSection = currentIndex > 0 ? guidelineSections[currentIndex - 1] : null;
  const nextSection = currentIndex < guidelineSections.length - 1 ? guidelineSections[currentIndex + 1] : null;

  return (
    <div className="sticky top-0 z-30 bg-neutral-canvas-light/95 backdrop-blur-sm border-b border-neutral-border">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="heading-h3 text-neutral-text-dark">
              {currentSectionData?.title}
            </h1>
            <p className="body-s text-neutral-text-dark/60">
              Section {currentIndex + 1} of {guidelineSections.length}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => prevSection && onSectionChange(prevSection.id)}
            disabled={!prevSection}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => nextSection && onSectionChange(nextSection.id)}
            disabled={!nextSection}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};