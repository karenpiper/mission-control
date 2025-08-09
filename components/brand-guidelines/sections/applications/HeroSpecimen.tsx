import React from 'react';
import { Button } from "../../../ui/button";
import { Badge } from "../../../ui/badge";

export const HeroSpecimen: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="card-light">
        <div className="flex items-center justify-between mb-6">
          <h3 className="heading-h2 text-neutral-text-dark">Marketing Hero Section</h3>
          <Badge 
            className="border"
            style={{ 
              backgroundColor: 'var(--section-home-pattern)',
              borderColor: 'var(--section-home-border)',
              color: 'var(--neutral-text-dark)'
            }}
          >
            Uses Home Color Pair (Pink ↔ Magenta)
          </Badge>
        </div>
        
        {/* Hero Mock - Pink background with white text, no conflicting classes */}
        <div 
          className="rounded-xl p-12 relative overflow-hidden"
          style={{ 
            backgroundColor: '#FF4E9A',
            color: '#FFFFFF'
          }}
        >
          <div className="relative z-10 text-center" style={{ color: '#FFFFFF' }}>
            <div className="mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#FF3385' }}
              >
                <div 
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: '#FF4E9A' }}
                />
              </div>
              <h1 
                className="font-display mb-6"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '3rem',
                  lineHeight: '3.5rem',
                  fontWeight: '600'
                }}
              >
                Your Home Deserves Expert Care
              </h1>
              <p 
                className="mb-8 max-w-2xl mx-auto"
                style={{ 
                  color: '#FFFFFF', 
                  opacity: 0.9,
                  fontSize: '1.125rem',
                  lineHeight: '1.5rem',
                  fontWeight: '600'
                }}
              >
                Transform overwhelming maintenance into an elegant, manageable system that keeps your sanctuary perfect.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: '#FF3385',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '1rem'
                }}
              >
                Start Your Journey
              </button>
              <button
                className="px-8 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid #FFFFFF',
                  fontSize: '1rem'
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif System Implementation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Color Implementation</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Pink background with pure white text</li>
                <li className="body-s text-neutral-text-dark">• Magenta button with white text</li>
                <li className="body-s text-neutral-text-dark">• White border and text for outline button</li>
                <li className="body-s text-neutral-text-dark">• Icon treatment follows two-tone pattern</li>
              </ul>
            </div>
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Design Principles</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• 75% motif color coverage (within 65-85% rule)</li>
                <li className="body-s text-neutral-text-dark">• Fraunces display font for headline impact</li>
                <li className="body-s text-neutral-text-dark">• Inter UI font for supporting copy</li>
                <li className="body-s text-neutral-text-dark">• Generous spacing using 8pt grid system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};