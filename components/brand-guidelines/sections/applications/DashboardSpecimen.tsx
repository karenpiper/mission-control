import React from 'react';
import { Badge } from "../../../ui/badge";

export const DashboardSpecimen: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="card-light">
        <div className="flex items-center justify-between mb-6">
          <h3 className="heading-h2 text-neutral-text-dark">Systems Dashboard</h3>
          <Badge 
            className="border"
            style={{ 
              backgroundColor: 'var(--section-systems-pattern)',
              borderColor: 'var(--section-systems-border)',
              color: 'var(--neutral-text-dark)'
            }}
          >
            Uses Systems Color Pair (Aqua ↔ Navy)
          </Badge>
        </div>
        
        {/* Dashboard Mock - Aqua background with white text, no conflicting classes */}
        <div 
          className="rounded-xl p-8 relative overflow-hidden"
          style={{ 
            backgroundColor: '#00C2FF',
            color: '#FFFFFF'
          }}
        >
          <div className="relative z-10" style={{ color: '#FFFFFF' }}>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#00A8E6' }}
                >
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: '#00C2FF' }} />
                </div>
                <div>
                  <h2 
                    className="font-display"
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: '1.75rem',
                      lineHeight: '2.125rem',
                      fontWeight: '700'
                    }}
                  >
                    System Overview
                  </h2>
                  <p 
                    style={{ 
                      color: '#FFFFFF', 
                      opacity: 0.9,
                      fontSize: '1rem',
                      lineHeight: '1.5rem'
                    }}
                  >
                    All systems operational
                  </p>
                </div>
              </div>
              <div 
                className="px-4 py-2 rounded-lg"
                style={{ 
                  backgroundColor: '#00A8E6',
                  color: '#FFFFFF'
                }}
              >
                <span 
                  className="font-medium"
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: '1rem'
                  }}
                >
                  Real-time Status
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-light">
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">HVAC System</h4>
                <p className="display-l font-display font-bold text-neutral-text-dark">72°F</p>
                <p className="body-m text-neutral-text-dark mb-4">Running efficiently</p>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#00B451' }}
                  />
                  <span className="body-s text-neutral-text-dark">Optimal Performance</span>
                </div>
              </div>
              
              <div className="card-light">
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">Water Heater</h4>
                <p className="display-l font-display font-bold text-neutral-text-dark">Active</p>
                <p className="body-m text-neutral-text-dark mb-4">Last maintenance: Jan 15</p>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#FF8A3D' }}
                  />
                  <span className="body-s text-neutral-text-dark">Service Due Soon</span>
                </div>
              </div>
              
              <div className="card-light">
                <h4 className="heading-h3 mb-3 text-neutral-text-dark">Security System</h4>
                <p className="display-l font-display font-bold text-neutral-text-dark">Secure</p>
                <p className="body-m text-neutral-text-dark mb-4">All sensors active</p>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#00B451' }}
                  />
                  <span className="body-s text-neutral-text-dark">Fully Armed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif System Implementation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Color Usage</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Header uses aqua background with pure white text</li>
                <li className="body-s text-neutral-text-dark">• Content cards are off-white with charcoal text</li>
                <li className="body-s text-neutral-text-dark">• Status indicators use contextual color pairs</li>
                <li className="body-s text-neutral-text-dark">• No gradients or color mixing</li>
              </ul>
            </div>
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Typography & Layout</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Fraunces display font for data/headers</li>
                <li className="body-s text-neutral-text-dark">• Inter UI font for interface text</li>
                <li className="body-s text-neutral-text-dark">• Consistent spacing using 8pt grid</li>
                <li className="body-s text-neutral-text-dark">• High contrast text on neutral cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};