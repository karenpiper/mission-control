import React from 'react';
import { Badge } from "../../ui/badge";

export const CoverEssenceSection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--brand-primary-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-home" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="display-xl font-display text-white mb-8">
              Home Mission Control
            </h1>
            <h2 className="heading-h1 text-white/90 mb-8">
              Brand Guidelines
            </h2>
            <p className="title-m text-white/80 max-w-3xl mx-auto">
              Complete brand system documentation for the confident, friendly utility that helps you maintain your sanctuary
            </p>
          </div>

          {/* Brand Essence Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-light">
              <h3 className="heading-h2 mb-6 text-neutral-text-dark">Brand Mission</h3>
              <p className="body-m text-neutral-text-dark mb-4">
                <strong>"Making home maintenance feel elegant and manageable"</strong>
              </p>
              <p className="body-s text-neutral-text-dark/70">
                We transform the overwhelming complexity of home care into an elegant, 
                confident experience that empowers homeowners to maintain their sanctuary with clarity and control.
              </p>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-6 text-neutral-text-dark">Personality Traits</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Confident</h4>
                  <p className="body-s text-neutral-text-dark/70">Bold colors, clear hierarchy, decisive actions</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Friendly</h4>
                  <p className="body-s text-neutral-text-dark/70">Approachable language, generous spacing, helpful guidance</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Utility</h4>
                  <p className="body-s text-neutral-text-dark/70">Function-first design, clear information hierarchy</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Elegant</h4>
                  <p className="body-s text-neutral-text-dark/70">Refined typography, thoughtful color choices</p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Manageable</h4>
                  <p className="body-s text-neutral-text-dark/70">Digestible chunks, progressive disclosure</p>
                </div>
              </div>
            </div>

            <div className="card-light">
              <h3 className="heading-h2 mb-6 text-neutral-text-dark">Audience & Tone</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Primary Audience</h4>
                  <p className="body-s text-neutral-text-dark/70">
                    Homeowners who value their space but feel overwhelmed by maintenance complexity
                  </p>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Tone Adjectives</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Reassuring', 'Direct', 'Knowledgeable', 'Encouraging', 'Clear'].map((trait, index) => (
                      <Badge key={index} className="bg-neutral-text-dark/10 text-neutral-text-dark border-neutral-text-dark/20">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="heading-h3 text-neutral-text-dark mb-2">Secondary Audience</h4>
                  <p className="body-s text-neutral-text-dark/70">
                    Property managers, maintenance professionals, tech-savvy renters
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Do/Don't Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">✓ Always Do</h3>
              <ul className="space-y-3">
                <li className="body-m text-neutral-text-light">• Use vibrant color blocks confidently</li>
                <li className="body-m text-neutral-text-light">• Keep typography black or white only</li>
                <li className="body-m text-neutral-text-light">• Apply one color pair per section/page</li>
                <li className="body-m text-neutral-text-light">• Maintain generous spacing and clear hierarchy</li>
                <li className="body-m text-neutral-text-light">• Write in clear, action-oriented language</li>
                <li className="body-m text-neutral-text-light">• Use Display font for brand moments only</li>
                <li className="body-m text-neutral-text-light">• Ensure 65-85% canvas coverage with motif color</li>
              </ul>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">✗ Never Do</h3>
              <ul className="space-y-3">
                <li className="body-m text-neutral-text-light">• Mix color pairs within the same view</li>
                <li className="body-m text-neutral-text-light">• Use colored text (only black/white allowed)</li>
                <li className="body-m text-neutral-text-light">• Apply gradients or color transitions</li>
                <li className="body-m text-neutral-text-light">• Overcomplicate the interface with too many options</li>
                <li className="body-m text-neutral-text-light">• Use technical jargon without explanation</li>
                <li className="body-m text-neutral-text-light">• Scale Display font below 20px</li>
                <li className="body-m text-neutral-text-light">• Ignore accessibility contrast requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};