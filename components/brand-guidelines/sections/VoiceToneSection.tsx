import React from 'react';
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { FileText, Plus } from 'lucide-react';

export const VoiceToneSection: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ backgroundColor: 'var(--highlight-bg)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none pattern-documents" />
      
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="display-xl font-display text-black mb-4">
              Voice & Tone Guidelines
            </h1>
            <p className="title-m text-black/80 max-w-4xl mx-auto">
              Writing principles, microcopy patterns, and editorial standards. Our voice reflects our brand personality: 
              confident, friendly, utility-focused, elegant, and manageable.
            </p>
          </div>

          {/* Voice Principles */}
          <div className="card-light mb-12">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Brand Voice Principles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">How We Sound</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Reassuring Expert</h5>
                    <p className="body-s text-neutral-text-dark/70">
                      We know home maintenance inside and out. We've seen it all, and we're here to guide you through any challenge.
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Encouraging Guide</h5>
                    <p className="body-s text-neutral-text-dark/70">
                      Every homeowner can master their space. We celebrate progress and make complex tasks feel achievable.
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-surface rounded-lg">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Clear Communicator</h5>
                    <p className="body-s text-neutral-text-dark/70">
                      No jargon, no confusion. We explain things in plain language and always lead with what matters most.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Tone Shifts by Context</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-success-soft rounded-lg border border-success-border">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Success States</h5>
                    <p className="body-s text-neutral-text-dark/70 mb-2">Celebratory but not overly enthusiastic</p>
                    <p className="body-s text-neutral-text-dark italic">"Great work! Your HVAC filter has been replaced."</p>
                  </div>
                  <div className="p-4 bg-warn-soft rounded-lg border border-warn-border">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Warning States</h5>
                    <p className="body-s text-neutral-text-dark/70 mb-2">Direct but supportive, solution-focused</p>
                    <p className="body-s text-neutral-text-dark italic">"Your smoke detector needs attention. Here's how to fix it."</p>
                  </div>
                  <div className="p-4 bg-danger-soft rounded-lg border border-danger-border">
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">Error States</h5>
                    <p className="body-s text-neutral-text-dark/70 mb-2">Calm, helpful, never blame the user</p>
                    <p className="body-s text-neutral-text-dark italic">"Something went wrong. Let's try that again."</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Language Guidelines</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">✓ Use These Words</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Maintain', 'Optimize', 'Elegant', 'Sanctuary', 'Confidence', 'Clarity', 'Master', 'Efficient'].map((word, index) => (
                        <Badge key={index} className="bg-success-soft text-neutral-text-dark border-success-border">
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="body-m font-medium text-neutral-text-dark mb-2">✗ Avoid These Words</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Cheap', 'Easy', 'Quick Fix', 'Hack', 'Perfect', 'Amazing', 'Revolutionary'].map((word, index) => (
                        <Badge key={index} className="bg-danger-soft text-neutral-text-dark border-danger-border">
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microcopy Patterns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Microcopy Patterns</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Button Labels</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="body-m text-neutral-text-light">Primary Actions</span>
                      <Button size="sm" className="bg-white text-black">
                        Complete Task
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="body-m text-neutral-text-light">Secondary Actions</span>
                      <Button size="sm" variant="outline" className="border-white text-white">
                        Learn More
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <span className="body-m text-neutral-text-light">Destructive Actions</span>
                      <Button size="sm" className="bg-white text-black">
                        Remove Item
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <p className="body-s text-neutral-text-light/80">
                      <strong>Rule:</strong> Start with action verbs, be specific about outcomes
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Form Labels & Placeholders</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="label-s uppercase tracking-wide text-neutral-text-light/70 block mb-2">
                        Email Address
                      </label>
                      <Input 
                        placeholder="your.email@example.com"
                        className="bg-white text-neutral-text-dark"
                      />
                    </div>
                    <div>
                      <label className="label-s uppercase tracking-wide text-neutral-text-light/70 block mb-2">
                        Property Type
                      </label>
                      <Input 
                        placeholder="House, Apartment, Condo"
                        className="bg-white text-neutral-text-dark"
                      />
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <p className="body-s text-neutral-text-light/80">
                      <strong>Rule:</strong> Labels are clear, placeholders show format examples
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark">
              <h3 className="heading-h2 mb-6 text-neutral-text-light">Message Examples</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Empty States</h4>
                  <div className="p-6 bg-white/5 rounded-lg text-center border-2 border-dashed border-white/20">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-white/60" />
                    <h5 className="body-m font-medium text-neutral-text-light mb-2">No documents yet</h5>
                    <p className="body-s text-neutral-text-light/80 mb-4">
                      Upload warranties, manuals, and service records to keep everything organized.
                    </p>
                    <Button size="sm" className="bg-white text-black">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Document
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="heading-h3 mb-4 text-neutral-text-light">Loading States</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="body-m text-neutral-text-light">Analyzing your home data...</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="body-m text-neutral-text-light">Scheduling your maintenance...</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <p className="body-s text-neutral-text-light/80">
                      <strong>Rule:</strong> Describe what's happening, set expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Standards */}
          <div className="card-light">
            <h3 className="heading-h2 mb-8 text-neutral-text-dark text-center">Editorial Standards</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Capitalization</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Sentence case</p>
                    <p className="body-s text-neutral-text-dark/70">Default for all UI text</p>
                    <p className="body-s text-neutral-text-dark italic">"Complete your maintenance"</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">ALL CAPS</p>
                    <p className="body-s text-neutral-text-dark/70">Only for form labels</p>
                    <p className="body-s text-neutral-text-dark italic">"EMAIL ADDRESS"</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Title Case</p>
                    <p className="body-s text-neutral-text-dark/70">Brand name and proper nouns</p>
                    <p className="body-s text-neutral-text-dark italic">"Home Mission Control"</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Numbers & Dates</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Numbers</p>
                    <p className="body-s text-neutral-text-dark/70">Spell out one through nine</p>
                    <p className="body-s text-neutral-text-dark italic">"five tasks" / "12 rooms"</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Dates</p>
                    <p className="body-s text-neutral-text-dark/70">Mon DD format</p>
                    <p className="body-s text-neutral-text-dark italic">"Jan 15" / "Due Mar 3"</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Time</p>
                    <p className="body-s text-neutral-text-dark/70">12-hour format</p>
                    <p className="body-s text-neutral-text-dark italic">"2:30 PM" / "9:00 AM"</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Punctuation</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Oxford comma</p>
                    <p className="body-s text-neutral-text-dark/70">Always use in lists</p>
                    <p className="body-s text-neutral-text-dark italic">"rooms, tasks, and alerts"</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Contractions</p>
                    <p className="body-s text-neutral-text-dark/70">Use sparingly for friendliness</p>
                    <p className="body-s text-neutral-text-dark italic">"We'll help you" (not "We will")</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Periods</p>
                    <p className="body-s text-neutral-text-dark/70">Skip in UI labels and buttons</p>
                    <p className="body-s text-neutral-text-dark italic">"Complete task" (no period)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="heading-h3 mb-4 text-neutral-text-dark">Content Strategy</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Scannable</p>
                    <p className="body-s text-neutral-text-dark/70">Use bullet points and short paragraphs</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Actionable</p>
                    <p className="body-s text-neutral-text-dark/70">Tell users what they can do next</p>
                  </div>
                  <div className="p-3 bg-neutral-surface rounded-lg">
                    <p className="body-m text-neutral-text-dark font-medium">Inclusive</p>
                    <p className="body-s text-neutral-text-dark/70">Use "you" and avoid assumptions</p>
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