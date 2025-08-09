import React from 'react';
import { Badge } from "../../../ui/badge";

export const EmailSpecimen: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="card-light">
        <div className="flex items-center justify-between mb-6">
          <h3 className="heading-h2 text-neutral-text-dark">Email Notification</h3>
          <Badge 
            className="border"
            style={{ 
              backgroundColor: 'var(--section-maintenance-pattern)',
              borderColor: 'var(--section-maintenance-border)',
              color: 'var(--neutral-text-dark)'
            }}
          >
            Uses Maintenance Color Pair (Lime ↔ Deep Teal)
          </Badge>
        </div>
        
        {/* Email Mock */}
        <div className="rounded-xl overflow-hidden border border-gray-200 max-w-lg mx-auto">
          <div className="bg-white">
            {/* Email Header - Lime background with white text, no conflicting classes */}
            <div 
              className="p-6 text-center"
              style={{ 
                backgroundColor: '#00B451',
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: '#00A148' }}
                >
                  <div 
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: '#00B451' }}
                  />
                </div>
              </div>
              <h2 
                className="font-display mb-2" 
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '1.5rem',
                  lineHeight: '2.125rem',
                  fontWeight: '700'
                }}
              >
                Maintenance Complete!
              </h2>
              <p 
                style={{ 
                  color: '#FFFFFF', 
                  opacity: 0.9,
                  fontSize: '1rem',
                  lineHeight: '1.5rem'
                }}
              >
                Your HVAC filter has been replaced
              </p>
            </div>
            
            {/* Email Body */}
            <div className="p-6">
              <p className="body-m mb-4 text-neutral-text-dark">
                Hi Sarah,
              </p>
              <p className="body-m mb-6 text-neutral-text-dark">
                Your scheduled HVAC filter replacement was completed successfully today. 
                The technician noted excellent system performance and no additional maintenance needed.
              </p>
              
              <div className="mb-6">
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">Service Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="body-s text-neutral-text-dark">Filter Type:</span>
                    <span className="body-s font-medium text-neutral-text-dark">MERV 13 Pleated</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-s text-neutral-text-dark">Next Service:</span>
                    <span className="body-s font-medium text-neutral-text-dark">June 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-s text-neutral-text-dark">Technician:</span>
                    <span className="body-s font-medium text-neutral-text-dark">Mike R.</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  className="px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: '#00A148',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '1rem'
                  }}
                >
                  View Full Report
                </button>
              </div>
            </div>
            
            {/* Email Footer */}
            <div 
              className="p-4 text-center" 
              style={{ 
                backgroundColor: '#00B451',
                color: '#FFFFFF'
              }}
            >
              <p 
                className="font-mono font-medium"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '0.813rem'
                }}
              >
                Home Mission Control
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif System Implementation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Email Structure</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Header/footer use lime background with white text</li>
                <li className="body-s text-neutral-text-dark">• Body content in neutral off-white card</li>
                <li className="body-s text-neutral-text-dark">• Deep teal button with white text</li>
                <li className="body-s text-neutral-text-dark">• Consistent icon treatment</li>
              </ul>
            </div>
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Brand Consistency</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Fraunces for main headline</li>
                <li className="body-s text-neutral-text-dark">• Inter for body and interface text</li>
                <li className="body-s text-neutral-text-dark">• JetBrains Mono for brand signature</li>
                <li className="body-s text-neutral-text-dark">• Rounded corners and generous spacing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};