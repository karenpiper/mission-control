import React from 'react';

export const TailwindDemo = () => {
  return (
    <div className="min-h-screen bg-neutral-canvas-light p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="heading-h2 text-neutral-text-dark">Typography System</h2>
          
          <div className="space-y-4">
            <h1 className="display-xl text-neutral-text-dark">Display XL - Fraunces Font</h1>
            <h2 className="display-l text-neutral-text-dark">Display L - Fraunces Font</h2>
            <h3 className="heading-h1 text-neutral-text-dark">Heading H1 - Inter Font</h3>
            <h4 className="heading-h2 text-neutral-text-dark">Heading H2 - Inter Font</h4>
            <h5 className="heading-h3 text-neutral-text-dark">Heading H3 - Inter Font</h5>
            <p className="title-m text-neutral-text-dark">Title M - Medium Weight</p>
            <p className="body-m text-neutral-text-dark">Body M - Normal Weight</p>
            <p className="body-s text-neutral-text-dark">Body S - Small Text</p>
            <p className="label-s text-neutral-text-dark">Label S - Small Labels</p>
            <code className="mono-code-s text-neutral-text-dark">Mono Code S - Monospace</code>
          </div>
        </section>

        {/* Color System Section */}
        <section className="space-y-6">
          <h2 className="heading-h2 text-neutral-text-dark">Color System</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Neutral Colors */}
            <div className="space-y-2">
              <div className="h-20 bg-neutral-canvas-light border border-neutral-border rounded-md"></div>
              <p className="text-sm font-medium">Neutral Light</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-neutral-canvas-dark rounded-md"></div>
              <p className="text-sm font-medium">Neutral Dark</p>
            </div>
            
            {/* Color Pairs */}
            <div className="space-y-2">
              <div className="h-20 bg-pair-01-bg-100 rounded-md"></div>
              <p className="text-sm font-medium">Pair 01 - Deep Teal</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-pair-01-bg-200 rounded-md"></div>
              <p className="text-sm font-medium">Pair 01 - Lime</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-pair-03-bg-100 rounded-md"></div>
              <p className="text-sm font-medium">Pair 03 - Purple</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-pair-03-bg-200 rounded-md"></div>
              <p className="text-sm font-medium">Pair 03 - Lilac</p>
            </div>
          </div>
        </section>

        {/* Component Examples Section */}
        <section className="space-y-6">
          <h2 className="heading-h2 text-neutral-text-dark">Component Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cards */}
            <div className="space-y-4">
              <h3 className="heading-h3 text-neutral-text-dark">Cards</h3>
              <div className="card-light">
                <p className="body-m">Light Card Example</p>
              </div>
              <div className="card-dark">
                <p className="body-m">Dark Card Example</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <h3 className="heading-h3 text-neutral-text-dark">Buttons</h3>
              <div className="space-y-2">
                <button className="btn-primary-light">Primary Light</button>
                <button className="btn-primary-dark">Primary Dark</button>
                <button className="btn-outline">Outline Button</button>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Overlays Section */}
        <section className="space-y-6">
          <h2 className="heading-h2 text-neutral-text-dark">Pattern Overlays</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="pattern-overlay pattern-home h-32 rounded-md bg-neutral-canvas-light">
              <div className="relative z-20 p-4">
                <p className="text-sm font-medium text-neutral-text-dark">Home Pattern</p>
              </div>
            </div>
            <div className="pattern-overlay pattern-rooms h-32 rounded-md bg-neutral-canvas-light">
              <div className="relative z-20 p-4">
                <p className="text-sm font-medium text-neutral-text-dark">Rooms Pattern</p>
              </div>
            </div>
            <div className="pattern-overlay pattern-repairs h-32 rounded-md bg-neutral-canvas-light">
              <div className="relative z-20 p-4">
                <p className="text-sm font-medium text-neutral-text-dark">Repairs Pattern</p>
              </div>
            </div>
            <div className="pattern-overlay pattern-systems h-32 rounded-md bg-neutral-canvas-light">
              <div className="relative z-20 p-4">
                <p className="text-sm font-medium text-neutral-text-dark">Systems Pattern</p>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Classes Section */}
        <section className="space-y-6">
          <h2 className="heading-h2 text-neutral-text-dark">Utility Classes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spacing */}
            <div className="space-y-4">
              <h3 className="heading-h3 text-neutral-text-dark">Spacing</h3>
              <div className="space-y-2">
                <div className="h-4 bg-pair-01-bg-100 rounded"></div>
                <div className="h-4 bg-pair-01-bg-100 rounded ml-4"></div>
                <div className="h-4 bg-pair-01-bg-100 rounded ml-8"></div>
                <div className="h-4 bg-pair-01-bg-100 rounded ml-12"></div>
              </div>
            </div>

            {/* Border Radius */}
            <div className="space-y-4">
              <h3 className="heading-h3 text-neutral-text-dark">Border Radius</h3>
              <div className="space-y-2">
                <div className="h-12 bg-pair-03-bg-100 rounded-sm"></div>
                <div className="h-12 bg-pair-03-bg-100 rounded-md"></div>
                <div className="h-12 bg-pair-03-bg-100 rounded-lg"></div>
                <div className="h-12 bg-pair-03-bg-100 rounded-xl"></div>
              </div>
            </div>

            {/* Shadows */}
            <div className="space-y-4">
              <h3 className="heading-h3 text-neutral-text-dark">Shadows</h3>
              <div className="space-y-2">
                <div className="h-12 bg-neutral-canvas-light rounded-md shadow-elevation-1"></div>
                <div className="h-12 bg-neutral-canvas-light rounded-md shadow-elevation-2"></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}; 