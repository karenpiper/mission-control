import React from 'react';
import { XCircle } from 'lucide-react';
import { Badge } from "../../ui/badge";

export const DataVisualizationSection: React.FC = () => {
  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 82 },
    { month: 'Apr', value: 74 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 92 }
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--info-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-systems" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-white mb-4">
              Data Visualization
            </h1>
            <p className="title-m text-white/90 max-w-4xl mx-auto">
              Chart color palettes, legibility rules, and data presentation standards. 
              All visualizations must maintain the one-pair rule and ensure accessibility.
            </p>
          </div>

          {/* Chart Color Rules */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Chart Color Palette Rules</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Primary Data</h4>
                <div className="space-y-4">
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--info-bg)' }}
                  >
                    <p className="body-m text-white font-medium">Active Page Pair</p>
                    <p className="body-s text-white/80">Use the current section's color pair for main data</p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Data Variants</p>
                    <div className="flex gap-2 mt-2">
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: 'var(--info-bg)' }}
                      />
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: 'var(--info-bg)', opacity: 0.8 }}
                      />
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: 'var(--info-bg)', opacity: 0.6 }}
                      />
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: 'var(--info-bg)', opacity: 0.4 }}
                      />
                    </div>
                    <p className="body-s text-neutral-text-dark/70 mt-2">100%, 80%, 60%, 40% opacity variants</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Supporting Elements</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-px bg-neutral-text-dark/30" />
                      <p className="body-m text-neutral-text-dark font-medium">Grid Lines</p>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Black/white at ≤12% opacity</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 border border-neutral-text-dark/50" />
                      <p className="body-m text-neutral-text-dark font-medium">Axes</p>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Black/white at 50% opacity</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="body-s font-medium text-neutral-text-dark">Aa</span>
                      <p className="body-m text-neutral-text-dark font-medium">Labels</p>
                    </div>
                    <p className="body-s text-neutral-text-dark/70">Black/white text, minimum 12px</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Prohibited</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-danger-soft rounded-lg border border-danger-border">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">Mixed Color Pairs</p>
                      <p className="body-s text-neutral-text-dark/70">Never combine pairs in one chart</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-danger-soft rounded-lg border border-danger-border">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">Rainbow Charts</p>
                      <p className="body-s text-neutral-text-dark/70">Avoid unrelated color combinations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-danger-soft rounded-lg border border-danger-border">
                    <XCircle className="w-5 h-5 text-danger-bg" />
                    <div>
                      <p className="body-m text-neutral-text-dark font-medium">Colored Text</p>
                      <p className="body-s text-neutral-text-dark/70">Labels must be black or white</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Correct Implementation</h3>
              <div 
                className="bg-white p-6 rounded-lg mb-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              >
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Home Efficiency Score</h4>
                
                {/* Simple Bar Chart */}
                <div className="space-y-3">
                  {chartData.map((data, index) => (
                    <div key={data.month} className="flex items-center gap-3">
                      <div className="w-8 text-neutral-text-dark body-s">{data.month}</div>
                      <div className="flex-1 bg-neutral-text-dark/10 rounded-full h-6 relative">
                        <div 
                          className="h-full rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                          style={{ 
                            width: `${data.value}%`,
                            backgroundColor: 'var(--info-bg)'
                          }}
                        >
                          <span className="text-white text-xs font-medium">{data.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-text-dark/10">
                  <div className="flex items-center justify-between">
                    <span className="body-s text-neutral-text-dark/70">Performance Trend</span>
                    <span className="body-s text-neutral-text-dark font-medium">+15% this quarter</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-neutral-text-light">
                <p className="body-m">✓ Single color pair usage</p>
                <p className="body-m">✓ Black/white text labels</p>
                <p className="body-m">✓ Clear data hierarchy</p>
                <p className="body-m">✓ Accessible contrast ratios</p>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Chart Types & Usage</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-3 text-neutral-text-light">Recommended Charts</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Bar Charts</p>
                      <p className="body-s text-neutral-text-light/70">Comparing quantities, progress tracking</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Line Charts</p>
                      <p className="body-s text-neutral-text-light/70">Time series, trend analysis</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <p className="body-m text-neutral-text-light font-medium">Simple Pie Charts</p>
                      <p className="body-s text-neutral-text-light/70">Part-to-whole, max 5 segments</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-3 text-neutral-text-light">Accessibility Requirements</h4>
                  <ul className="space-y-2">
                    <li className="body-m text-neutral-text-light">• Minimum 12px text size</li>
                    <li className="body-m text-neutral-text-light">• Pattern fills for colorblind users</li>
                    <li className="body-m text-neutral-text-light">• Data tables as alternatives</li>
                    <li className="body-m text-neutral-text-light">• Screen reader friendly markup</li>
                    <li className="body-m text-neutral-text-light">• Clear data point indicators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Table Standards */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Data Table Standards</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Table Structure</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-neutral-text-dark/20">
                    <thead>
                      <tr 
                        className="border-b border-neutral-text-dark/20"
                        style={{ backgroundColor: 'var(--info-soft)' }}
                      >
                        <th className="p-3 text-left body-m font-medium text-neutral-text-dark">Room</th>
                        <th className="p-3 text-left body-m font-medium text-neutral-text-dark">Status</th>
                        <th className="p-3 text-right body-m font-medium text-neutral-text-dark">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-text-dark/10">
                        <td className="p-3 body-m text-neutral-text-dark">Living Room</td>
                        <td className="p-3">
                          <Badge 
                            className="text-neutral-text-dark"
                            style={{ 
                              backgroundColor: 'var(--success-soft)', 
                              borderColor: 'var(--success-border)' 
                            }}
                          >
                            Optimal
                          </Badge>
                        </td>
                        <td className="p-3 text-right body-m font-medium text-neutral-text-dark">94</td>
                      </tr>
                      <tr className="border-b border-neutral-text-dark/10">
                        <td className="p-3 body-m text-neutral-text-dark">Kitchen</td>
                        <td className="p-3">
                          <Badge 
                            className="text-neutral-text-dark"
                            style={{ 
                              backgroundColor: 'var(--warn-soft)', 
                              borderColor: 'var(--warn-border)' 
                            }}
                          >
                            Review
                          </Badge>
                        </td>
                        <td className="p-3 text-right body-m font-medium text-neutral-text-dark">78</td>
                      </tr>
                      <tr>
                        <td className="p-3 body-m text-neutral-text-dark">Bedroom</td>
                        <td className="p-3">
                          <Badge 
                            className="text-neutral-text-dark"
                            style={{ 
                              backgroundColor: 'var(--success-soft)', 
                              borderColor: 'var(--success-border)' 
                            }}
                          >
                            Good
                          </Badge>
                        </td>
                        <td className="p-3 text-right body-m font-medium text-neutral-text-dark">86</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Table Guidelines</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Header Styling</h5>
                    <ul className="space-y-1">
                      <li className="body-s text-neutral-text-dark">• Use soft color from page pair</li>
                      <li className="body-s text-neutral-text-dark">• Medium weight typography</li>
                      <li className="body-s text-neutral-text-dark">• Clear column alignment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Row Treatment</h5>
                    <ul className="space-y-1">
                      <li className="body-s text-neutral-text-dark">• Subtle border separation</li>
                      <li className="body-s text-neutral-text-dark">• Consistent padding (12-16px)</li>
                      <li className="body-s text-neutral-text-dark">• Hover states for interaction</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Status Indicators</h5>
                    <ul className="space-y-1">
                      <li className="body-s text-neutral-text-dark">• Use role-based badge colors</li>
                      <li className="body-s text-neutral-text-dark">• Maintain black/white text</li>
                      <li className="body-s text-neutral-text-dark">• Include alternative text markers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};