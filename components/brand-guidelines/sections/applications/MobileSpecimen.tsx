import React from 'react';
import { Badge } from "../../../ui/badge";
import { Home, Bell, User, Settings } from 'lucide-react';

export const MobileSpecimen: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="card-light">
        <div className="flex items-center justify-between mb-6">
          <h3 className="heading-h2 text-neutral-text-dark">Mobile Application</h3>
          <Badge 
            className="border"
            style={{ 
              backgroundColor: 'var(--section-repairs-pattern)',
              borderColor: 'var(--section-repairs-border)',
              color: 'var(--neutral-text-dark)'
            }}
          >
            Uses Repairs Color Pair (Sand ↔ Orange)
          </Badge>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            {/* Mobile Device Frame */}
            <div 
              className="w-full h-[640px] rounded-2xl relative overflow-hidden"
              style={{ 
                backgroundColor: '#FF8A3D',
                color: '#FFFFFF'
              }}
            >
              {/* Status Bar */}
              <div className="relative z-10 flex justify-between items-center px-6 pt-4 pb-2">
                <span 
                  className="font-mono font-medium"
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: '0.813rem'
                  }}
                >
                  9:41 AM
                </span>
                <div className="flex gap-1">
                  <div 
                    className="w-4 h-2 rounded-sm"
                    style={{ backgroundColor: '#FFFFFF', opacity: 0.6 }}
                  />
                  <div 
                    className="w-4 h-2 rounded-sm"
                    style={{ backgroundColor: '#FFFFFF', opacity: 0.8 }}
                  />
                  <div 
                    className="w-4 h-2 rounded-sm"
                    style={{ backgroundColor: '#FFFFFF' }}
                  />
                </div>
              </div>
              
              {/* Header */}
              <div className="relative z-10 px-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: '#FF7A1F' }}
                  >
                    <div 
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: '#FF8A3D' }}
                    />
                  </div>
                  <div>
                    <h1 
                      className="font-display" 
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: '1.75rem',
                        lineHeight: '2.125rem',
                        fontWeight: '700'
                      }}
                    >
                      Work Log
                    </h1>
                    <p 
                      style={{ 
                        color: '#FFFFFF', 
                        opacity: 0.9,
                        fontSize: '1rem',
                        lineHeight: '1.5rem'
                      }}
                    >
                      Track repair tasks
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="relative z-10 px-6 flex-1 space-y-4">
                <div className="card-light">
                  <h4 className="heading-h3 mb-2 text-neutral-text-dark">Kitchen Faucet Leak</h4>
                  <p className="body-s text-neutral-text-dark mb-3">Scheduled for today</p>
                  <div className="flex items-center justify-between">
                    <span className="body-s text-neutral-text-dark">Priority: High</span>
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#FF5555' }}
                    />
                  </div>
                </div>
                
                <div className="card-light">
                  <h4 className="heading-h3 mb-2 text-neutral-text-dark">Garage Door Tune-up</h4>
                  <p className="body-s text-neutral-text-dark mb-3">Tomorrow 10:00 AM</p>
                  <button
                    className="w-full py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: '#FF7A1F',
                      color: '#FFFFFF',
                      border: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    Schedule Service
                  </button>
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="relative z-10 px-6 py-4 mt-auto">
                <div 
                  className="rounded-2xl px-4 py-2"
                  style={{ 
                    backgroundColor: '#FF7A1F',
                    color: '#FFFFFF'
                  }}
                >
                  <div className="flex justify-around">
                    <div className="flex flex-col items-center py-2">
                      <Home 
                        className="w-5 h-5" 
                        style={{ color: '#FFFFFF' }}
                      />
                      <span 
                        className="font-medium mt-1"
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: '0.75rem'
                        }}
                      >
                        Home
                      </span>
                    </div>
                    <div className="flex flex-col items-center py-2" style={{ opacity: 0.6 }}>
                      <Bell 
                        className="w-5 h-5" 
                        style={{ color: '#FFFFFF' }}
                      />
                      <span 
                        className="mt-1"
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: '0.75rem'
                        }}
                      >
                        Alerts
                      </span>
                    </div>
                    <div className="flex flex-col items-center py-2" style={{ opacity: 0.6 }}>
                      <User 
                        className="w-5 h-5" 
                        style={{ color: '#FFFFFF' }}
                      />
                      <span 
                        className="mt-1"
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: '0.75rem'
                        }}
                      >
                        Profile
                      </span>
                    </div>
                    <div className="flex flex-col items-center py-2" style={{ opacity: 0.6 }}>
                      <Settings 
                        className="w-5 h-5" 
                        style={{ color: '#FFFFFF' }}
                      />
                      <span 
                        className="mt-1"
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: '0.75rem'
                        }}
                      >
                        Settings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h4 className="heading-h3 mb-4 text-neutral-text-dark">Motif System Implementation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Mobile Interface</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Sand background with pure white text</li>
                <li className="body-s text-neutral-text-dark">• Orange navigation and button accents</li>
                <li className="body-s text-neutral-text-dark">• Off-white content cards for readability</li>
                <li className="body-s text-neutral-text-dark">• Consistent rounded corners and spacing</li>
              </ul>
            </div>
            <div>
              <h5 className="title-m mb-3 text-neutral-text-dark">✓ Mobile Best Practices</h5>
              <ul className="space-y-2">
                <li className="body-s text-neutral-text-dark">• Fraunces for app headers and titles</li>
                <li className="body-s text-neutral-text-dark">• Inter for interface and body text</li>
                <li className="body-s text-neutral-text-dark">• Touch-friendly button sizes</li>
                <li className="body-s text-neutral-text-dark">• High contrast for outdoor visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};