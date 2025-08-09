import React from 'react';
import { Badge } from "../../../ui/badge";

export const SocialSpecimen: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="card-light">
        <div className="flex items-center justify-between mb-6">
          <h3 className="heading-h2 text-neutral-text-dark">Social Media Posts</h3>
          <Badge 
            className="border"
            style={{ 
              backgroundColor: 'var(--section-documents-pattern)',
              borderColor: 'var(--section-documents-border)',
              color: 'var(--neutral-text-dark)'
            }}
          >
            Uses Documents Color Pair (Yellow ↔ Amber)
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Post */}
          <div>
            <h4 className="title-m mb-4 text-neutral-text-dark">Instagram Story</h4>
            <div 
              className="aspect-square rounded-xl p-8 relative overflow-hidden"
              style={{ 
                backgroundColor: '#FFD836',
                color: '#FFFFFF'
              }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between" style={{ color: '#FFFFFF' }}>
                <div className="text-center">
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    style={{ backgroundColor: '#FFCD1C' }}
                  >
                    <div 
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: '#FFD836' }}
                    />
                  </div>
                  <h3 
                    className="font-display mb-4" 
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: '1.5rem',
                      lineHeight: '2.125rem',
                      fontWeight: '700'
                    }}
                  >
                    Maintenance Tip
                  </h3>
                  <p 
                    style={{ 
                      color: '#FFFFFF', 
                      opacity: 0.9,
                      fontSize: '1rem',
                      lineHeight: '1.5rem'
                    }}
                  >
                    Clean your dryer vent every 6 months to prevent fires and improve efficiency
                  </p>
                </div>
                <div className="text-center">
                  <p 
                    className="font-mono"
                    style={{ 
                      color: '#FFFFFF', 
                      opacity: 0.8,
                      fontSize: '0.813rem'
                    }}
                  >
                    #homemaintenance #safety
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* LinkedIn Article Header */}
          <div>
            <h4 className="title-m mb-4 text-neutral-text-dark">LinkedIn Article Header</h4>
            <div 
              className="aspect-[1.91/1] rounded-xl p-8 relative overflow-hidden"
              style={{ 
                backgroundColor: '#FFD836',
                color: '#FFFFFF'
              }}
            >
              <div className="relative z-10 flex items-center justify-center h-full" style={{ color: '#FFFFFF' }}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div 
                      className="w-2 h-8 rounded-full"
                      style={{ backgroundColor: '#FFCD1C' }}
                    />
                    <div 
                      className="w-2 h-6 rounded-full"
                      style={{ backgroundColor: '#FFCD1C', opacity: 0.7 }}
                    />
                    <div 
                      className="w-2 h-4 rounded-full"
                      style={{ backgroundColor: '#FFCD1C', opacity: 0.5 }}
                    />
                  </div>
                  <h3 
                    className="font-display mb-4" 
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: '1.75rem',
                      lineHeight: '2.125rem',
                      fontWeight: '700'
                    }}
                  >
                    5 Home Maintenance Myths Debunked
                  </h3>
                  <p 
                    style={{ 
                      color: '#FFFFFF', 
                      opacity: 0.9,
                      fontSize: '1rem',
                      lineHeight: '1.5rem'
                    }}
                  >
                    Separating fact from fiction in home care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif System Implementation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Social Media Strategy</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Yellow backgrounds with pure white text</li>
                <li className="body-s text-neutral-text-dark">• Amber accents and design elements</li>
                <li className="body-s text-neutral-text-dark">• Consistent icon and logo treatment</li>
                <li className="body-s text-neutral-text-dark">• Platform-optimized aspect ratios</li>
              </ul>
            </div>
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Content Hierarchy</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Fraunces display font for headlines</li>
                <li className="body-s text-neutral-text-dark">• Inter for body text and captions</li>
                <li className="body-s text-neutral-text-dark">• JetBrains Mono for hashtags</li>
                <li className="body-s text-neutral-text-dark">• High contrast ensures readability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};